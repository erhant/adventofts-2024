// this is what the hint was about:
// https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations
export type Demand<in out T> = { demand: T };
