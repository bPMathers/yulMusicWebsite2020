import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  project: {
    width: 'calc(100vw / 3 - 40px)',
    padding: '15px',
    minWidth: '300px',
    height: 'calc((100vw / 3) / 1.75)',
    // border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    animation: `$fade 2000ms ease-out`,

    '&::after': {
      content: '""',
      opacity: 0.1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      borderRadius: '20px',
      zIndex: -1,
      background: (props) => `url(${props?.project?.bgImg})`,
      backgroundSize: (props) => 'cover',

      '&:hover': {
        zIndex: 2,
      },
    },

    '&:hover': {
      opacity: 0.9,
      cursor: 'pointer',
    },
  },
  separator: {
    backgroundColor: theme.palette.common.red,
    height: '3px',
    width: '30px',
    margin: '10px 0',
  },
}));

const ProjectComponent = (props) => {
  const { project } = props;
  const classes = useStyles(props);

  return (
    <div style={{ position: 'relative' }}>
      <div key={project.id} className={classes.project}>
        <Typography variant={'h4'}>{project.title}</Typography>
        <Typography>{project.subtitle}</Typography>
        <div className={classes.separator}></div>
        <Typography variant={'h4'}>{project.year}</Typography>
      </div>
    </div>
  );
};

export default ProjectComponent;
