import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomepageContainer from "./containers /HomepageContainer";
import NavBar from "./components /NavBar";
import Header from "./components /Header";
import Footer from "./components /Footer";
import CountriesContainer from "./containers /CountriesContainer";
import QuizContainer from "./containers /QuizContainer";
import LeaderboardContainer from "./containers /LeaderboardContainer";
import CommunityContainer from "./containers /CommunityContainer";
import Opening from "./components /Opening";

function App() {
  return (
    <div className="full-container">

    <Router>
         <Opening />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomepageContainer />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="/community" element={<CommunityContainer />} />
        <Route path="/countries" element={<CountriesContainer />} />
        <Route path="/leaderboard" element={<LeaderboardContainer />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
