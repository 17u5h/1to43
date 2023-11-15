import React, {Dispatch, SetStateAction} from 'react';
import * as S from "./UIStyles";

type Props = {
	placeholder?: string
	search: string
	setSearch: Dispatch<SetStateAction<string>>
}

const Input = ({placeholder, search, setSearch}: Props) => {
	return (
		<S.Input placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)}/>
	);
};

export default Input;