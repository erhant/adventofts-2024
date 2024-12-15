import type { Expect, Equal } from "type-testing";
import type { Names } from "./data/12";
import type { FormatNames } from "~/12";

// FIXME: commented due to performance issues
// type t0_actual = FormatNames<Names>["length"]; // =>
// type t0_expected = 31682; // =>
// type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = FormatNames<Names>[0]; // =>
type t1_expected = {
  // =>
  name: "Liam";
  count: 20802;
  rating: "naughty"; // even number of characters in the name get 'naughty'
};
type t1 = Expect<Equal<t1_actual, t1_expected>>;

// FIXME: commented due to performance issues
// type t2_actual = FormatNames<Names>[11194]; // =>
// type t2_expected = {
//   // =>
//   name: "Yanni";
//   count: 19;
//   rating: "nice"; // odd number of characters in the name get 'nice'
// };
// type t2 = Expect<Equal<t2_actual, t2_expected>>;

// type t3_actual = FormatNames<Names>[2761]; // =>
// type t3_expected = {
//   // =>
//   name: "Petra";
//   count: 148;
//   rating: "nice";
// };
// type t3 = Expect<Equal<t3_actual, t3_expected>>;

// type t4_actual = FormatNames<Names>[31680]; // =>
// type t4_expected = {
//   // =>
//   name: "Aala";
//   count: 5;
//   rating: "naughty";
// };
// type t4 = Expect<Equal<t4_actual, t4_expected>>;

// type t5_actual = FormatNames<Names>[31681]; // =>
// type t5_expected = {
//   // =>
//   name: "Aagya";
//   count: 5;
//   rating: "nice";
// };
// type t5 = Expect<Equal<t5_actual, t5_expected>>;
