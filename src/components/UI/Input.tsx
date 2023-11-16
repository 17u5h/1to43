import React, {Dispatch, forwardRef, SetStateAction} from 'react';
import * as S from "./UIStyles";

type Props = {
	placeholder?: string
	search: string
	setSearch: Dispatch<SetStateAction<string>>
}

const Input = forwardRef<HTMLInputElement, Props> ((props: Props, ref) => {
	const {placeholder, search, setSearch} = props
	return (
		<S.Input ref={ref} placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)}/>
	);
});

export default Input;