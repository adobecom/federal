/**
 * Generic singleton helper for synchronous, value-based state.
 *
 * Replaces five hand-rolled closure singletons that all implemented the
 * same init-once + throw-on-uninitialised-get pattern with subtle
 * variations. Behaviour is configurable via {@link SingletonOptions}.
 *
 * For asynchronous, producer-consumer state (where consumers may need
 * to await before the value is set), use `createAsyncSingleton` instead.
 */

export type SingletonOptions<T> = {
  /** Optional runtime validator. If provided, must return true. */
  validate?: (value: unknown) => value is T;
  /** Behaviour on second `set()` call. Defaults to 'warn'. */
  onReinit?: 'warn' | 'replace' | 'throw' | 'ignore';
  /** Human-readable name used in error messages. */
  name: string;
};

export type Singleton<T> = {
  /**
   * Initialises the singleton. Subsequent calls are governed by
   * `onReinit`. When a `validate` option is supplied, throws on
   * failed validation.
   */
  set: (value: unknown) => void;
  /** Returns the value. Throws if `set` has not been called. */
  get: () => T;
  /** Non-throwing access. Returns `undefined` until `set` is called. */
  peek: () => T | undefined;
  /**
   * Test-only: clears state. Convention is that production code never
   * calls `reset`. Gate on `globalThis.__GNAV_TESTING__` if you need a
   * runtime guard.
   */
  reset: () => void;
};

export const createSingleton = <T>(
  opts: SingletonOptions<T>,
): Singleton<T> => {
  let value: T | undefined;
  let initialized = false;

  return {
    set(next: unknown): void {
      if (initialized) {
        switch (opts.onReinit ?? 'warn') {
          case 'ignore':
            return;
          case 'throw':
            throw new Error(`${opts.name}: already initialised`);
          case 'warn':
            console.warn(
              `${opts.name}: already initialised, ignoring re-init`,
            );
            return;
          case 'replace':
            break;
        }
      }
      if (opts.validate !== undefined && !opts.validate(next)) {
        throw new Error(`${opts.name}: validation failed`);
      }
      value = next as T;
      initialized = true;
    },
    get(): T {
      if (!initialized) {
        throw new Error(
          `${opts.name}: not initialised. Call set() first.`,
        );
      }
      return value as T;
    },
    peek(): T | undefined {
      return value;
    },
    reset(): void {
      value = undefined;
      initialized = false;
    },
  };
};
