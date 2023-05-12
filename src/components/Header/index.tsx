import React, {Dispatch, SetStateAction, useState} from 'react';
import * as S from "./headerStyles";
import HeaderButton from "./HeaderButton";
import HeaderSimpleCarsButton from "./HeaderSimpleCarsButton";
import DropdownSimpleCars from "./DropdownSimpleCars";

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
			{isDropdownVisible && <DropdownSimpleCars onClick={onClick}/>}
			<HeaderButton name='trucks' onClick={() => onClick('trucks')}>Грузовые</HeaderButton>
			<HeaderButton name='buses' onClick={() => onClick('buses')}>Автобусы</HeaderButton>
			<HeaderButton name='sportsCars' onClick={() => onClick('sportsCars')}>Спортивные</HeaderButton>
			<HeaderButton name='policeCars' onClick={() => onClick('policeCars')}>Полицейские</HeaderButton>
			<HeaderButton name='fires' onClick={() => onClick('fires')}>Пожарные</HeaderButton>
			<HeaderButton name='tractors' onClick={() => onClick('tractors')}>Трактора</HeaderButton>
			<HeaderButton name='tanks' onClick={() => onClick('tanks')}>Танки</HeaderButton>
			<HeaderButton name='planes' onClick={() => onClick('planes')}>Самолёты</HeaderButton>
		</S.HeaderContainer>
	);
};

export default Header;