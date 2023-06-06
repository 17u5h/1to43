import styled from "styled-components";

export const mediaWidthNumbers = {
	extraLarge: 1400,
	large: 1000,
	medium: 750,
	small: 500,
}

export const mediaWidth = {
	extraLarge: `(max-width: ${mediaWidthNumbers.extraLarge}px)`,
	large: `(max-width: ${mediaWidthNumbers.large}px)`,
	medium: `(max-width: ${mediaWidthNumbers.medium}px)`,
	small: `(max-width: ${mediaWidthNumbers.small}px)`,
}


export const Wrapper = styled.div`
  background-color: #f9fdfc;
  padding-bottom: 200px;
`

export const Container = styled.div`
  margin: auto;
	max-width: 1400px;
`
export const Main = styled.div`
	display: flex;
	flex-direction: column;
`
export const BlockOfCards = styled.div`

`

export const BlockTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
	font-weight: 600;
	padding: 40px 0;
  color: #999;
  scroll-margin-top: 3rem;
`