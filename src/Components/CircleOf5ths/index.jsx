import { Button, Grid, Paper } from "@material-ui/core";
import { flats, keys, sharps } from "./keys";

import React from "react";
import { playNote } from "../../Helpers/playNote";

const CircleOf5ths = ({ handleButtonClicked,sound }) => {
  const addAngle = 360 / 12; //30
  const startAngle = 150; //90 aka C spot
  let currAngle = startAngle;

  const toAngles = (x) => (x * 180) / Math.PI;
  const toRadians = (x) => (x * Math.PI) / 180;
  function calculatePosition(angle) {
    const radius = 200;
    const halfX = window.innerWidth / 2;
    const halfY = window.innerHeight / 2;

    let x = Math.cos(toRadians(angle)) * radius + halfY;
    let y = Math.sin(toRadians(angle)) * radius + halfX - 50;

    return { x: x, y: y };
  }
  const handleClicked = (item) => {
    if(sound)playNote(item);
    handleButtonClicked(item);
  };

  return (
    <div className="circle-5" >
      <Grid container justify="center" alignContent="center">
        <Grid item>
          {keys.map((item, i) => {
            currAngle += addAngle;
            const pos = calculatePosition(currAngle);
            const { x, y } = pos;
            const isEven = i < 7 && i !== 0;
            // console.log(`X:${toAngles(x)} | Y:${toAngles(y)}`);
            return (
              <Button
                key={item}
                color={isEven ? "primary" : "secondary"}
                style={{
                  position: "absolute",
                  left: y,
                  top: x,
                  textTransform: "none",
                  fontSize: 20,
                }}
                size="large"
                onClick={() => handleClicked(item)}
              >
                {item}
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default CircleOf5ths;
