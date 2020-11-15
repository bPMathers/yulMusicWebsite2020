import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SocialIconComponent from '../../assets/Team/MemberChoiceItemPhotos/Socials/SocialIconComponent';
import {
  instagram,
  linkedin,
} from '../../assets/Team/MemberChoiceItemPhotos/Socials/socialIconsSVG';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // height: '100%',
    padding: '5% 15px',
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

  return (
    <div className={classes.container}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant={'subtitle1'}>
          ARTISTIC DIRECTOR - COMPOSER
        </Typography>
        <Typography variant={'h2'} className={classes.name}>
          BENJAMIN PROULX MATHERS
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
    </div>
  );
};

export default MemberDetailBenjaminComponent;
