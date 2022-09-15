import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(a) => {
    return a.theme.bgColor;
  }};
  color: ${(a) => {
    return a.theme.color;
  }};
`;
export const ContainerFlexMaintainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: inherit;
`;
export const Container90 = styled.div`
  width: 90%;
  color: inherit;
  /* background-color: aliceblue; */
`;
