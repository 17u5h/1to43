import React from 'react';
import pic1 from '../../assets/pictures/toys/alfa-romeo-147.JPG'
import {toys} from "../../data/toys";

const Main = () => {

	return (
		<>
		{toys.map(el => (
				<div style={{width: '300px', height: '300px'}}>
					<img src={pic1} alt='pic' style={{objectFit: 'contain', width: '100%'}}/>
				</div>
		))}
		</>
	);
};

export default Main;