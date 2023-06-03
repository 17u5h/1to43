import styled from "styled-components";


export const Card = styled.div`
  position: relative;
  width: 333px;
  height: 332px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px #ddd;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px #888;
  }
`
export const ToyImg = styled.img`
  width: 100%;
  object-fit: cover;
`
export const CardTitle = styled.div`
  position: absolute;
  width: 96%;
  display: flex;
  justify-content: center;
  top: 4px;
  left: 10px;
  font-size: 28px;
  color: #999;
`

export const InformationSign = styled.div`
	position: absolute;
	bottom: 3%;
	left: 55%;
	font-size: 14px;
  color: #999;
	text-decoration: underline;
`

export const CardTail = styled.div`
	text-align: justify;
	padding: 8px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
