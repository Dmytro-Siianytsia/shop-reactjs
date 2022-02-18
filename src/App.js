import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home-page/home-page.component";

const Hats = () => <h1>Hats</h1>
const Jackets = () => <h1>Jackets</h1>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={Hats}/>
        <Route exact path="/jackets" component={Jackets}/>
      </Switch>
    </div>
  );
}

export default App;
