import React from 'react';
import * as S from "./headerStyles";
import HeaderButton from "./HeaderButton";


const Header = () => {
	return (
		<S.HeaderContainer>
			<HeaderButton onClick={() => console.log('1')}>Легковые</HeaderButton>
			<HeaderButton onClick={() => console.log('2')}>Грузовые</HeaderButton>
			<HeaderButton onClick={() => console.log('3')}>Автобусы</HeaderButton>
			<HeaderButton onClick={() => console.log('4')}>Спортивные</HeaderButton>
			<HeaderButton onClick={() => console.log('5')}>Танки</HeaderButton>
			<HeaderButton onClick={() => console.log('6')}>Самолёты</HeaderButton>
		</S.HeaderContainer>
	);
};

export default Header;