import React from 'react';
import * as S from "./headerStyles";
import DropdownTriangle from "./DropdownTriangle";


const HeaderSimpleCarsButton = () => {
	return (
		<S.HeaderSimpleCarsButton>
			<p>Легковые</p>
			<DropdownTriangle/>
		</S.HeaderSimpleCarsButton>
	);
};

export default HeaderSimpleCarsButton;