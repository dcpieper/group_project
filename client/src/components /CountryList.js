import Country from "./Country";
import { getCountries } from "../services/CountryServices";
import { useState, useEffect } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const filterCountries = (input) => {
    const filteredNodes = countries.filter((country) => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredCountries(filteredNodes);
    if (input === "") {
      setFilteredCountries([]);
    }
  };

  const handleFilterCountries = (event) => {
    filterCountries(event.target.value);
  };

  let spheres;

  if (filteredCountries.length > 0) {
    spheres = filteredCountries;
  } else {
    spheres = countries;
  }

  useEffect(() => {
    getCountries().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);
  console.log(countries);
  const countryNodes = spheres.map((country, index) => {
    return <Country key={index} country={country} />;
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Filter Countries"
        onChange={handleFilterCountries}
      />
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
    </div>
  );
};

export default CountryList;
