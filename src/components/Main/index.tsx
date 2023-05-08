import React from 'react';
import {toys} from "../../data/toys";
import Card from "./Card";
import * as S from "./mainStyles";

const Main = () => {

	return (
		<S.CardContainer>
		{toys.map(el => (
			el.imgFileName ? <Card key={el.id} name={el.name} imgFileName={el.imgFileName}/> : <div></div>
		))}
		</S.CardContainer>
	);
};

export default Main;