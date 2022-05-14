import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

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
    background: (props) => `url(${props?.project?.bgImg})`,
    backgroundSize: (props) => 'cover',

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
      opacity: 0.2,
      cursor: 'pointer',
    },
  },
  projectInfo: {},
  separator: {
    backgroundColor: theme.palette.common.red,
    height: '3px',
    width: '30px',
    margin: '10px 0',
  },
  container: {
    // width: '300px',
    // height: '450px',
    width: 'calc(100vw / 3 - 60px)',
    padding: '15px',
    // minWidth: '300px',
    minWidth: '300px',
    height: 'calc((100vw / 3) / 1.75)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    margin: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  hoverContainer: {
    padding: '15px',
    position: 'absolute',
    bottom: '30%',
    right: 0,
    opacity: '0.3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // height: '450px',
    height: 'calc((100vw / 3) / 1.75)',
    // width: '100%',
    minWidth: '300px',
    width: 'calc(100vw / 3 - 60px)',
    textDecoration: 'none',
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

const ProjectComponent3 = (props) => {
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
    <div className={classes.container}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        <div>
          <img
            className={isHovering ? classes.opacity : undefined}
            src={project.bgImg}
            alt="1"
            height="calc((100vw / 3) / 1.75)"
          />
        </div>
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
      {/* <div className={classes.projectInfo}>
          <Typography variant={'h4'}>{project.title}</Typography>
          <Typography>{project.subtitle}</Typography>
          <div className={classes.separator}></div>
          <Typography variant={'h4'}>{project.year}</Typography>
        </div> */}
    </div>
  );
};

export default ProjectComponent3;
