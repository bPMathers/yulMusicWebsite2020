import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 'calc(100vw / 3 - 60px)',
    // probablu need to divide by 2 and then 1 on smaller screen sizes
    height: 'calc((100vw / 3) / 1.53)',
    backgroundColor: theme.palette.primary.main,
    background: (props) => `url(${props?.project?.bgImg})`,
    backgroundSize: (props) => 'cover',
    margin: '3px',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  hoverContainer: {
    backgroundColor: 'rgba(13, 13, 13, 0.85)',
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // probablu need to divide by 2 and then 1 on smaller screen sizes
    height: 'calc((100vw / 3) / 1.53)',
    minWidth: '300px',
    width: 'calc(100vw / 3 - 60px)',
    textDecoration: 'none',
  },
  background: {
    width: 'calc(100vw / 3 - 60px)',
    // probablu need to divide by 2 and then 1 on smaller screen sizes
    height: 'calc((100vw / 3) / 1.53)',

    backgroundColor: theme.palette.primary.main,
    background: (props) => `url(${props?.project?.bgImg})`,
    backgroundSize: (props) => 'cover',
  },
  separator: {
    backgroundColor: theme.palette.common.red,
    height: '3px',
    width: '30px',
    margin: '10px 0',
  },
  opacity: {
    opacity: 0.2,
  },
  title: {
    fontSize: '2em',
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 500,
  },
  subtitle: {
    fontSize: '0.8em',
    textAlign: 'center',
  },
}));

const ProjectComponent2 = (props) => {
  const { project } = props;
  const classes = useStyles(props);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className={classes.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        <div className={classes.background}></div>
        {isHovering && (
          <Fade in={isHovering} style={{ transitionTimingFunction: 'ease-in' }}>
            <div
              className={classes.hoverContainer}
              target="_blank"
              rel="noreferrer"
            >
              <Typography className={classes.title} variant={'h2'}>
                {project.title}
              </Typography>
              <div className={classes.separator}></div>
              <Typography className={classes.subtitle} variant={'subtitle1'}>
                {project.subtitle}
              </Typography>
            </div>
          </Fade>
        )}
      </div>
    </>
  );
};

export default ProjectComponent2;
