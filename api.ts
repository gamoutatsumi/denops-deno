/**
 * Context object which is exposed in l: namespace
 */
export interface Context {
  [key: string]: unknown;
}

/**
 * API of denops core
 */
export interface Api {
  /**
   * Call {func} with given {args} and return the result
   */
  call(func: string, ...args: unknown[]): Promise<unknown>;

  /**
   * Execute {cmd} under the {context}
   */
  cmd(cmd: string, context: Context): Promise<void>;

  /**
   * Evaluate {expr} under the {context} and return result
   */
  eval(expr: string, context: Context): Promise<unknown>;
}

/**
 * Return if a given value is Context object or not
 */
export function isContext(value: unknown): value is Context {
  const t = typeof value;
  return t === "function" || (t === "object" && value !== null);
}
