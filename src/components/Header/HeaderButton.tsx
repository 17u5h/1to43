import React, {FC, MouseEventHandler, ReactElement} from 'react';
import * as S from "./headerStyles";

type Props = {
	onClick: (e: any) => void
	name: string
	children: ReactElement | string
}

const HeaderButton = ({onClick, name, children}: Props) => {
	return (
		<S.HeaderButton onClick={onClick} name={name}>
			{children}
		</S.HeaderButton>
	);
};

export default HeaderButton;