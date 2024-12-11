export enum Gift {
	// uniques
	Coal,
	Train,
	Bicycle,
	SuccessorToTheNintendoSwitch = 4,
	TikTokPremium = Gift.SuccessorToTheNintendoSwitch << 1,
	Vape = Gift.TikTokPremium << 1,
	// combinations
	Traditional = Gift.Train ^ Gift.Bicycle,
	OnTheMove = Gift.Coal | Gift.Bicycle | Gift.Vape | Gift.TikTokPremium,
	OnTheCouch = (OnTheMove ^ Bicycle) | SuccessorToTheNintendoSwitch,
}
