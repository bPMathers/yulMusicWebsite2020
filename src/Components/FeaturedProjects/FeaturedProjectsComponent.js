import { Carousel } from './CarouselComponent';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import imageTest1 from '../../assets/Projects/1-Zebra-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest2 from '../../assets/Projects/3-FIFA-2-BAKU-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest3 from '../../assets/Projects/courchevel-night-1-1024x640.jpg';
import imageTest4 from '../../assets/Projects/Scalada-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import imageTest5 from '../../assets/Projects/LAX-Benjamin-Proulx-Mathers-Christian-Lagueux-YUL-MUSIC-Montreal-Composer.jpg';
import FeaturedProjectComponent from './FeaturedProjectComponent';

// let featuredProjectsSlides = [
//   <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
//     <img src={imageTest5} alt='1' height='400px' />
//   </a>,
//   <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
//     <img src={imageTest1} alt='1' height='400px' />
//   </a>,
//   <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
//     <img src={imageTest2} alt='1' height='400px' />
//   </a>,
//   <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
//     <img src={imageTest3} alt='1' height='400px' />
//   </a>,
//   <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
//     <img src={imageTest4} alt='1' height='400px' />
//   </a>,
// ];

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    marginTop: '40px',
    marginBottom: '10px',
    minWidth: '1200px',
    height: '450px',
  },
}));

let featuredProjectsSlides = [
  <FeaturedProjectComponent
    href={'https://www.google.com/'}
    image={imageTest5}
    title={'PROJECT 5 TITLE'}
    description={'A Nice & Short Description of the Project'}
  />,
  <FeaturedProjectComponent
    href={'https://www.google.com/'}
    image={imageTest1}
    title={'PROJECT 1 TITLE'}
    description={'A Nice & Short Description of the Project'}
  />,
  <FeaturedProjectComponent
    href={'https://www.google.com/'}
    image={imageTest2}
    title={'PROJECT 2 TITLE'}
    description={'A Nice & Short Description of the Project'}
  />,
  <FeaturedProjectComponent
    href={'https://www.google.com/'}
    image={imageTest3}
    title={'PROJECT 3 TITLE'}
    description={'A Nice & Short Description of the Project'}
  />,
  <FeaturedProjectComponent
    href={'https://www.google.com/'}
    image={imageTest4}
    title={'PROJECT 4 TITLE'}
    description={'A Nice & Short Description of the Project'}
  />,
];

const FeaturedProjectsComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.carouselContainer}>
        <Carousel
          slides={featuredProjectsSlides}
          autoplay={false}
          interval={3000}
        />
      </div>
    </>
  );
};

export default FeaturedProjectsComponent;
