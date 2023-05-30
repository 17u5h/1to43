import React, {useRef, useState} from 'react';
import './App.css';
import {GlobalStyle} from './globalStyle'
import * as S from "./styles";
import Header from "./components/Header";
import createResultModels from "./lib/createResultModels";
import BlockOfCards from "./components/Cards";
import focusGroup from "./lib/focusGroup";
import {
	BUS,
	FIRE,
	FOREIGN,
	GAZ,
	LUXURY,
	MOSKVITCH,
	OTHER, PLANE,
	POLICE,
	SPORT, TANK, TRACTOR,
	TRUCK,
	VAZ
} from "./data/titlesGroupsOfModels";

function App() {
	const resultModels = createResultModels()

	const vazRef = useRef<HTMLDivElement>(null)
	const moskvitchRef = useRef<HTMLDivElement>(null)
	const gazSimplyCarsRef = useRef<HTMLDivElement>(null)
	const otherSimplyCarsRef = useRef<HTMLDivElement>(null)
	const luxurySimplyCarsRef = useRef<HTMLDivElement>(null)
	const foreignSimplyCarsRef = useRef<HTMLDivElement>(null)
	const nativeTrucksRef = useRef<HTMLDivElement>(null)
	const foreignTrucksRef = useRef<HTMLDivElement>(null)
	const busesRef = useRef<HTMLDivElement>(null)
	const sportsCarsRef = useRef<HTMLDivElement>(null)
	const policeCarsRef = useRef<HTMLDivElement>(null)
	const firesRef = useRef<HTMLDivElement>(null)
	const tractorsRef = useRef<HTMLDivElement>(null)
	const tanksRef = useRef<HTMLDivElement>(null)
	const planesRef = useRef<HTMLDivElement>(null)

	const [isDropdownVisible, setIsDropdownVisible] = useState(false)

	const focusGroupSwitcher = (name: string) => {
		switch (name) {
			case 'vaz':
				focusGroup(vazRef)
				setIsDropdownVisible(false)
				break
			case 'moskvitch':
				focusGroup(moskvitchRef)
				setIsDropdownVisible(false)
				break
			case 'gazSimplyCars':
				focusGroup(gazSimplyCarsRef)
				setIsDropdownVisible(false)
				break
			case 'otherSimplyCars':
				focusGroup(otherSimplyCarsRef)
				setIsDropdownVisible(false)
				break
			case 'luxurySimplyCars':
				focusGroup(luxurySimplyCarsRef)
				setIsDropdownVisible(false)
				break
			case 'foreignSimplyCars':
				focusGroup(foreignSimplyCarsRef)
				setIsDropdownVisible(false)
				break
			case 'trucks':
				focusGroup(nativeTrucksRef)
				break
			case 'buses':
				focusGroup(busesRef)
				break
			case 'sportsCars':
				focusGroup(sportsCarsRef)
				break
			case 'policeCars':
				focusGroup(policeCarsRef)
				break
			case 'fires':
				focusGroup(firesRef)
				break
			case 'tractors':
				focusGroup(tractorsRef)
				break
			case 'tanks':
				focusGroup(tanksRef)
				break
			case 'planes':
				focusGroup(planesRef)
				break
			default:
				focusGroup(vazRef)
		}
	}

	return (
		<S.Wrapper>
			<S.Container>
				<GlobalStyle/>
				<Header onClick={focusGroupSwitcher} isDropdownVisible={isDropdownVisible} setIsDropdownVisible={setIsDropdownVisible}/>
				<S.Main>
					<S.BlockTitle>{VAZ}</S.BlockTitle>
					<S.BlockOfCards ref={vazRef}><BlockOfCards arrayOfCars={resultModels.vaz}/></S.BlockOfCards>
					<S.BlockTitle>{MOSKVITCH}</S.BlockTitle>
					<S.BlockOfCards ref={moskvitchRef}><BlockOfCards arrayOfCars={resultModels.moskvitch}/></S.BlockOfCards>
					<S.BlockTitle>{GAZ}</S.BlockTitle>
					<S.BlockOfCards ref={gazSimplyCarsRef}><BlockOfCards arrayOfCars={resultModels.gazSimplyCars}/></S.BlockOfCards>
					<S.BlockTitle>{OTHER}</S.BlockTitle>
					<S.BlockOfCards ref={otherSimplyCarsRef}><BlockOfCards arrayOfCars={resultModels.otherSimplyCars}/></S.BlockOfCards>
					<S.BlockTitle>{LUXURY}</S.BlockTitle>
					<S.BlockOfCards ref={luxurySimplyCarsRef}><BlockOfCards arrayOfCars={resultModels.luxurySimplyCars}/></S.BlockOfCards>
					<S.BlockTitle>{FOREIGN}</S.BlockTitle>
					<S.BlockOfCards ref={foreignSimplyCarsRef}><BlockOfCards arrayOfCars={resultModels.foreignSimplyCars}/></S.BlockOfCards>
					<S.BlockTitle>{TRUCK}</S.BlockTitle>
					<S.BlockOfCards ref={nativeTrucksRef}><BlockOfCards arrayOfCars={resultModels.nativeTrucks}/></S.BlockOfCards>
					<S.BlockOfCards ref={foreignTrucksRef}><BlockOfCards arrayOfCars={resultModels.foreignTrucks}/></S.BlockOfCards>
					<S.BlockTitle>{BUS}</S.BlockTitle>
					<S.BlockOfCards ref={busesRef}><BlockOfCards arrayOfCars={resultModels.buses}/></S.BlockOfCards>
					<S.BlockTitle>{SPORT}</S.BlockTitle>
					<S.BlockOfCards ref={sportsCarsRef}><BlockOfCards arrayOfCars={resultModels.sportsCars}/></S.BlockOfCards>
					<S.BlockTitle>{POLICE}</S.BlockTitle>
					<S.BlockOfCards ref={policeCarsRef}><BlockOfCards arrayOfCars={resultModels.policeCars}/></S.BlockOfCards>
					<S.BlockTitle>{FIRE}</S.BlockTitle>
					<S.BlockOfCards ref={firesRef}><BlockOfCards arrayOfCars={resultModels.fires}/></S.BlockOfCards>
					<S.BlockTitle>{TRACTOR}</S.BlockTitle>
					<S.BlockOfCards ref={tractorsRef}><BlockOfCards arrayOfCars={resultModels.tractors}/></S.BlockOfCards>
					<S.BlockTitle>{TANK}</S.BlockTitle>
					<S.BlockOfCards ref={tanksRef}><BlockOfCards arrayOfCars={resultModels.tanks}/></S.BlockOfCards>
					<S.BlockTitle>{PLANE}</S.BlockTitle>
					<S.BlockOfCards ref={planesRef}><BlockOfCards arrayOfCars={resultModels.planes}/></S.BlockOfCards>
				</S.Main>
			</S.Container>
		</S.Wrapper>
	);
}

export default App;
