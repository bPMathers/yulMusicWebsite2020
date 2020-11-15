import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import benj from '../../assets/Team/MemberChoiceItemPhotos/Benjamin-Proulx-Mathers-7b.jpg';
import chris from '../../assets/Team/MemberChoiceItemPhotos/Christian-Lagueux-7b.jpg';
import danny from '../../assets/Team/MemberChoiceItemPhotos/Danny-Black-Background4.jpg';
import josh from '../../assets/Team/MemberChoiceItemPhotos/Josh9-578x867.jpg';
import { Typography } from '@material-ui/core';
import MemberPhotosComponent from './MemberPhotosComponent';
import MemberDetailComponent from './MemberDetailComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '90vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    border: '1px #fff solid',
  },
  leftColumn: {
    borderRight: '1px #fff solid',
    flex: 3,
  },
  rightColumn: {
    borderRight: '1px #fff solid',
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  memberDetails: {
    borderRight: '1px #fff solid',
    flex: 5,
  },
  memberChoice: {
    borderTop: '1px #fff solid',
    flex: 1.5,
    display: 'flex',
  },
  memberChoiceItem: {
    // marginRight: '15px',
    maxWidth: '120px',
    minWidth: '120px',
    borderRight: '1px #fff solid',
    flex: '1',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  memberChoiceItemText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 'inherit',
  },
}));

const TeamComponent = () => {
  const classes = useStyles();

  const [memberChoice, setMemberChoice] = useState(1);

  const handleMemberChoice = (memberId) => {
    setMemberChoice(memberId);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <MemberPhotosComponent memberId={memberChoice} />
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.memberDetails}>
          <MemberDetailComponent memberId={memberChoice} />
        </div>
        <div className={classes.memberChoice}>
          <div className={classes.memberChoiceItemText}>
            <Typography variant={'h2'}>THE YUL MUSIC TEAM</Typography>
          </div>
          <div
            className={classes.memberChoiceItem}
            style={{
              backgroundImage: `url(${benj})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              handleMemberChoice(1);
            }}
          ></div>
          <div
            className={classes.memberChoiceItem}
            style={{
              backgroundImage: `url(${chris})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              handleMemberChoice(2);
            }}
          ></div>
          <div
            className={classes.memberChoiceItem}
            style={{
              backgroundImage: `url(${danny})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              handleMemberChoice(3);
            }}
          ></div>
          <div
            className={classes.memberChoiceItem}
            style={{
              backgroundImage: `url(${josh})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              handleMemberChoice(4);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
