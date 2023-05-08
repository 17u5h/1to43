import styled from "styled-components";

export const Card = styled.div`
  width: 333px;
  height: 332px;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px #ddd;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`