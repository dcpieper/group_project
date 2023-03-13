import React from 'react'
import { getResults } from '../services/ResultServices'
import { useState, useEffect } from 'react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardList = () => {
    const[results, setResults] = useState([]);
    const[sortResult, setSortResult] = useState([]);

    useEffect (() => {
        getResults().then((allResults) => {
            setResults(allResults)
        })
    }, [])

    const sortScore = function(){
        const result1 = 
        resultNodes.reverse(function(a,b){
            return a-b;
        })
        console.log(result1)
        setSortResult(result1)
    }

    // console.log(results)

    const resultNodesSorted = sortResult.map((result, index) => {
        return <LeaderboardItem key={index} result={result} sortScore={sortScore}/>
    })
    const resultNodes = results.map((result, index) => {
        return <LeaderboardItem key={index} result={result} sortScore={sortScore}/>
    })

    // const sortScore = function(){
    //     resultNodes.sort(function(a,b){
    //         return a-b;
    //     })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Score<button onClick={sortScore}>↨</button></th>
                    <th>Name</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>{resultNodes}</tbody>
            </table>

            
        </div>
    )
}

export default LeaderboardList
