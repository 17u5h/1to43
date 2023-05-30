import React, {Dispatch, SetStateAction} from 'react';
import * as S from "./headerStyles";
import HeaderButton from "./HeaderButton";
import HeaderSimpleCarsButton from "./HeaderSimpleCarsButton";
import DropdownSimpleCars from "./DropdownSimpleCars";
import {BUS, FIRE, PLANE, POLICE, SPORT, TANK, TRACTOR, TRUCK} from "../../data/titlesGroupsOfModels";

type Props = {
	onClick: (name: string) => void
	isDropdownVisible: boolean
	setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
}

const Header = ({onClick, isDropdownVisible, setIsDropdownVisible}: Props) => {

	const toggleDropdownVisibility = () => {
		setIsDropdownVisible(prevState => !prevState)
	}

	return (
		<S.HeaderContainer>
			<HeaderButton name='simpleCars' onClick={toggleDropdownVisibility}><HeaderSimpleCarsButton/></HeaderButton>
			{isDropdownVisible && <>
				<DropdownSimpleCars onClick={onClick}/>
				<S.Cover onClick={toggleDropdownVisibility}/>
			</>}
			<HeaderButton name='trucks' onClick={() => onClick('trucks')}>{TRUCK}</HeaderButton>
			<HeaderButton name='buses' onClick={() => onClick('buses')}>{BUS}</HeaderButton>
			<HeaderButton name='sportsCars' onClick={() => onClick('sportsCars')}>{SPORT}</HeaderButton>
			<HeaderButton name='policeCars' onClick={() => onClick('policeCars')}>{POLICE}</HeaderButton>
			<HeaderButton name='fires' onClick={() => onClick('fires')}>{FIRE}</HeaderButton>
			<HeaderButton name='tractors' onClick={() => onClick('tractors')}>{TRACTOR}</HeaderButton>
			<HeaderButton name='tanks' onClick={() => onClick('tanks')}>{TANK}</HeaderButton>
			<HeaderButton name='planes' onClick={() => onClick('planes')}>{PLANE}</HeaderButton>
		</S.HeaderContainer>
	);
};

export default Header;