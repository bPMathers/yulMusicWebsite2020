import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetailComponent(props) {
  const { open, onClose, onNavigate } = props;
  const classes = useStyles();

  const [projectDetail, setProjectDetail] = useState(undefined);

  useEffect(() => {
    setProjectDetail(props.project);
  }, [props.project]);

  const handleClose = () => {
    onClose();
  };

  const handleNavigate = (direction) => () => {
    onNavigate(direction);
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
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleNavigate('left')}
              aria-label="Navigate Left"
            >
              <ArrowLeft />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleNavigate('right')}
              aria-label="Navigate Right"
            >
              <ArrowRight />
            </IconButton>
          </Toolbar>
        </AppBar>
        {projectDetail && (
          <div className={classes.imageContainer}>
            <img src={projectDetail.bgImg} width={'300px'} alt="Project" />
          </div>
        )}
        <div className={classes.pointFormContainer}>
          Project Info and media will go here
          {/* {teamMemberDetail?.id === 1 && <ChrisPointFormComponent />}
          {teamMemberDetail?.id === 2 && <BenjPointFormComponent />}
          {teamMemberDetail?.id === 3 && <DannyPointFormComponent />}
          {teamMemberDetail?.id === 4 && <JoshPointFormComponent />} */}
        </div>
      </Dialog>
    </div>
  );
}
