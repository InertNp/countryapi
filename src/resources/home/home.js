import { ContainerHome } from "../../styles/HomeStyles";
import { Country } from "./country";
import { Search } from "./search";

export function Home() {
  return (
    <ContainerHome>
      <Search />
      <Country />
    </ContainerHome>
  );
}
