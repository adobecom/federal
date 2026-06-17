import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { createSingleton } from '../../src/state/createSingleton';

describe('createSingleton', () => {
  let warnStub: sinon.SinonStub;

  beforeEach(() => {
    warnStub = sinon.stub(console, 'warn');
  });

  afterEach(() => {
    warnStub.restore();
  });

  describe('basic usage', () => {
    it('throws on get before set', () => {
      const s = createSingleton<number>({ name: 'Test' });
      expect(() => s.get()).to.throw(
        'Test: not initialised. Call set() first.',
      );
    });

    it('returns the value after set', () => {
      const s = createSingleton<number>({ name: 'Test' });
      s.set(42);
      expect(s.get()).to.equal(42);
    });

    it('returns undefined from peek before set', () => {
      const s = createSingleton<number>({ name: 'Test' });
      expect(s.peek()).to.equal(undefined);
    });

    it('returns the value from peek after set', () => {
      const s = createSingleton<number>({ name: 'Test' });
      s.set(42);
      expect(s.peek()).to.equal(42);
    });

    it('clears state on reset', () => {
      const s = createSingleton<number>({ name: 'Test' });
      s.set(42);
      s.reset();
      expect(s.peek()).to.equal(undefined);
      expect(() => s.get()).to.throw('Test: not initialised');
    });
  });

  describe('onReinit', () => {
    it("'warn' (default) warns once and keeps original value", () => {
      const s = createSingleton<number>({ name: 'Test' });
      s.set(1);
      s.set(2);
      expect(s.get()).to.equal(1);
      expect(warnStub.calledOnce).to.equal(true);
      expect(warnStub.firstCall.args[0]).to.contain('Test');
      expect(warnStub.firstCall.args[0]).to.contain('already initialised');
    });

    it("'ignore' silently keeps original value", () => {
      const s = createSingleton<number>({
        name: 'Test',
        onReinit: 'ignore',
      });
      s.set(1);
      s.set(2);
      expect(s.get()).to.equal(1);
      expect(warnStub.called).to.equal(false);
    });

    it("'throw' throws on re-init", () => {
      const s = createSingleton<number>({
        name: 'Test',
        onReinit: 'throw',
      });
      s.set(1);
      expect(() => s.set(2)).to.throw('Test: already initialised');
      expect(s.get()).to.equal(1);
    });

    it("'replace' overwrites on re-init", () => {
      const s = createSingleton<number>({
        name: 'Test',
        onReinit: 'replace',
      });
      s.set(1);
      s.set(2);
      expect(s.get()).to.equal(2);
    });
  });

  describe('validate', () => {
    const isNumber = (v: unknown): v is number => typeof v === 'number';

    it('accepts a valid value', () => {
      const s = createSingleton<number>({
        name: 'Test',
        validate: isNumber,
      });
      s.set(42);
      expect(s.get()).to.equal(42);
    });

    it('throws on invalid value', () => {
      const s = createSingleton<number>({
        name: 'Test',
        validate: isNumber,
      });
      expect(() => s.set('not a number')).to.throw(
        'Test: validation failed',
      );
    });

    it('does not transition to initialised on validation failure', () => {
      const s = createSingleton<number>({
        name: 'Test',
        validate: isNumber,
      });
      try { s.set('bad'); } catch { /* ignore */ }
      expect(() => s.get()).to.throw('Test: not initialised');
      // Subsequent valid set should succeed.
      s.set(42);
      expect(s.get()).to.equal(42);
    });

    it('skips validation when not provided', () => {
      const s = createSingleton<number>({ name: 'Test' });
      // No validator → any value accepted.
      s.set('not a number');
      expect(s.get() as unknown).to.equal('not a number');
    });
  });
});
