import React, {Dispatch, forwardRef, SetStateAction} from 'react';
import * as S from "./headerStyles";
import CloseButton from "../UI/CloseButton";
import Input from "../UI/Input";


type Props = {
	setIsSearchVisible: Dispatch<SetStateAction<boolean>>
	search: string
	setSearch: Dispatch<SetStateAction<string>>
}

const SearchPanel = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
	const {setIsSearchVisible, search, setSearch} = props
	return (
		<S.SearchPanel>
			<Input ref={ref} placeholder='поиск...' search={search} setSearch={setSearch}/>
			<CloseButton setIsSearchVisible={setIsSearchVisible} setSearch={setSearch}/>
		</S.SearchPanel>
	);
});

export default SearchPanel;