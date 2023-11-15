import React from 'react';

type Props = {
	isDropdownVisible: boolean
	isMobileDesign: boolean
}

const DropdownTriangle = ({isDropdownVisible, isMobileDesign}: Props) => {

	const rotate = `rotate(${Number(isDropdownVisible) * 180})`
	const width = () => isMobileDesign ? '24' : '36'

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width()} height="36" viewBox="0 0 36 36" transform={rotate}>
			<path d="M10.5 15l7.5 7.5 7.5-7.5z" fill="#fff"/>
			<path d="M0 0h36v36h-36z" fill="none"/>
		</svg>
	);
};

export default DropdownTriangle;