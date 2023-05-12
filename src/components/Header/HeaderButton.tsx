import React from 'react';
import * as S from "./headerStyles";

type Props = {
	onClick: () => void
	name: string
	children: string
}

const HeaderButton = ({onClick, name, children}: Props) => {
	return (
		<S.HeaderButton onClick={onClick} name={name}>
			{children}
		</S.HeaderButton>
	);
};

export default HeaderButton;