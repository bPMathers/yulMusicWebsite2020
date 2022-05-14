import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import ChrisPointFormComponent from './ChrisPointFormComponent';
import BenjPointFormComponent from './BenjPointFormComponent';
import DannyPointFormComponent from './DannyPointFormComponent';
import JoshPointFormComponent from './JoshPointFormComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    paddingTop: '30px',
    paddingBottom: '10px',
  },
  pointFormContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TeamMemberDetailComponent(props) {
  const { open, onClose } = props;
  const classes = useStyles();

  const [teamMemberDetail, setTeamMemberDetail] = useState(undefined);

  console.log('teamMemberDetail ---->', teamMemberDetail);

  useEffect(() => {
    setTeamMemberDetail(props.teamMemberDetail);
  }, [props.teamMemberDetail]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={classes.container}>
      <Dialog
        fullScreen
        fullWidth={true}
        open={open}
        TransitionComponent={Transition}
        className={classes.dialog}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {teamMemberDetail && (
          <div className={classes.imageContainer}>
            <img
              src={teamMemberDetail.image}
              width={'300px'}
              alt="Christian Lagueux"
            />
          </div>
        )}
        <div className={classes.pointFormContainer}>
          {teamMemberDetail?.id === 1 && <ChrisPointFormComponent />}
          {teamMemberDetail?.id === 2 && <BenjPointFormComponent />}
          {teamMemberDetail?.id === 3 && <DannyPointFormComponent />}
          {teamMemberDetail?.id === 4 && <JoshPointFormComponent />}
        </div>
      </Dialog>
    </div>
  );
}
