import React, {Dispatch, SetStateAction} from 'react';
import * as S from "./headerStyles";
import HeaderButton from "./HeaderButton";
import {Car} from "../../types/Types";

type Props = {
	onClick: (name: string) => void
}

const Header = ({onClick}: Props) => {



	return (
		<S.HeaderContainer>
			<HeaderButton name='simpleCars' onClick={() => onClick('simpleCars')}>Легковые</HeaderButton>
			<HeaderButton name='trucks' onClick={() => onClick('trucks')}>Грузовые</HeaderButton>
			<HeaderButton name='buses' onClick={() => console.log('3')}>Автобусы</HeaderButton>
			<HeaderButton name='sport' onClick={() => console.log('4')}>Спортивные</HeaderButton>
			<HeaderButton name='police' onClick={() => console.log('4')}>Полицейские</HeaderButton>
			<HeaderButton name='fire' onClick={() => console.log('4')}>Пожарные</HeaderButton>
			<HeaderButton name='tractors' onClick={() => console.log('6')}>Трактора</HeaderButton>
			<HeaderButton name='tanks' onClick={() => console.log('5')}>Танки</HeaderButton>
			<HeaderButton name='planes' onClick={() => console.log('6')}>Самолёты</HeaderButton>
		</S.HeaderContainer>
	);
};

export default Header;