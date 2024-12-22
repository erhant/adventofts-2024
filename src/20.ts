type WHITESPACE = " " | "\n" | "\t";
type DECLARATION = "let" | "const" | "var";

export type AnalyzeScope<S extends string> =
	// whitespacing
	S extends `${WHITESPACE}${infer Rest}`
		? AnalyzeScope<Rest>
		: // variable declaration
			S extends `${DECLARATION} ${infer Id} = "${string}";${infer Rest}`
			? { declared: [Id, ...AnalyzeScope<Rest>["declared"]]; used: AnalyzeScope<Rest>["used"] }
			: // function call
				S extends `${string}(${infer Arg});${infer Rest}`
				? { declared: AnalyzeScope<Rest>["declared"]; used: [Arg, ...AnalyzeScope<Rest>["used"]] }
				: // none
					{ declared: []; used: [] };
