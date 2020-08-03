import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/common/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/common/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Navbar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
