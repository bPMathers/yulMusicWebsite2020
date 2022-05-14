import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProjectComponent from './ProjectComponent';
import { projectsData } from './ProjectsData';
import ProjectDetailComponent from './ProjectDetailComponent';

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

  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleOnDetailClose = () => {
    setDetailOpen(false);
  };

  const handleProjectClick = (project) => () => {
    console.log(JSON.stringify(project, 4, null));
    setDetailOpen(true);
    setSelectedProject(project);
  };

  return (
    <>
      <ProjectDetailComponent
        onClose={handleOnDetailClose}
        open={detailOpen}
        project={selectedProject}
      />
      <div className={classes.container} open={detailOpen}>
        <div className={classes.projectsListContainer}>
          <div className={classes.projectsList}>
            {projectsData.map((project, index) => {
              return (
                <div onClick={handleProjectClick(project)} key={index}>
                  <ProjectComponent project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsComponent;
