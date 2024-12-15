// A small utility that gets rid of `-`s in both ends.
type TrimUnits<T extends string> = T extends `-${infer A}`
	? TrimUnits<A>
	: T extends `${infer B}-`
		? TrimUnits<B>
		: T;

// Given a string like `---foo`, it returns `["foo", 3]`,
// so it basically counts the number of `-`s in the
// beginning and returns the rest of the string.
type ParseUnits<T extends string, Acc extends 1[] = []> = T extends `-${infer Rest}`
	? ParseUnits<Rest, [...Acc, 1]>
	: [T, Acc["length"]];

type ParseRoute<
	T extends string,
	Units extends [string, number] = ParseUnits<T>,
> = Units[0] extends `${infer Segment}-${infer Rest}`
	? [[Segment, Units[1]], ...ParseRoute<`-${Rest}`>]
	: [Units];

// Here we just call ParseRoute but handle 3 edge cases:
// 1. If the input is an empty string, return an empty array.
// 2. If the input has `-`s in the beginning, remove them.
// 3. If the input has `-`s in the end, remove them.
export type GetRoute<T extends string> = T extends "" ? [] : ParseRoute<TrimUnits<T>>;
