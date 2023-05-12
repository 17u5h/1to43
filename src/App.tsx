import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {GlobalStyle} from './globalStyle'
import * as S from "./styles";
import Header from "./components/Header";
import {toys} from "./data/toys";
import compareFunction from "./lib/compareFunction";
import {Car, ResultModels} from "./types/Types";
import createResultModels from "./lib/createResultModels";
import BlockOfCards from "./components/Cards";

function App() {
	const resultModels = createResultModels()
	const [currentFocusedRef, setCurrentFocusedRef] = useState(null)
	const simpleCarsRef = useRef<HTMLDivElement>(null)
	const trucksRef = useRef<HTMLDivElement>(null)


	const switchFocusedGroup = (name: string) => {
		switch (name) {
			case 'simpleCars':
				simpleCarsRef.current?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
				break
			case 'trucks':
				trucksRef.current?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
				break
		}
	}

	return (
		<S.Wrapper>
			<S.Container>
				<GlobalStyle/>
				<Header onClick={switchFocusedGroup}/>
				<S.Main>
					<S.BlockOfCards ref={simpleCarsRef}><BlockOfCards arrayOfCars={resultModels.vaz}/></S.BlockOfCards>
					<S.BlockOfCards ref={trucksRef}><BlockOfCards arrayOfCars={resultModels.nativeTrucks}/></S.BlockOfCards>
				</S.Main>
			</S.Container>
		</S.Wrapper>
	);
}

export default App;
