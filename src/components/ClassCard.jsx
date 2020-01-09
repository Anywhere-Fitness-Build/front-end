import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 250
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  area: {
    maxWidth: 250,
    maxHeight: 250
  }
});

const ClassCard = (props) => {
  const classes = useStyles();
  console.log(props.name);
  return (
    <CardActionArea className={classes.area}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {console.log(props.name)}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Instructor name
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

export default ClassCard;
