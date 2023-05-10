import React from 'react';
import * as S from "./mainStyles";
import {Car} from "../../types/Card";


const Card = ({name, imgFileName}: Car) => {
	return (
		<S.Card>
			<img src={imgFileName} alt='pic' style={{objectFit: 'contain', width: '100%'}}/>
			<S.CardTitle>{name}</S.CardTitle>
		</S.Card>
	);
};

export default Card;