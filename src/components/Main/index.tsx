import React from 'react';
import {toys} from "../../data/toys";
import Card from "./Card";
import * as S from "./mainStyles";

const Main = () => {
	const unstructuredSimpleCars = toys.filter(el => el.category.includes('B'))
	const nativeSimpleCars = unstructuredSimpleCars.filter(el => el.category.includes('native'))
	const vaz = nativeSimpleCars.filter(el => el.subcategory.includes('Lada'))
	const moskvitch = nativeSimpleCars.filter(el => el.subcategory.includes('Moskvitch'))
	const gazSimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('GAZ'))
	const otherSimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('other'))
	const luxurySimplyCars = nativeSimpleCars.filter(el => el.subcategory.includes('luxury'))

	const simpleCars = toys.filter(el => el.category.includes('B'))
	const trucks = toys.filter(el => el.category.includes('C'))
	const buses = toys.filter(el => el.category.includes('bus'))
	const sports = toys.filter(el => el.category.includes('sport'))
	const tanks = toys.filter(el => el.category.includes('tank'))
	const planes = toys.filter(el => el.category.includes('plane'))
	const fires = toys.filter(el => el.category.includes('fire'))
	const tractors = toys.filter(el => el.category.includes('tractor'))
	const police = toys.filter(el => el.category.includes('police'))

	const resultModels = [...vaz, ...moskvitch, ...gazSimplyCars, ...otherSimplyCars, ...luxurySimplyCars]

	return (
		<S.CardContainer>
			{resultModels.map(el => (

				el.imgFileName ? <Card key={el.id} name={el.name} imgFileName={el.imgFileName}/> :
					<div>no picture</div>
			))}
		</S.CardContainer>
	);
};

export default Main;