import React from 'react';
import * as S from "../Main/mainStyles";

type Props = {
	description: string | undefined
}

const Tail = ({description}: Props) => {
	return (
		<S.CardTail>
			{description}
		</S.CardTail>
	);
};

export default Tail;