import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {

  return (

    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/quiz">Quiz</Link></li>
    {/* <li><Link to="/community">Community</Link></li> */}
    <li><Link to="/countries">Countries</Link></li>
    {/* <li><Link to="/leaderBoard">Leaderboard</Link></li> */}
    </ul>

  )
}

export default NavBar