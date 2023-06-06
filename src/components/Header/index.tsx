import React, {Dispatch, SetStateAction, useState} from 'react';
import * as S from "./headerStyles";
import HeaderButton from "./HeaderButton";
import HeaderSimpleCarsButton from "./HeaderSimpleCarsButton";
import DropdownSimpleCars from "./DropdownSimpleCars";
import {BUS, FIRE, PLANE, POLICE, SPORT, TANK, TRACTOR, TRUCK} from "../../data/titlesGroupsOfModels";
import SimpleCarIcon from "../Icons/SimpleCarIcon";
import TruckIcon from "../Icons/TruckIcon";
import {useWindowResize} from "../../lib/useResize";
import BusIcon from "../Icons/BusIcon";
import SportIcon from "../Icons/SportIcon";
import PoliceIcon from "../Icons/PoliceIcon";
import FireIcon from "../Icons/FireIcon";
import TractorIcon from "../Icons/TractorIcon";
import TankIcon from "../Icons/TankIcon";
import PlaneIcon from "../Icons/PlaneIcon";

type Props = {
	onClick: (name: string) => void
	isDropdownVisible: boolean
	setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
}

const Header = ({onClick, isDropdownVisible, setIsDropdownVisible}: Props) => {

	const isMobileDesign = useWindowResize()

	const toggleDropdownVisibility = () => {
		setIsDropdownVisible(prevState => !prevState)
	}

	return (
		<S.HeaderContainer>
			<HeaderButton name='simpleCars' onClick={toggleDropdownVisibility}><HeaderSimpleCarsButton  isDropdownVisible={isDropdownVisible} isMobileDesign={isMobileDesign}/></HeaderButton>
			{isDropdownVisible && <>
				<DropdownSimpleCars onClick={onClick}/>
				<S.Cover onClick={toggleDropdownVisibility}/>
			</>}
			<HeaderButton name='trucks' onClick={() => onClick('trucks')} >{isMobileDesign ? <TruckIcon/> : TRUCK}</HeaderButton>
			<HeaderButton name='buses' onClick={() => onClick('buses')}>{isMobileDesign ? <BusIcon/> : BUS}</HeaderButton>
			<HeaderButton name='sportsCars' onClick={() => onClick('sportsCars')}>{isMobileDesign ? <SportIcon/> : SPORT}</HeaderButton>
			<HeaderButton name='policeCars' onClick={() => onClick('policeCars')}>{isMobileDesign ? <PoliceIcon/> : POLICE}</HeaderButton>
			<HeaderButton name='fires' onClick={() => onClick('fires')}>{isMobileDesign ? <FireIcon/> : FIRE}</HeaderButton>
			<HeaderButton name='tractors' onClick={() => onClick('tractors')}>{isMobileDesign ? <TractorIcon/> : TRACTOR}</HeaderButton>
			<HeaderButton name='tanks' onClick={() => onClick('tanks')}>{isMobileDesign ? <TankIcon/> : TANK}</HeaderButton>
			<HeaderButton name='planes' onClick={() => onClick('planes')}>{isMobileDesign ? <PlaneIcon/> : PLANE}</HeaderButton>
		</S.HeaderContainer>
	);
};

export default Header;