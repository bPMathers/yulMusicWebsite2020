import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nathan5 from '../../assets/Nathan/viz_05.mp4';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '30px',
    // width: '100vw',
  },
}));

const NathanComponent = () => {
  const classes = useStyles();

  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.volume = 0;
    vidRef.current.play();
  }, []);

  return (
    <div className={classes.container}>
      <video
        ref={vidRef}
        src={nathan5}
        width={'400px'}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};

export default NathanComponent;
