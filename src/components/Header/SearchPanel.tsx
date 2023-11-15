import React, {Dispatch, SetStateAction} from 'react';
import * as S from "./headerStyles";
import CloseButton from "../UI/CloseButton";
import Input from "../UI/Input";


type Props = {
	setIsSearchVisible: Dispatch<SetStateAction<boolean>>
	search: string
	setSearch: Dispatch<SetStateAction<string>>
}

const SearchPanel = ({setIsSearchVisible, search, setSearch}: Props) => {
	return (
		<S.SearchPanel>
			<Input placeholder='поиск...' search={search} setSearch={setSearch}/>
			<CloseButton setIsSearchVisible={setIsSearchVisible} setSearch={setSearch}/>
		</S.SearchPanel>
	);
};

export default SearchPanel;