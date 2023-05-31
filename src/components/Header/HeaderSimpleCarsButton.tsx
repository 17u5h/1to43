import React from 'react';
import * as S from "./headerStyles";
import DropdownTriangle from "./DropdownTriangle";

type Props = {
	isDropdownVisible: boolean
}

const HeaderSimpleCarsButton = ( {isDropdownVisible}: Props) => {
	return (
		<S.HeaderSimpleCarsButton>
			<p>Легковые</p>
			<DropdownTriangle isDropdownVisible={isDropdownVisible}/>
		</S.HeaderSimpleCarsButton>
	);
};

export default HeaderSimpleCarsButton;