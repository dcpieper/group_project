import React from "react";
import { getResults } from "../services/ResultServices";
import { useState, useEffect } from "react";
import LeaderboardItem from "./LeaderboardItem";

const LeaderboardList = () => {
  const [results, setResults] = useState([]);
  const [sortNames, setSortNames] = useState([]);
  const [sortCountries, setSortCountries] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getResults().then((allResults) => {
      setResults(allResults);
    });
  }, []);

  const sortScore = function () {
    const resultsCopy = [...results];
    resultsCopy.sort((a, b) => {
      return a.score - b.score;
    });
    setResults(resultsCopy);
  };

  const filterResults = (input) => {
    const filteredNodes = results.filter((result) => {
      return result.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredResults(filteredNodes);
    if (input === "") {
      setFilteredResults([]);
    }
  };

  const handleFilterResults = (event) => {
    filterResults(event.target.value);
  };

  let res;

  if (filteredResults.length > 0) {
    res = filteredResults;
  } else {
    res = results;
  }

  const resultNodes = res.map((result, index) => {
    return <LeaderboardItem key={index} result={result} />;
  });

  return (
    <div className="leaderboard">
      <input
        type="text"
        placeholder="Filter Results"
        onChange={handleFilterResults}
      />
      <table>
        <thead>
          <tr>
            <th>
              Score<button onClick={sortScore}>↨</button>
            </th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{resultNodes}</tbody>
      </table>
    </div>
  );
};
export default LeaderboardList;
