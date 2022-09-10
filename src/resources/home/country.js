import { ContainerCountry } from "./../../styles/HomeStyles";
export function Country() {
  return <CountryBox />;
}
const CountryBox = () => {
  return (
    <ContainerCountry>
      <div className="containerBox">
        <div className="imageContainer">
          <img src={`sth`} alt={`CountryFlag`} />
        </div>
        <div className="informationBox">
          <h1>CountryName</h1>
          <div className="more-info">
            <label htmlFor="population">Population:</label>
            <p id="population">{``}</p>
            <label htmlFor="region">Population:</label>
            <p id={`region`}>{``}</p>
            <label htmlFor="capital">Population:</label>
            <p id="capital">{`Moon`}</p>
          </div>
        </div>
      </div>
    </ContainerCountry>
  );
};
