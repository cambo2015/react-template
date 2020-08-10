import { Button, Container, Grid, Slider } from "@material-ui/core";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "../../../Components/Footer";
import Navigation from "../../../Components/Nav";
import React from "react";

const MainTemplate = (props) => {
  function handleClick(e) {
    alert("clicked");
  }

  return (
    <div >
      <Navigation />
      <div style={{minHeight:"100vh"}}>
      {props.children}
      </div>
   
      <Footer/>
    </div>
  );
};

export default MainTemplate;
