import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  serviceDetailContainer: {
    width: '600px',
    height: '600px',
    animation: `$fadeSlide 1000ms ease-out`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px',
    backgroundColor: '#ff0000',
  },
  '@keyframes fadeSlide': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-50%) translateY(-50%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) translateY(0)',
    },
  },
}));

const ServiceDetailComponent = ({ service }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.serviceDetailContainer}>
        <div>{service.title}</div>
        <div>{service.description}</div>
      </div>
    </>
  );
};

export default ServiceDetailComponent;
