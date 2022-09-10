import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 5px hsl(0, 0%, 95%);
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
    box-shadow: 0px 0px 5px hsl(0, 0%, 90%);
    border-radius: 20px;
  }
  p {
    padding-left: 10px;
  }
  .icon {
    transform: rotate(-30deg);
  }
`;
