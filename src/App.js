import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./component/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
