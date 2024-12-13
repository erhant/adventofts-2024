// instead of recursion, we use a trick with mapped type for an array
// that avoids exceeding the recursion limit
//
// also the 2nd parameter is `any` because we dont make use of it,
// and we dont need to constrain it to a specific type, maybe performance gain?
export type FormatNames<T extends [string, any, string][]> = {
	[K in keyof T]: FormatName<T[K]>;
};

type FormatName<T extends [string, any, string]> = {
	name: T[0];
	count: ParseInt<T[2]>;
	rating: NaughtyOrNice<T[0]>;
};

// a character is `naughty` or `nice` based on the length of their name
// i.e. even number of characters in the name get 'naughty',
// and odd number of characters in the name get 'nice'
type NaughtyOrNice<
	Name extends string,
	Ans extends "naughty" | "nice" = "naughty",
> = Name extends `${string}${infer Rest}`
	? NaughtyOrNice<Rest, Ans extends "naughty" ? "nice" : "naughty">
	: Ans;


 
// helper to cast a string to int
type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
