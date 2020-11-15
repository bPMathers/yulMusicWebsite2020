import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
}));

const TeamPageComponent = () => {
  const classes = useStyles();

  return <h1 className={classes.title}>Team Component is here baby!</h1>;
};

export default TeamPageComponent;
