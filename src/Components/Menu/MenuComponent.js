import React, { useEffect, useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  menuList: {
    width: '105vw',
    height: '105vh',
    // backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '-45px',
    top: '-10px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },
  menuButton: {
    color: theme.palette.secondary.main,
    position: 'fixed',
    right: '10px',
    top: '10px',
    // zIndex: '999',
  },
  closeButton: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    right: '0px',
    top: '10px',
  },
}));

export default function MenuComponent(props) {
  let location = useLocation();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#484A47');
  const anchorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      renderBgColor(location.pathname);
    }, 500);
  }, [location.pathname]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const renderBgColor = (pathname) => {
    switch (pathname) {
      case '/projects':
        setBgColor('#e0ac9d');
        break;
      case '/services':
        setBgColor('#5C6D70');
        break;
      case '/contact':
        setBgColor('#A37774');
        break;

      default:
        setBgColor('#484A47');
        break;
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div style={{ position: 'relative', zIndex: 100 }}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        className={classes.menuButton}
      >
        <MenuIcon style={{ fontSize: '3em' }} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={'top'}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'center',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                  className={classes.menuList}
                  style={{
                    backgroundColor: bgColor,
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className={classes.closeButton}
                  >
                    <CloseIcon style={{ fontSize: '3em' }} />
                  </MenuItem>
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      <Typography variant={'h2'}>Home</Typography>
                    </MenuItem>
                  </Link>
                  <Link to='/projects' style={{ textDecoration: 'none' }}>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      <Typography variant={'h2'}>Projects</Typography>
                    </MenuItem>
                  </Link>
                  <Link to='/services' style={{ textDecoration: 'none' }}>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      <Typography variant={'h2'}>Services</Typography>
                    </MenuItem>
                  </Link>
                  <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      <Typography variant={'h2'}>Contact</Typography>
                    </MenuItem>
                  </Link>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}