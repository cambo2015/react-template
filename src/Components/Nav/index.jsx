import { Button, Grid } from "@material-ui/core";

import { Link } from "react-router-dom";
import React from "react";
import routes from "../../helpers/routes";

const Navigation = ({color}) => {
  color=color ||"black"
  return (
    <>
    <div className="logo">
      Brand Name 
    </div>
    <Grid container justify="center" alignContent={"center"} spacing={5}>
      {routes.map((x,i) => (
        <Grid item key={x+i}>
          <Link to={x[0]} style={{ textDecoration: "none", color: "black" }}>
            <Button style={{color}}>{x[2]}</Button>
          </Link>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Navigation;
