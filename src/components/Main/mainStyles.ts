import styled from "styled-components";


export const Card = styled.div`
  position: relative;
  width: 333px;
  height: 332px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px #ddd;
  cursor: pointer;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`