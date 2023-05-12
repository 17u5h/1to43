
export type Car = {
	id?: number
	name?: string
	imgFileName?: string
	category?: string
	subcategory?: string
	year: number
	brand?: string
}

export type ResultModels = {
	resultModels: Car[][]
}