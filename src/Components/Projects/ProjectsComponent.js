import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProjectComponent from './ProjectComponent';
import { projectsData } from './ProjectsData';

const useStyles = makeStyles((theme) => ({
  container: {
    // width: '100vw',
    // minWidth: '1200px',
    // minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.main,
  },
  sectionTitle: {
    textAlign: 'center',
    padding: '20px 0',
    marginBottom: '25px',
    color: theme.palette.accent.main,
  },
  projectsListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectsList: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    // alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
  },
}));

const ProjectsComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sectionTitle}>
        <Typography variant={'h1'}>CREATIONS</Typography>
      </div>
      <div className={classes.projectsListContainer}>
        <div className={classes.projectsList}>
          {projectsData.map((project, index) => {
            return <ProjectComponent key={index} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
