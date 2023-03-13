import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {

  return (

    <ul className='nav-bar'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/quiz">Quiz</Link></li>
    <li><Link to="/community">Your Tips</Link></li>
    <li><Link to="/countries">Countries</Link></li>
    <li><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>

  )
}

export default NavBar