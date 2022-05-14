import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nathan5 from '../../assets/Nathan/viz_05.mp4';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const NathanComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <video
        src={nathan5}
        width={'400px'}
        autoPlay={true}
        loop={true}
        muted
        defaultMuted
        playsinline
      />
    </div>
  );
};

export default NathanComponent;
