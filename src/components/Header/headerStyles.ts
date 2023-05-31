import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
	height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f3656;
  z-index: 1;
	
  @media (max-width: 1000px) {
    height: 60px;
  }
  @media (max-width: 750px) {
    height: 40px;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
		height: 100%;
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
	
	@media (max-width: 1400px) {
		font-size: 16px;
		padding: 20px 4px;
	}
	@media (max-width: 1000px) {
		font-size: 14px;
	}
	@media (max-width: 750px) {
		font-size: 12px;
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

  @media (max-width: 1000px) {
    top: 60px;
  }
	@media (max-width: 750px) {
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