const compose =
	<Fin, Gin, Hin, Out>(
    f: (x: Fin) => Gin,
    g: (x: Gin) => Hin,
    h: (x: Hin) => Out
  ) => (a: Fin): Out => h(g(f(a)));

// its important to do this here, instead of repeating the expression in `firstChar`
// types; while that works & passes the test it may fail with:
//
// > error TS2719: Type 'T extends `${infer F}${string}` ? F : never' is not assignable to
//   type 'T extends `${infer F}${string}` ? F : never'. 
//   Two different types with this name exist, but they are unrelated.
type FirstChar<T> = T extends `${infer F}${string}` ? F : never;

const upperCase = <T extends string>(x: T) => x.toUpperCase() as Uppercase<T>;
const lowerCase = <T extends string>(x: T) => x.toLowerCase() as Lowercase<T>;
const firstChar = <T extends string>(x: T): FirstChar<T> => x[0] as FirstChar<T>;
const firstItem = <T extends any[]>(x: T): T[0] => x[0];
const makeTuple = <T>(x: T): [T] => [x];
const makeBox = <T>(value: T) => ({ value });

export { compose, upperCase, lowerCase, firstChar, firstItem, makeTuple, makeBox };
