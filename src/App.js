import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Charts from "./pages/charts";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
          </ul>
        </nav>

        <Route path="/charts" exact component={Charts} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
