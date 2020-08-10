import {
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  FiberManualRecordOutlined,
  ShowChartOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { keyParse, keys } from "../../Components/CircleOf5ths/keys";

import Chart from "../../Components/Chart";
import CircleOf5ths from "../../Components/CircleOf5ths";
import CustomBottomNav from "../../Components/CustomBottomNav";
import PageTemplate from "../Templates/PageTemplate/PageTemplate";
import { playNote } from "../../Helpers/playNote";
import random from "random";
import { saveScore } from "../../Helpers/localStorage";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {},
  circle: {
    position: "absolute",
    top: window.innerHeight / 2 - 130,
    left: window.innerWidth / 2 - 165,
    textAlign: "center",
    width: 300,
    height: 300,
    borderRadius: "50%",
    // border: "1px solid black",
    // background: "purple",
    // color: "white",
    // background: `linear-gradient(90deg, rgb(216,66,250,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);`,
  },
  bottomNav: {
    paddingTop: 550,
  },
  chartBottomNav:{
   paddingTop:100,
    // backgroundColor:"green",
    width:"100%"
  },
  hidden: {
    display: "none",
  },
  startButton:{
    color:theme.palette.primary.main
  }
}));
const InteractiveMusicPage = (props) => {
  const numQuestions = 2;
  const [question, setQuestion] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [percentage, setPerentage] = useState(0);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const confirm = useConfirm();
  const classes = useStyles();

  const saveUserScore = (score) => {
    console.log("saving score")
    saveScore(score)
  };

  const scoreToPercentage = () => {
    if (currentQuestionNum > 0) {
      const n = (currentQuestionNum / numQuestions) * 100;
      // console.log("this is n", n);
      return n;
    }
    return 0;
  };
  const askQuestion = () => {
    setDisableButton(true);
    const keyIndex = random.int(0, 11);

    const key = keys[keyIndex];
    setCurrentKey(key);
    setQuestion(`What key has ${keyParse(keyIndex)}`);
  };

  const handleIsCorrect = (x) => {
    if (currentQuestionNum < numQuestions) {
      if (x === currentKey) {
        setScore(score + 100);

        enqueueSnackbar(` ${currentKey} : Correct`, {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
      } else {
        enqueueSnackbar(`Incorrect. The right answer is ${currentKey}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
      }
      setCurrentQuestionNum(currentQuestionNum + 1);
      askQuestion();
    } else {
      confirm({ description: `Quiz over! Your final score is ${score}` });
      setDisableButton(false);
      setScore(0); //reset score
      saveUserScore(score);
      setCurrentQuestionNum(0)
    }
  };

  //end logic
  const handleChangeBottomNav = (value) => {
    setBottomNavValue(value);
  };

  return (
    <PageTemplate pageTitle="">
      <Paper className="circle5-quiz" style={{ margin: 100, height: 750 }}>
        <Typography align="center" variant="h3" style={{ padding: 20 }}>
          {disableButton ? question : "Circle of 5ths"}
        </Typography>
     { bottomNavValue===0 ?<LinearProgress
          variant="determinate"
          value={scoreToPercentage()}
          color="secondary"
        />:""}
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={5}
        >
          {bottomNavValue === 0 ? (
            <>
              <Grid item>
                <Paper elevation={10} className={classes.circle}>
                  <div style={{ marginBottom: 20, marginTop: 50 }}>
                    <Typography variant="h3">Score</Typography>
                    <Typography variant="h3" style={{ margin: 30 }}>
                      {score}
                    </Typography>
                  </div>
                  <div style={{ marginBottom: 30 }}>
                    <Button
                      variant="text"
                      onClick={askQuestion}
                      disabled={disableButton}
                    className={classes.startButton}
                    >
                      {!disableButton ? "Start" : "keep going"}
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item>
                <CircleOf5ths
                  handleButtonClicked={(x) => handleIsCorrect(x)}
                  sound={true}
                />
                <CustomBottomNav
                  icons={[<FiberManualRecordOutlined />, <ShowChartOutlined />]}
                  handleGetValue={(value) => handleChangeBottomNav(value)}
                  className={classes.bottomNav}
                  defaultValue={0}
                />
              </Grid>
            </>
          ) : (
            <Grid item>
              <Chart width={500} height={400} />
              <CustomBottomNav
                icons={[<FiberManualRecordOutlined />, <ShowChartOutlined />]}
                handleGetValue={(value) => handleChangeBottomNav(value)}
                defaultValue={1}
                className={classes.chartBottomNav}
              />
            </Grid>
          )}

        
        </Grid>
      </Paper>
    </PageTemplate>
  );
};

export default InteractiveMusicPage;
