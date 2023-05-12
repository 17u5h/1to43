import {toys} from "../data/toys";
import compareFunction from "./compareFunction";

const createResultModels = () => {
	const unstructuredSimpleCars = toys.filter(el => el.category.includes('B'))
	const nativeSimpleCars = unstructuredSimpleCars.filter(el => el.category.includes('native'))
	const vaz = nativeSimpleCars.filter(el => el.subcategory.includes('Lada')).sort(compareFunction)
	const moskvitch = nativeSimpleCars.filter(el => el.subcategory.includes('Moskvitch')).sort(compareFunction)
	const gazSimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('GAZ')).sort(compareFunction)
	const otherSimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('other')).sort(compareFunction)
	const luxurySimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('luxury')).sort(compareFunction)
	const foreignSimplyCars = unstructuredSimpleCars.filter(el => el.category.includes('foreign')).sort(compareFunction)

	const unstructuredTrucks = toys.filter(el => el.category.includes('C'))
	const nativeTrucks = unstructuredTrucks.filter(el => el.category.includes('native')).sort(compareFunction)
	const foreignTrucks = unstructuredTrucks.filter(el => el.category.includes('foreign')).sort(compareFunction)

	const buses = toys.filter(el => el.category.includes('bus')).sort(compareFunction)

	const sportsCars = toys.filter(el => el.category.includes('sport')).sort(compareFunction)

	const policeCars = toys.filter(el => el.category.includes('police')).sort(compareFunction)

	const fires = toys.filter(el => el.category.includes('fire')).sort(compareFunction)

	const tanks = toys.filter(el => el.category.includes('tank')).sort(compareFunction)

	const planes = toys.filter(el => el.category.includes('plane')).sort(compareFunction)

	const tractors = toys.filter(el => el.category.includes('tractor')).sort(compareFunction)

	return {vaz,
			moskvitch,
			gazSimplyCars,
			otherSimplyCars,
			luxurySimplyCars,
			foreignSimplyCars,
			nativeTrucks,
			foreignTrucks,
			buses,
			sportsCars,
			policeCars,
			fires,
			tractors,
			tanks,
			planes}
}

export default createResultModels