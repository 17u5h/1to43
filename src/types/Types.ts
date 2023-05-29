
export type Car = {
	id?: number
	name?: string
	imgFileName?: string
	category?: string
	subcategory?: string
	year: number
	brand?: string
	description?: string
}

export type ResultModels = {
	vaz?: Car[]
	moskvitch?: Car[]
	gazSimplyCars?: Car[]
	otherSimplyCars?: Car[]
	luxurySimplyCars?: Car[]
	foreignSimplyCars?: Car[]
	nativeTrucks?: Car[]
	foreignTrucks?: Car[]
	buses?: Car[]
	sportsCars?: Car[]
	policeCars?: Car[]
	fires?: Car[]
	tractors?: Car[]
	tanks?: Car[]
	planes?: Car[]
}

