import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { Grid, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#120101",
    color: "white",
    padding: 50,//change to change height of footer
  },
  links:{
      textDecoration:"none",
      color:"white"
  },
  icons:{
      color:"green",
    "&:hover": {
        color: "orange"
      },
  }
}));
//
const Footer = (props) => {
  const classes = useStyles();
  const links = [
   
    ["home","/"],
    ["about", "/about"],
    ["dashboard","/dashboard"],
    ["sign in","/signin"],
    ["sign up","/signup"],
    ["Your Brand Name copyright 2020 all rights reserved", "/"],
  ];
 
  const socialMedia = [[ <Facebook className={classes.icons} />,"facebook.com"],
  [<Twitter className={classes.icons}/>,"twitter.com"],[<Instagram className={classes.icons}/>,"instagram.com"]]
  return (
    <div className={classes.root}>
        <div className="social-media">
        <Grid container justify="center" alignItems="center" spacing={5}>
           { socialMedia.map((x,i)=><Grid item key={x,i}>
           <Link to={x[1]} className={classes.links}>{x[0]}</Link>
            </Grid>)}
        </Grid>
        </div>
      <Grid container justify="center" alignItems="center" spacing={10}>
        {links.map((x,i) => {
          return (
            <Grid item key={x+i}>
              <Link to={x[1]} className={classes.links}>{x[0].toUpperCase()}</Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Footer;
