import React, {useState} from 'react';
import * as S from "../Main/mainStyles";
import {Car} from "../../types/Types";
import Face from "./Face";
import Tail from "./Tail";
import ReactCardFlip from "react-card-flip";


const Card = ({name, imgFileName}: Car) => {
	const alt = `фотография модельки машины ${name}`
	const [isFlipped, setIsFlipped] = useState<boolean>(false)

	const cardToggle = () => {
		setIsFlipped(prevState => !prevState)
	}

	return (

		<ReactCardFlip isFlipped={isFlipped}>
			<S.Card onClick={cardToggle}>
				<Face name={name} imgFileName={imgFileName} alt={alt}/>
			</S.Card>

			<S.Card onClick={cardToggle}>
				<Tail/>
			</S.Card>
		</ReactCardFlip>

	);
};

export default Card;