import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeamComponent from '../../Components/Team/TeamComponent';

const useStyles = makeStyles((theme) => ({
  container: {},
  title: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    height: '800px',
  },
}));

const HomePageComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}></div>
      <TeamComponent className={classes.teamComponent} />
      <div className={classes.title}></div>
    </div>
  );
};

export default HomePageComponent;
