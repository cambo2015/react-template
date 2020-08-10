import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import FindInPageOutlinedIcon from "@material-ui/icons/FindInPageOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import LoopOutlinedIcon from "@material-ui/icons/LoopOutlined";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React from 'react';
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

//replace with your icons here
const icons =(classes)=> [
    <VideocamOutlinedIcon
      color=""
      fontSize="large"
      className={classes.navIcons}
    />,
    <QuestionAnswerIcon
      color=""
      fontSize="large"
      className={classes.navIcons}
    />,
    <ImportContactsOutlinedIcon
      color=""
      fontSize="large"
      className={classes.navIcons}
    />,
    <EmojiObjectsIcon fontSize="large" className={classes.navIcons} />,
    <UpdateOutlinedIcon
      color=""
      fontSize="large"
      className={classes.navIcons}
    />,
    <FindInPageOutlinedIcon
      color=""
      fontSize="large"
      className={classes.navIcons}
    />,
    <LoopOutlinedIcon fontSize="large" className={classes.navIcons} />,
  ];


  export default icons