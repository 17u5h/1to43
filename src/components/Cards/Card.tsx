import React from 'react';
import * as S from "../Main/mainStyles";
import {Car} from "../../types/Types";


const Card = ({name, imgFileName}: Car) => {
	const alt = `фотография модельки машины ${name}`

	return (
		<S.Card>
			<S.ToyImg src={imgFileName} alt={alt}/>
			<S.CardTitle>{name}</S.CardTitle>

		</S.Card>
	);
};

export default Card;