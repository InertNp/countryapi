import { Container90, ContainerFlexMaintainer } from "../styles/Common";
import { Home } from "./home/home";

export function Body() {
  return (
    <ContainerFlexMaintainer>
      <Container90>
        <Home />
      </Container90>
    </ContainerFlexMaintainer>
  );
}
