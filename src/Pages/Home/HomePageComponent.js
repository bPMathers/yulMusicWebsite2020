import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import FeaturedProjectsComponent from '../../Components/FeaturedProjects/FeaturedProjectsComponent';
import FeaturedProjectsComponent3 from '../../Components/FeaturedProjects3/FeaturedProjectsComponent3';
import ServicesComponent from '../../Components/Services/ServicesComponent';
import ProjectsComponent from '../../Components/Projects/ProjectsComponent';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: '0px',
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
  teamSection: {
    marginTop: '370px',
  },
  servicesSection: {
    marginBottom: '50px',
  },
  projectsSection: {
    marginBottom: '50px',
  },
}));

const HomePageComponent = () => {
  const classes = useStyles();

  return (
    <div id="top">
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
      {/* <FeaturedProjectsComponent /> */}
      <FeaturedProjectsComponent3 />
      <div id="teamSection" className={classes.teamSection}>
        <TeamComponent className={classes.teamComponent} />
      </div>
      <div id="servicesSection" className={classes.servicesSection}>
        <ServicesComponent />
      </div>
      <div id="projectsSection" className={classes.projectsSection}>
        <ProjectsComponent />
      </div>
      {/* <div className={classes.title}></div> */}
      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default HomePageComponent;
