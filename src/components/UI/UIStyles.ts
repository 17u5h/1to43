import styled from "styled-components";

export const CloseButton = styled.div`
  cursor: pointer;
  user-select: none;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: -6px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #deecfd;
  }
`

export const Input = styled.input`
  height: 50%;
  border: none;
  border-radius: 6px;
  outline: none;
	font-size: 14px;
	padding-left: 6px;
	width: 84%;

  &:hover {
    box-shadow: 0 0 4px 10px #2259b2;
  }
`