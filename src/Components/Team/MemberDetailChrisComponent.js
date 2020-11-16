import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useTheme, Fade } from '@material-ui/core';
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
    <Fade in={true} timeout={2000}>
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
          FOUNDER - COMPOSER
        </Typography>
        <Typography variant={'h2'} className={classes.name}>
          CHRISTIAN LAGUEUX
        </Typography>
        <Typography variant={'body2'} className={classes.bodyText}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
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
    </Fade>
  );
};

export default MemberDetailBenjaminComponent;
