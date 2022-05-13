import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';
import imageTest1 from '../../assets/Projects/1-Zebra-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest2 from '../../assets/Projects/3-FIFA-2-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest3 from '../../assets/Projects/courchevel-night-1-1024x640.jpg';
import imageTest4 from '../../assets/Projects/Scalada-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest5 from '../../assets/Projects/LAX-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';

const useStyles = makeStyles((theme) => ({}));

const FeaturedProjectsComponent3 = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="content-all">
        <div className="content-carrousel">
          <figure>
            <img src={imageTest1} alt="project"></img>
          </figure>
          <figure>
            <img src={imageTest2} alt="project2"></img>
          </figure>
          <figure>
            <img src={imageTest3} alt="project3"></img>
          </figure>
          <figure>
            <img src={imageTest4} alt="project4"></img>
          </figure>
          <figure>
            <img src={imageTest5} alt="project5"></img>
          </figure>
          <figure>
            <img src={imageTest1} alt="project6"></img>
          </figure>
          <figure>
            <img src={imageTest2} alt="project7"></img>
          </figure>
          <figure>
            <img src={imageTest3} alt="project8"></img>
          </figure>
          <figure>
            <img src={imageTest4} alt="project9"></img>
          </figure>
          {/* <figure>
            <img src={imageTest5} alt="project10"></img>
          </figure> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsComponent3;
