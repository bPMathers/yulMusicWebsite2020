import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
  const { open, onClose } = props;
  const classes = useStyles();

  const [project, setProject] = useState(undefined);

  useEffect(() => {
    setProject(props.project);
  }, [props.project]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary">
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        {project && <div>{JSON.stringify(project)}</div>}
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
      </Dialog>
    </div>
  );
}
