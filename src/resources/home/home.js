import { useState } from "react";
import {
  ContainerHome,
  LoadingScreenContainer,
  SetCol,
} from "../../styles/HomeStyles";
import { Country } from "./country";
import { Search } from "./search";
import { nextCountries } from "../../APIs/nextCountries";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

export function Home({ theme }) {
  // console.log(theme);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //using effects
  useEffect(() => {
    nextCountries().then((sth) => {
      setData(sth);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  //loading and more
  function LoadScreen() {
    return (
      <LoadingScreenContainer>
        <FontAwesomeIcon icon={faCircleNotch} spin className="icon2" />
      </LoadingScreenContainer>
    );
  }
  function ShowData() {
    return (
      <SetCol>
        {data.map((a) => {
          return <Country data={a} key={uuid()} />;
        })}
      </SetCol>
    );
  }
  function IfElse() {
    if (loading === true) {
      return <LoadScreen />;
    } else {
      return <ShowData />;
    }
  }
  return (
    <ContainerHome theme={theme}>
      <Search theme={theme} />
      <IfElse />
    </ContainerHome>
  );
}
