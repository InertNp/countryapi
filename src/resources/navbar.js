import { Container90 } from "../styles/Common";
import {
  DarkButton,
  NavBarContainer,
  NavBarFlexContainer,
  NavText,
} from "../styles/navbarStyle";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar() {
  return (
    <NavBarContainer>
      <Container90>
        <NavBarFlexContainer>
          <NavText>Where in the World?</NavText>
          <DarkButton>
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <p>Dark Mode</p>
          </DarkButton>
        </NavBarFlexContainer>
      </Container90>
    </NavBarContainer>
  );
}
