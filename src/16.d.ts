// now this is a bit complicated!
//
// first, we have `Params` and `Ret` as generic types to get the parameters and return type
// of the function that is provided to `DynamicParamsCurrying`.
declare function DynamicParamsCurrying<Params extends any[], Ret extends any>(
	fn: (...args: Params) => Ret,

)
  // for the output, we expect a function to be return, but what shall that function return? 
  // that depends on the parameters of this new function, which will be inferred by TS based on
  // how the user provides it; so we use `CurriedParams` to represent the parameters of the new function
  : <CurriedParams extends any[]>(...args: CurriedParams)
  // now, what shall this function return? that depends on how many `Params` we had at the beginning:
  //
  // - if we are out of parameters, we return the original return type
  //
  // - if we still have parameters, we return a new function that will take the rest of the parameters
  //   with respect to the curried parameters; it is possible that there were no currying at all, but
  //   that is okay & will not change the length of `Params` for the next iteration
  //
  // note that we need the `ReturnType` in the end because we care about the final returned value as well
  => Params["length"] extends 0
	? Ret
	: Params extends [...CurriedParams, ...infer RestParams]
		? ReturnType<typeof DynamicParamsCurrying<RestParams, Ret>>
		: never;
