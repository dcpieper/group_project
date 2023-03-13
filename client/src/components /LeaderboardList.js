import React from 'react'
import { getResults } from '../services/ResultServices'
import { useState, useEffect } from 'react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardList = () => {
    const[results, setResults] = useState([]);

    useEffect (() => {
        getResults().then((allResults) => {
            setResults(allResults)
        })
    }, [])

    const sortScore = function(){
       setResults(results.sort(function(a, b){
        return a.score - b.score
       }))
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
