//Routes Refresher - Practice

import React from "react";
import { Route, Switch } from "react-router-dom";

function Home() {
  return <div className="">Home!</div>;
}

function About() {
  return <div className="">About!</div>;
}

function FourOhFour() {
  return <div className=""> 404 Not Found!</div>;
}

let products = ["pants", "shoes", "shirts", "dresses"];
function Products(props) {
  console.log("props: ", props);
  return <div className="">{products[props.match.params.id]}</div>;
}

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/products/:id" component={Products} />;
    <Route path="/products/:category" component={Products} /> */}
    <Route
      path="/products/:category"
      render={props => {
        return props.isAuthed ? <Products /> : <Home />;
      }}
    />
    <Route path="*" component={FourOhFour} />
  </Switch>
);
