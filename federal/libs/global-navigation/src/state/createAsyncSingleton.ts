/**
 * Generic singleton helper for asynchronous, producer-consumer state.
 *
 * Use this when the producer sets a plain value but the consumer must
 * await a promise that may not have resolved yet (e.g., user profile
 * data that arrives after a network round-trip).
 *
 * Supports an optional timeout that resolves the promise with a
 * fallback value when `set` has not been called in time. This matches
 * the previous bespoke `UserProfile` plumbing.
 *
 * For synchronous, value-based singletons, use `createSingleton`
 * instead.
 */

export type AsyncSingletonOptions<T> = {
  /** Human-readable name used in error messages. */
  name: string;
  /**
   * Optional timeout. When the timer fires before any `set()` call,
   * the promise resolves with `fallback()`.
   */
  timeout?: { ms: number; fallback: () => T };
  /**
   * Behaviour on second `set()` call. Defaults to 'ignore' so that
   * late callbacks do not clobber a value that has already won.
   */
  onReinit?: 'ignore' | 'replace' | 'warn' | 'throw';
};

export type AsyncSingleton<T> = {
  /** Resolves the underlying promise. Subsequent calls obey `onReinit`. */
  set: (value: T) => void;
  /**
   * Returns the promise. The same instance is returned across calls
   * until `reset` is invoked. Resolves once `set` is called or, when
   * configured, after the timeout fires.
   */
  get: () => Promise<T>;
  /** Returns the resolved value if available, else undefined. */
  peek: () => T | undefined;
  /**
   * Test-only: clears state and builds a fresh pending promise.
   * Pending awaits on the previous promise are abandoned and will
   * never settle, so only call this between tests when no consumer
   * still holds a reference.
   */
  reset: () => void;
};

export const createAsyncSingleton = <T>(
  opts: AsyncSingletonOptions<T>,
): AsyncSingleton<T> => {
  let resolved: T | undefined;
  let resolveFn: ((value: T) => void) | undefined;
  let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

  const buildPromise = (): Promise<T> => new Promise<T>((resolve) => {
    resolveFn = resolve;
    const timeoutOpts = opts.timeout;
    if (timeoutOpts !== undefined) {
      timeoutHandle = setTimeout(() => {
        const fallback = timeoutOpts.fallback();
        resolved = fallback;
        resolve(fallback);
      }, timeoutOpts.ms);
    }
  });

  let promise = buildPromise();

  const clearTimer = (): void => {
    if (timeoutHandle !== undefined) {
      clearTimeout(timeoutHandle);
      timeoutHandle = undefined;
    }
  };

  return {
    set(value: T): void {
      if (resolved !== undefined) {
        switch (opts.onReinit ?? 'ignore') {
          case 'ignore':
            return;
          case 'throw':
            throw new Error(`${opts.name}: already initialised`);
          case 'warn':
            console.warn(
              `${opts.name}: already initialised, ignoring`,
            );
            return;
          case 'replace':
            break;
        }
      }
      clearTimer();
      resolved = value;
      resolveFn?.(value);
    },
    get(): Promise<T> {
      return promise;
    },
    peek(): T | undefined {
      return resolved;
    },
    reset(): void {
      clearTimer();
      resolved = undefined;
      promise = buildPromise();
    },
  };
};
