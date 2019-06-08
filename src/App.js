import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Charts from "./pages/charts";

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
      </div>
    </Router>
  );
}

export default App;
