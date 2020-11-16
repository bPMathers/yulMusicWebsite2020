import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import FeaturedProjectsComponent from '../../Components/FeaturedProjects/FeaturedProjectsComponent';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: '20px',
    marginBottom: '20px',
    // width: 'max-content',
  },
  title: {
    marginLeft: '15px',
    color: theme.palette.common.red,
  },
  subtitleContainer: {
    backgroundColor: theme.palette.secondary.main,
    // width: 'max-content',
    padding: '2px 5px',
    marginBottom: '8px',
    // borderRadius: '5px',
  },
  subtitle: {
    lineHeight: 1.25,
    marginLeft: '15px',
    letterSpacing: '9px',
  },
}));

const HomePageComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <Typography variant={'h1'} style={{ letterSpacing: '10px' }}>
            YUL MUSIC
          </Typography>
        </div>
        <div className={classes.subtitleContainer}>
          <Typography variant={'subtitle1'} className={classes.subtitle}>
            HEARTS AND SPIRIT FROM MONTRÉAL
          </Typography>
        </div>
      </div>
      <FeaturedProjectsComponent />
      <TeamComponent className={classes.teamComponent} />
      <div className={classes.title}></div>
    </div>
  );
};

export default HomePageComponent;
