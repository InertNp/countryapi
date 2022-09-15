export async function nextCountries() {
  const allData = [];
  const getData = await fetch("https://restcountries.com/v3.1/all").then(
    (response) => response.json()
  );
  getData.map(async (sth) => {
    // console.log(sth);
    const dataArray = {
      dataType: "real",
      popualtion: sth.population,
      flag: `https://countryflagsapi.com/png/${sth.altSpellings[0]}`,
      region: sth.region,
      country: sth.name.common,
      capital: sth.capital,
    };
    allData.push(dataArray);
  });
  return allData;
}
