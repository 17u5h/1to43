import React, {useState} from 'react';
import hairOnScreen from '../../assets/pictures/hair-on-screen.png'
import * as S from "./styles";


const HairOnScreen = () => {
	const [isHairVisible, setHarVisible] = useState<boolean>(true)
	const removeHair = () => {
		setHarVisible(false)
	}

	return (
		<>
		{isHairVisible && <S.HairOnScreen src={hairOnScreen} onMouseDown={removeHair}/>}
		</>
	);
};

export default HairOnScreen;