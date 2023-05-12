import React from 'react';
import {Car} from "../../types/Types";
import Card from "./Card";
import * as S from "../Main/mainStyles";

type Props = {
	arrayOfCars: Car[]
}

const BlockOfCards = ({arrayOfCars}: Props) => {
	return (
		<S.CardContainer>
			{arrayOfCars.map(el => (
				el.imgFileName ? <Card key={el.id} name={el.name} imgFileName={el.imgFileName} year={el.year}/> :
					<div>no picture</div>
			))}
		</S.CardContainer>
	);
};

export default BlockOfCards;