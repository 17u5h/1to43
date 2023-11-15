import React, {Dispatch, SetStateAction} from 'react';
import * as S from "./UIStyles";
import CloseIcon from "../Icons/CloseIcon";

type Props = {
	setIsSearchVisible: Dispatch<SetStateAction<boolean>>
	setSearch: Dispatch<SetStateAction<string>>
}

const CloseButton = ({setIsSearchVisible, setSearch}: Props) => {
	const closeHandler = () => {
		setIsSearchVisible(false)
		setSearch('')
	}

	return (
		<S.CloseButton onClick={closeHandler}>
			<CloseIcon/>
		</S.CloseButton>
	);
};

export default CloseButton;