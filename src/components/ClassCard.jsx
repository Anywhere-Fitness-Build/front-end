import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "100%",
    boxSizing: "border-box",
    minHeight: 175
  },

  title: {
    fontSize: 14
  },
  area: {
    width: "100%",
    maxHeight: 250
  }
});

const ClassCard = () => {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.area}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Test Title
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Instructor name
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ClassCard;
