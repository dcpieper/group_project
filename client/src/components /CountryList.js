import Country from "./Country";
import { getCountries } from "../services/CountryServices";
import { useState, useEffect } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);
  console.log(countries);
  const countryNodes = countries.map((country, index) => {
    return <Country key={index} country={country} />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Emissions (tonnes)</th>
          <th>Emissions per Capita</th>
        </tr>
      </thead>
      <tbody>{countryNodes}</tbody>
    </table>
  );
};

export default CountryList;
