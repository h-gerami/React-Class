import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home";
import ImageDetailScreen from "./Pages/ImageDetailScreen";
import ImageSearchScreen from "./Pages/ImageSearchScreen";
import Login from "./Pages/Login";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Image Search</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/image">
            <ImageDetailScreen />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>

          <Route exact path="/">
            <ImageSearchScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
