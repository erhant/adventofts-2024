// we can use `AnalyzeScope` directly here!
import type{ AnalyzeScope } from "./20";

/**
 * filters out elements of `A` that are equal to `B`, note that `B` can be a union!
 * 
 * @example
 * type t0 = Filter<["a", "b", "c", "d"], "a" | "d">; 
 * //   ^? ["b", "c"]
 */
type Filter<A extends string[], B extends string> = A extends [
	infer First,
	...infer Rest extends string[],
]
	? [...Filter<Rest, B>, ...(First extends B ? [] : [First])]
	: [];

export type Lint<
	S extends string,
	Scope extends { declared: string[]; used: string[] } = AnalyzeScope<S>,
> = {
  // scope is returned as-is
	scope: Scope;
  // declared but unused variables, `used` array turned into a union
  // and passed to `Filter` to get the unused variables
	unused: Filter<Scope["declared"], Scope["used"][number]>;
};
