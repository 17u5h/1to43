import React from 'react';
import * as S from "./mainStyles";
import {Card} from "../../types/Card";


const Card = ({name, imgFileName}: Card) => {
	return (
		<S.Card>
			<img src={imgFileName} alt='pic' style={{objectFit: 'contain', width: '100%'}}/>

		</S.Card>
	);
};

export default Card;