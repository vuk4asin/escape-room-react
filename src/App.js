import { NavBar } from "./components/NavBar";
import { Btn } from "./components/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reservation from "./components/Reservation";
import Home from "./components/Home";
import EscapeRooms from "./components/EscapeRooms";
import EscapeGames from "./components/EscapeGames";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" style={{ backgroundImage: Image }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/reservation" component={Reservation} />
          <Route path="/escaperooms" component={EscapeRooms} />
          <Route path="/escapegames" component={EscapeGames} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />

          <div style={{ textAlign: "center", fontSize: 30 }}>
            <h1>DO YOU ESCAPE WITHIN TIME?</h1>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Btn />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
