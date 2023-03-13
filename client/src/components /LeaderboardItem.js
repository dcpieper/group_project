import React from 'react'

const LeaderboardItem = ({result}) => {
    return (
        <tr>
            <td>{result.score}</td> 
            <td>{result.name}</td>
            <td>{result.country}</td>
            
        </tr>
    )
}

export default LeaderboardItem
