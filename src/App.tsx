import React from 'react';
import './App.css';
import {GlobalStyle} from './globalStyle'
import * as S from "./styles";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<S.Wrapper>
			<S.Container>
				<GlobalStyle/>
				<Header/>
				<Main/>
			</S.Container>
		</S.Wrapper>
	);
}

export default App;
