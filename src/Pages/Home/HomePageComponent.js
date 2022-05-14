import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import ProjectsComponent from '../../Components/Projects/ProjectsComponent';
import NathanComponent from '../../Components/Nathan/NathanComponent';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: '3px',
    marginBottom: '20px',
    // width: 'max-content',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15px',
    // marginBottom: '15px',
    color: theme.palette.common.red,
  },
  subtitleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    // width: 'max-content',
    padding: '2px 5px',
    marginBottom: '30px',
    // borderRadius: '5px',
  },
  subtitle: {
    lineHeight: 1.25,
    marginLeft: '15px',
    letterSpacing: '9px',
  },
  teamSection: {
    // marginTop: '80px',
    marginBottom: '120px',
  },
  servicesSection: {
    marginBottom: '50px',
  },
  projectsSection: {
    marginBottom: '50px',
  },
  creativeCollaboratorsSection: {
    marginBottom: '50px',
  },
}));

const HomePageComponent = () => {
  const classes = useStyles();

  return (
    <div id="top">
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          <Typography
            variant={'h1'}
            style={{
              letterSpacing: '10px',
            }}
          >
            YUL MUSIC
          </Typography>
        </div>
        <div className={classes.subtitleContainer}>
          <Typography variant={'subtitle1'} className={classes.subtitle}>
            HEARTS AND SPIRIT FROM MONTRÉAL
          </Typography>
        </div>
        <NathanComponent />
      </div>
      <div id="teamSection" className={classes.teamSection}>
        <TeamComponent />
      </div>
      <div id="projectsSection" className={classes.projectsSection}>
        <ProjectsComponent />
      </div>
      <div
        id="creativeCollaboratorsSection"
        className={classes.creativeCollaboratorsSection}
      >
        {/* <ProjectsComponent /> */}
      </div>
      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default HomePageComponent;
