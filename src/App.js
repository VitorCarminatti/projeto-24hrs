import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Charts from "./pages/charts";
import Login from "./pages/login";
import Nav from "./components/menu";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Dashboard} />
        <Route path="/charts" exact component={Charts} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
