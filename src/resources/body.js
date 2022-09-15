import { Container90, ContainerFlexMaintainer } from "../styles/Common";
import { Home } from "./home/home";

export function Body({ theme }) {
  return (
    <ContainerFlexMaintainer>
      <Container90>
        <Home theme={theme} />
      </Container90>
    </ContainerFlexMaintainer>
  );
}
