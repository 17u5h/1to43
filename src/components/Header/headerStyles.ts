import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: #1f3656;
  z-index: 1;
`

export const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    background-color: #294979;
  }
`