import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';
import imageTest1 from '../../assets/Projects/1-Zebra-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest2 from '../../assets/Projects/3-FIFA-2-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest3 from '../../assets/Projects/courchevel-night-1-1024x640.jpg';
import imageTest4 from '../../assets/Projects/Scalada-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest5 from '../../assets/Projects/LAX-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import AnimationStyles2 from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const useStyles = makeStyles((theme) => ({
  projectImg: {
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

const FeaturedProjectsComponent4 = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '150px',
      }}
    >
      <AutoplaySlider
        animation="cubeAnimation"
        cssModule={[CoreStyles, AnimationStyles2]}
        style={{ width: '60vw' }}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        bullets={false}
      >
        <div data-src={imageTest1} />
        <div data-src={imageTest2} />
        <div data-src={imageTest3} />
        <div data-src={imageTest4} />
        <div data-src={imageTest5} />
      </AutoplaySlider>
    </div>
  );
};

export default FeaturedProjectsComponent4;
