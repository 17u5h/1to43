import React from 'react';
import * as S from "./headerStyles";
import {DropdownButton} from "./headerStyles";
import {FOREIGN, GAZ, LUXURY, MOSKVITCH, OTHER, VAZ} from "../../data/titlesGroupsOfModels";


type Props = {
	onClick: (name: string) => void
}

const DropdownSimpleCars = ({onClick}: Props) => {

	return (
		<S.DropdownSimpleCars>
			<DropdownButton onClick={() => onClick('vaz')} name='vaz'>{VAZ}</DropdownButton>
			<DropdownButton onClick={() => onClick('moskvitch')} name='moskvitch'>{MOSKVITCH}</DropdownButton>
			<DropdownButton onClick={() => onClick('gazSimplyCars')} name='gazSimplyCars'>{GAZ}</DropdownButton>
			<DropdownButton onClick={() => onClick('otherSimplyCars')} name='otherSimplyCars'>{OTHER}</DropdownButton>
			<DropdownButton onClick={() => onClick('luxurySimplyCars')} name='luxurySimplyCars'>{LUXURY}</DropdownButton>
			<DropdownButton onClick={() => onClick('foreignSimplyCars')} name='foreignSimplyCars'>{FOREIGN}</DropdownButton>
		</S.DropdownSimpleCars>
	);
};

export default DropdownSimpleCars;