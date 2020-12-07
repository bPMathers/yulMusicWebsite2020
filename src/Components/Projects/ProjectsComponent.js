import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const projects = [
  {
    title: 'Project Title 1',
    subtitle: 'Project Subtitle 1',
    year: '2020',
  },
  {
    title: 'Project Title 2',
    subtitle: 'Project Subtitle 2',
    year: '2020',
  },
  {
    title: 'Project Title 3',
    subtitle: 'Project Subtitle 3',
    year: '2020',
  },
  {
    title: 'Project Title 4',
    subtitle: 'Project Subtitle 4',
    year: '2020',
  },
  {
    title: 'Project Title 5',
    subtitle: 'Project Subtitle 5',
    year: '2020',
  },
  {
    title: 'Project Title 6',
    subtitle: 'Project Subtitle 6',
    year: '2020',
  },
  {
    title: 'Project Title 7',
    subtitle: 'Project Subtitle 7',
    year: '2020',
  },
  {
    title: 'Project Title 8',
    subtitle: 'Project Subtitle 8',
    year: '2020',
  },
  {
    title: 'Project Title 9',
    subtitle: 'Project Subtitle 9',
    year: '2020',
  },
  {
    title: 'Project Title 10',
    subtitle: 'Project Subtitle 10',
    year: '2020',
  },
  {
    title: 'Project Title 11',
    subtitle: 'Project Subtitle 11',
    year: '2020',
  },
  {
    title: 'Project Title 12',
    subtitle: 'Project Subtitle 12',
    year: '2020',
  },
  {
    title: 'Project Title 13',
    subtitle: 'Project Subtitle 13',
    year: '2020',
  },
  {
    title: 'Project Title 14',
    subtitle: 'Project Subtitle 14',
    year: '2020',
  },
  {
    title: 'Project Title 15',
    subtitle: 'Project Subtitle 15',
    year: '2020',
  },
  {
    title: 'Project Title 16',
    subtitle: 'Project Subtitle 16',
    year: '2020',
  },
  {
    title: 'Project Title 17',
    subtitle: 'Project Subtitle 17',
    year: '2020',
  },
  {
    title: 'Project Title 18',
    subtitle: 'Project Subtitle 18',
    year: '2020',
  },
  {
    title: 'Project Title 19',
    subtitle: 'Project Subtitle 19',
    year: '2020',
  },
  {
    title: 'Project Title 20',
    subtitle: 'Project Subtitle 20',
    year: '2020',
  },
];

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
  projectsList: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  project: {
    width: '33%',
    minWidth: '300px',
    height: '300px',
    // border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: theme.palette.common.red,
    height: '3px',
    width: '30px',
    margin: '10px 0',
  },
}));

const ProjectsComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sectionTitle}>
        <Typography variant={'h1'}>CREATIONS</Typography>
      </div>
      <div className={classes.projectsList}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={classes.project}>
              <Typography variant={'h4'}>{project.title}</Typography>
              <Typography>{project.subtitle}</Typography>
              <div className={classes.separator}></div>
              <Typography variant={'h4'}>{project.year}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
