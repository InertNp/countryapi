import { ContainerCountry } from "./../../styles/HomeStyles";
export function Country({ data, theme }) {
  return <CountryBox data={data} theme={theme} />;
}
const CountryBox = ({ data, theme }) => {
  // console.log(data);
  return (
    <ContainerCountry theme={theme}>
      <div className="containerBox">
        <div className="imageContainer">
          <img src={data.flag} alt={`CountryFlag`} />
        </div>
        <div className="informationBox">
          <h1>{data.country}</h1>
          <div className="more-info">
            Population:<data>{data.population}</data>
            <br />
            Region:<data>{data.region}</data>
            <br />
            Capital:<data>{data.capital}</data>
            <br />
          </div>
        </div>
      </div>
    </ContainerCountry>
  );
};
