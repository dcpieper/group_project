import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomepageContainer from './containers /HomepageContainer';
import NavBar from './components /NavBar';

function App() {

  return (
  <Router >
  <header>
    <h1>smeco</h1>
  </header>
  

  <HomepageContainer/>

  <footer>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
       <li><a href="/quiz">Quiz</a></li>
       <li><a href="/community">Community</a></li>
       <li><a href="/leaderboard">Leaderboard</a></li>
       <p>Hello Jen!</p>
      </ul>
      </nav>
      <h4>smeco ©</h4>
  </footer>



  </Router>
  )
}

export default App;
