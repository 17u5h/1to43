import React, {useEffect, useState} from 'react';
import './App.css';
import {GlobalStyle} from './globalStyle'
import * as S from "./styles";
import Header from "./components/Header";
import Main from "./components/Main";
import {toys} from "./data/toys";
import compareFunction from "./lib/compareFunction";
import {Car, ResultModels} from "./types/Types";
import createResultModels from "./lib/createResultModels";

function App() {
	const [resultModels, setResultModels] = useState<Car[][]>([toys])

	useEffect(() => {
		setResultModels(createResultModels())
	}, [])

	return (
		<S.Wrapper>
			<S.Container>
				<GlobalStyle/>
				<Header setResultModels={setResultModels}/>
				<Main resultModels={resultModels}/>
			</S.Container>
		</S.Wrapper>
	);
}

export default App;
