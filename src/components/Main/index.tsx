import React from 'react';
import {toys} from "../../data/toys";
import * as S from "./mainStyles";
import BlockOfCards from "../Cards";
import compareFunction from "../../lib/compareFunction";
import {Car, ResultModels} from "../../types/Types";


const Main = ({resultModels}: ResultModels) => {


	return (
		<S.BlockOfCards>
			{resultModels.map(arrayOfCars => (<BlockOfCards key={arrayOfCars[0].id} arrayOfCars={arrayOfCars}/>))}
		</S.BlockOfCards>
	);
};

export default Main;