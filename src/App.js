import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
