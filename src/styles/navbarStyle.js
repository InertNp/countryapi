import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 10%;
  background-color: ${(a) => {
    return a.theme.NavBarbgColor;
  }};
  color: ${(a) => {
    return a.theme.color;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(a) => {
    return a.theme.NavBarContainerBshadow;
  }};
`;
export const NavBarFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const NavText = styled.p`
  font-size: 20px;
  font-weight: 800;
`;
export const DarkButton = styled.button`
  color: inherit;
  font-size: 16px;
  font-weight: 300;
  background-color: transparent;
  width: 150px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: ${(a) => {
      return a.theme;
    }};
    border-radius: 20px;
  }
  p {
    padding-left: 10px;
  }
  .icon {
    transform: rotate(-30deg);
  }
`;
