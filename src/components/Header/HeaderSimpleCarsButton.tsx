import React from 'react';
import * as S from "./headerStyles";
import DropdownTriangle from "./DropdownTriangle";
import SimpleCarIcon from "../Icons/SimpleCarIcon";

type Props = {
	isDropdownVisible: boolean
	isMobileDesign: boolean
}

const HeaderSimpleCarsButton = ( {isDropdownVisible, isMobileDesign}: Props) => {
	return (
		<S.HeaderSimpleCarsButton>
			{isMobileDesign ? <SimpleCarIcon/> : <p>Легковые</p>}
			<DropdownTriangle isDropdownVisible={isDropdownVisible}/>
		</S.HeaderSimpleCarsButton>
	);
};

export default HeaderSimpleCarsButton;