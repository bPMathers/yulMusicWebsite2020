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
    minWidth: '1200px',
    minHeight: '90vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  leftColumn: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    flex: 3,
  },
  rightColumn: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  memberDetails: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    flex: 5,
  },
  memberChoice: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    flex: 1.5,
    display: 'flex',
  },
  memberChoiceItem: {
    maxWidth: '150px',
    minWidth: '150px',
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    flex: '1',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  memberChoiceItemFirst: {
    maxWidth: '150px',
    minWidth: '150px',
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
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
    marginLeft: '15px',
    marginRight: '15px',
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
        <MemberPhotosComponent key={memberChoice} memberId={memberChoice} />
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.memberDetails}>
          <MemberDetailComponent memberId={memberChoice} />
        </div>
        <div className={classes.memberChoice}>
          <div className={classes.memberChoiceItemText}>
            <Typography variant={'h3'}>THE YUL MUSIC TEAM</Typography>
          </div>
          <div
            className={classes.memberChoiceItemFirst}
            style={{
              backgroundImage: `url(${chris})`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              handleMemberChoice(1);
            }}
          ></div>
          <div
            className={classes.memberChoiceItem}
            style={{
              backgroundImage: `url(${benj})`,
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
