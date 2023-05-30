import React from 'react';
import * as S from "./headerStyles";
import {DropdownButton} from "./headerStyles";


type Props = {
	onClick: (name: string) => void
}

const DropdownSimpleCars = ({onClick}: Props) => {

	return (
		<S.DropdownSimpleCars>
			<DropdownButton onClick={() => onClick('vaz')} name='vaz'>ВАЗ</DropdownButton>
			<DropdownButton onClick={() => onClick('moskvitch')} name='moskvitch'>Москвич</DropdownButton>
			<DropdownButton onClick={() => onClick('gazSimplyCars')} name='gazSimplyCars'>ГАЗ</DropdownButton>
			<DropdownButton onClick={() => onClick('otherSimplyCars')} name='otherSimplyCars'>Другие</DropdownButton>
			<DropdownButton onClick={() => onClick('luxurySimplyCars')} name='luxurySimplyCars'>Представительские</DropdownButton>
			<DropdownButton onClick={() => onClick('foreignSimplyCars')} name='foreignSimplyCars'>Иностранные</DropdownButton>
		</S.DropdownSimpleCars>
	);
};

export default DropdownSimpleCars;