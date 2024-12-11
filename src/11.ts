export type Excuse<T extends Record<string, any>> = new (arg: T) => MergeObject<T>;

// a little helper
type MergeObject<T extends Record<string, any>> = keyof T extends string
	? `${keyof T}: ${T[keyof T]}`
	: never;
