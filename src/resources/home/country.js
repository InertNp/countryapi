import { ContainerCountry, SetCol } from "./../../styles/HomeStyles";
export function Country({ data }) {
  return <CountryBox data={data} />;
}
const CountryBox = ({ data }) => {
  // console.log(data);
  return (
    <ContainerCountry>
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
