import styled from "styled-components";
import {mediaWidth} from "../../styles";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
	height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f3656;
  z-index: 1;
	
  @media ${mediaWidth.large} {
    height: 60px;
  }
  @media ${mediaWidth.medium} {
    height: 40px;
    padding-top: 20px;
  }
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
	justify-content: center;
  height: 100%;
  color: #fff;
  background-color: #1f3656;
  font-weight: 600;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  padding: 20px 20px;
	border: none;

  &:hover {
    background-color: #294979;
  }
	
	@media ${mediaWidth.extraLarge} {
		font-size: 16px;
		padding: 20px 4px;
	}
	@media ${mediaWidth.large} {
		font-size: 14px;
		padding: 20px 4px;
	}
	@media ${mediaWidth.medium} {
		font-size: 12px;
    padding: 10px 0px;
  }
`
export const DropdownButton = styled(HeaderButton)`
  justify-content: start;
	width: 100%;
	padding: 10px 20px;
`
export const HeaderSimpleCarsButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 4px;

  @media ${mediaWidth.medium} {
    gap: 0;
  }
`

export const DropdownSimpleCars = styled.div`
	position: absolute;
	top: 80px;
	left: 0;
	padding-bottom: 10px;
	background-color: #1f3656;
  z-index: 1;
	transform: translateY(-150%);
	animation: appearance 0.3s forwards;

  @media ${mediaWidth.large} {
    top: 60px;
  }
	@media ${mediaWidth.medium} {
    top: 40px;
  }
	@keyframes appearance {
		0% {transform: translateY(-150%)}
		100% {transform: translateY(0)}
	}
`

export const Cover = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: transparent;
`