import {useEffect, useState} from "react";
import {mediaWidthNumbers} from "../styles";


export const useWindowResize = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleSize = (event) => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleSize)
		return () => {
			window.removeEventListener('resize', handleSize)
		}
	}, [])
	return width <= mediaWidthNumbers.medium
}