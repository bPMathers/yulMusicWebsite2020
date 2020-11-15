import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useTheme } from '@material-ui/core';
import SocialIconComponent from './SocialIconComponent';
import {
  instagram,
  linkedin,
} from '../../assets/Team/MemberChoiceItemPhotos/Socials/socialIconsSVG';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80%',
    padding: '35px 15px',
  },
  name: {
    color: theme.palette.common.red,
    marginBottom: '40px',
    letterSpacing: '4px',
    // fontWeight: 300,
  },
  bodyText: {
    marginBottom: '40px',
    lineHeight: 1.66,
  },
  logosRow: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const MemberDetailBenjaminComponent = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <Typography
        variant={'subtitle1'}
        style={{
          backgroundColor: theme.palette.secondary.main,
          width: 'max-content',
          padding: '3px 10px',
          lineHeight: 1.25,
          marginBottom: '8px',
          borderRadius: '5px',
        }}
      >
        PARNTER - STUDIO C / THE STEAKHOUSE STUDIO
      </Typography>
      <Typography variant={'h2'} className={classes.name}>
        JOSHUA EAGAN
      </Typography>
      <Typography variant={'body2'} className={classes.bodyText}>
        Joshua Seth Eagan is a Studio Musician in Los Angeles and has been part
        of The Steakhouse Studio in North Hollywood for over 24 years now. His
        "Studio C" musical facility is located on the top floor of The
        Steakhouse. "Studio C" is where Joshua now produces many new artists and
        worked on Grammy Award winning records.
      </Typography>
      <Typography variant={'body2'} className={classes.bodyText}>
        Over the years Joshua has recorded / performed on sessions with Pink,
        Candyman, Tim Armstrong, Sky Sweetnam, David Paich, Bernard Fowler,
        Daniel de los Reyes, Walfredo Reyes Jr, Jimmy Haslip, Alphonso Johnson,
        Neil Stubenhaus, Michael Landau, Bobby Watson, Sal Marquez, Kristine W,
        Bobby Kimball, Jean-Michel Byron, Masami Okui, Steve Lukather, Billy
        Sheehan, James Baker & Lonnie Jordan of (WAR), Andy Vargas of (Santana),
        Michael Sanders & One Tribe Nation and Jeff Millar-Sax. Additionally,
        Joshua has performed on various soundtracks, movies and television
        shows.
      </Typography>
      <div className={classes.logosRow}>
        <a
          href='https://www.linkedin.com/in/benjamin-proulx-mathers-346754114/'
          target='_blank'
          rel='noreferrer'
        >
          <SocialIconComponent width={35}>{linkedin}</SocialIconComponent>
        </a>
        <a
          href='https://www.instagram.com/denreeee/'
          target='_blank'
          rel='noreferrer'
        >
          <SocialIconComponent width={30}>{instagram}</SocialIconComponent>
        </a>
      </div>
    </div>
  );
};

export default MemberDetailBenjaminComponent;
