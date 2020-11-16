import React, { useState } from 'react';
import { makeStyles, Typography, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hoverContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: '0.8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    width: '100%',
    backgroundColor: '#000000',
    textDecoration: 'none',
  },
}));

const FeaturedProjectComponent = (props) => {
  const { image, href, title, description } = props;
  const classes = useStyles();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <a href={href} target='_blank' rel='noreferrer'>
        <img src={image} alt='1' height='400px' />
      </a>
      {isHovering && (
        <Zoom
          transitionDuration={'400ms'}
          in={isHovering}
          style={{ transitionTimingFunction: 'ease-in' }}
        >
          <a
            className={classes.hoverContainer}
            href={props.href}
            target='_blank'
            rel='noreferrer'
          >
            <Typography variant={'h3'}>{title}</Typography>
            <Typography variant={'h5'}>{description}</Typography>
          </a>
        </Zoom>
      )}
    </div>
  );
};

export default FeaturedProjectComponent;
