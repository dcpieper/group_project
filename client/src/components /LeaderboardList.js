import React from 'react'
import { getResults } from '../services/ResultServices'
import { useState, useEffect } from 'react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardList = () => {
    const[results, setResults] = useState([]);
    const [sortNames, setSortNames] = useState([])
    const [sortCountries, setSortCountries] = useState([])

    useEffect (() => {
        getResults().then((allResults) => {
            setResults(allResults)
        })
    }, [])

    const sortScore = function(){
        const resultsCopy = [...results];
        resultsCopy.sort((a, b)=>{
        return a.score - b.score
       })
       setResults(resultsCopy)
    }

    const resultNodes = results.map((result, index) => {
        return <LeaderboardItem key={index} result={result}  />
    })


    return (
            <table>
                <thead>
                    <tr>
                    <th>Score<button onClick={sortScore}>↨</button></th>
                    <th>Name</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>{resultNodes}
                </tbody>
            </table>
    )
}
export default LeaderboardList;
