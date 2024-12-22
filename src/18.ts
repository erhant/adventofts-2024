// the trick here is to use `NoInfer`: https://www.totaltypescript.com/noinfer
export const createStreetLight = <C extends string>(colors: C[], defaultColor: NoInfer<C>) => {
	console.log(colors);
	return defaultColor;
};
