import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ProjectComponent from './ProjectComponent';
import { projectsData } from './ProjectsData';
import ProjectDetailComponent from './ProjectDetailComponent';
import ProjectComponent2 from './ProjectComponent2';

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

  const handleProjectClick = (projectId) => () => {
    const project = projectsData.find((project) => project.id === projectId);
    setDetailOpen(true);
    setSelectedProject(project);
  };

  const handleNavigate = (direction) => {
    const currentProjectIndex = projectsData.findIndex(
      (project) => project.id === selectedProject.id
    );
    if (direction === 'left') {
      setDetailOpen(true);
      if (currentProjectIndex === 0) {
        setSelectedProject(projectsData[projectsData.length - 1]);
      } else {
        setSelectedProject(projectsData[currentProjectIndex - 1]);
      }
    } else if (direction === 'right') {
      if (currentProjectIndex === projectsData.length - 1) {
        setSelectedProject(projectsData[0]);
      } else {
        setSelectedProject(projectsData[currentProjectIndex + 1]);
      }
    }
  };

  return (
    <>
      <ProjectDetailComponent
        onClose={handleOnDetailClose}
        open={detailOpen}
        project={selectedProject}
        onNavigate={handleNavigate}
      />
      <div className={classes.container} open={detailOpen}>
        <div className={classes.projectsListContainer}>
          <div className={classes.projectsList}>
            {projectsData.map((project, index) => {
              return (
                <div onClick={handleProjectClick(project.id)} key={index}>
                  <ProjectComponent2 project={project} />
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
