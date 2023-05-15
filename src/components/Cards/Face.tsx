import React from 'react';
import * as S from "../Main/mainStyles";

type Props = {
	name?: string
	imgFileName?: string
	alt: string
}

const Face = ({name, imgFileName, alt}: Props) => {
	return (
		<div>
			<S.ToyImg src={imgFileName} alt={alt}/>
			<S.CardTitle>{name}</S.CardTitle>
		</div>
	);
};

export default Face;