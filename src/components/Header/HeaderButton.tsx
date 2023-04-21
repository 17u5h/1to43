import React from 'react';
import * as S from "./headerStyles";

type Props = {
	onClick: () => void
	children: string
}

const HeaderButton = ({onClick, children}: Props) => {
	return (
		<S.HeaderButton onClick={onClick}>
			{children}
		</S.HeaderButton>
	);
};

export default HeaderButton;