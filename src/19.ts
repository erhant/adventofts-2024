export type Parse<S extends string> =
	// whitespacing
	S extends `${" " | "\n" | "\t"}${infer Rest}`
		? Parse<Rest>
		: // variable declaration
			S extends `${"let" | "const" | "var"} ${infer Id} = "${string}";${infer Rest}`
			? [{ id: Id; type: "VariableDeclaration" }, ...Parse<Rest>]
			: // function call
				S extends `${string}(${infer Arg});${infer Rest}`
				? [{ argument: Arg; type: "CallExpression" }, ...Parse<Rest>]
				: // none
					[];
