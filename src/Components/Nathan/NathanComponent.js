import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nathan5 from '../../assets/Nathan/viz_05.mp4';
import ReactPlayer from 'react-player';

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

  const [playing, setPlaying] = useState(true);

  const handleBufferEnd = () => {
    setPlaying(true);
  };

  return (
    <div className={classes.container}>
      {/* <img src={nathan3} width="400px" /> */}
      {/* <img src={nathan5} width="400px" /> */}
      <ReactPlayer
        url={nathan5}
        cconfig={{
          file: {
            attributes: { preload: 'auto' },
            forceAudio: true,
          },
        }}
        controls={true}
        onBufferEnd={handleBufferEnd}
        playing={playing}
        loop={true}
      />
    </div>
  );
};

export default NathanComponent;
