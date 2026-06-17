import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { createAsyncSingleton } from '../../src/state/createAsyncSingleton';

describe('createAsyncSingleton', () => {
  let clock: sinon.SinonFakeTimers;
  let warnStub: sinon.SinonStub;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    warnStub = sinon.stub(console, 'warn');
  });

  afterEach(() => {
    clock.restore();
    warnStub.restore();
  });

  describe('basic usage', () => {
    it('set resolves the promise', async () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      const p = s.get();
      s.set(42);
      expect(await p).to.equal(42);
    });

    it('returns the same promise across get() calls', () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      expect(s.get()).to.equal(s.get());
    });

    it('peek returns undefined before set', () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      expect(s.peek()).to.equal(undefined);
    });

    it('peek returns the value after set', () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      s.set(42);
      expect(s.peek()).to.equal(42);
    });
  });

  describe('timeout', () => {
    it('fires fallback when set is not called in time', async () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        timeout: { ms: 1000, fallback: () => 99 },
      });
      const p = s.get();
      clock.tick(1000);
      expect(await p).to.equal(99);
      expect(s.peek()).to.equal(99);
    });

    it('set before timeout cancels the timer', async () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        timeout: { ms: 1000, fallback: () => 99 },
      });
      const p = s.get();
      s.set(42);
      clock.tick(2000);
      expect(await p).to.equal(42);
      expect(s.peek()).to.equal(42);
    });

    it('set after timeout is ignored under default onReinit', () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        timeout: { ms: 1000, fallback: () => 99 },
      });
      clock.tick(1000);
      s.set(42);
      expect(s.peek()).to.equal(99);
    });

    it('no timeout option = promise stays pending without set', async () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      let resolvedTo: number | 'pending' = 'pending';
      s.get().then((v) => { resolvedTo = v; }, () => {});
      // Advance the fake clock a lot; nothing should fire.
      clock.tick(10_000);
      await Promise.resolve();
      expect(resolvedTo).to.equal('pending');
      expect(s.peek()).to.equal(undefined);
    });
  });

  describe('reset', () => {
    it('produces a fresh pending promise after reset', () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      s.set(42);
      const before = s.get();
      s.reset();
      const after = s.get();
      expect(before).to.not.equal(after);
      expect(s.peek()).to.equal(undefined);
    });

    it('cancels a pending timeout on reset', async () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        timeout: { ms: 1000, fallback: () => 99 },
      });
      const oldPromise = s.get();
      let oldResolved: number | 'pending' = 'pending';
      oldPromise.then((v) => { oldResolved = v; }, () => {});

      clock.tick(500);
      s.reset();
      // Advance past the ORIGINAL timeout (1000ms from t=0) but
      // before the NEW timeout (1000ms from t=500, i.e. t=1500).
      clock.tick(800);
      await Promise.resolve();

      // Original timer would have fired at t=1000, but reset
      // cancelled it; the old promise never settles.
      expect(oldResolved).to.equal('pending');
      // New timer (at t=1500) hasn't fired yet.
      expect(s.peek()).to.equal(undefined);
    });
  });

  describe('onReinit', () => {
    it("'ignore' (default) silently keeps original value", () => {
      const s = createAsyncSingleton<number>({ name: 'Test' });
      s.set(1);
      s.set(2);
      expect(s.peek()).to.equal(1);
      expect(warnStub.called).to.equal(false);
    });

    it("'replace' overwrites the resolved value", () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        onReinit: 'replace',
      });
      s.set(1);
      s.set(2);
      expect(s.peek()).to.equal(2);
    });

    it("'warn' warns and keeps original value", () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        onReinit: 'warn',
      });
      s.set(1);
      s.set(2);
      expect(s.peek()).to.equal(1);
      expect(warnStub.calledOnce).to.equal(true);
    });

    it("'throw' throws on re-set", () => {
      const s = createAsyncSingleton<number>({
        name: 'Test',
        onReinit: 'throw',
      });
      s.set(1);
      expect(() => s.set(2)).to.throw('Test: already initialised');
      expect(s.peek()).to.equal(1);
    });
  });
});
