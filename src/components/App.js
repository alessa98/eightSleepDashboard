import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Details from "./Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/intervals/:userId" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/intervals/:userId/:intervalId">
            <Header />
            <Details />
          </Route>
          <Redirect from="*" to="/intervals/1" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
