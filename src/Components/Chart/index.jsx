import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import { getPreviousScores } from "../../Helpers/localStorage";

const Chart = ({ width, height }) => {
  const [userScoreData, setUserScoreData] = useState(null);
  const [labels, setLabels] = useState(null);
  useEffect(() => {
    const scoreData = getPreviousScores();
    setUserScoreData(scoreData.map(x=>x.score))
    
  }, []);
  const fillColor = `rgba(75,192,192,0.4)`;
  const lineColor = `rgba(75,192,192,1)`;
  const data = {
    labels: ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"],
    datasets: [
      {
        label: "My Scores",
        fill: true,
        backgroundColor: `${fillColor}`,
        borderColor: `${lineColor}`,
        data: userScoreData,
      },
    ],
  };
  return (
    <Paper style={{ marginTop: 32, padding: 32 }}>
      <Line data={data} width={width} height={height} />
    </Paper>
  );
};

export default Chart;
