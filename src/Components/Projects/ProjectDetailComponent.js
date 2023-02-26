import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Slide from '@material-ui/core/Slide';
import { DialogContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: theme.palette.primary.main,
    },
    dialogContent: {
        backgroundColor: theme.palette.primary.main,
        padding: '0px 0px 100px 0px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dialogContentRoot: {
        '&:first-child': {
            paddingTop: '0px',
        },
    },
    projectDetailContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
    },
    appBar: {
        position: 'relative',
    },
    containerToBeRenamed: {
        marginLeft: '40px',
        marginTop: '40px',
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    listContainer: {
        minWidth: '300px', //this is temp
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '3px',
        fontWeight: 500,
    },
    subtitle: {
        padding: '0px 2em',
        fontSize: '1.2em',
        textAlign: 'center',
        width: '80%',
        marginBottom: '10px',
        fontWeight: 500,
    },
    categoriesText: {
        padding: '0px 2em',
        fontSize: '1.0em',
        marginBottom: '20px',
        width: '80%',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: theme.palette.common.red,
        height: '3px',
        width: '30px',
        margin: '10px 0',
    },
    separator2: {
        backgroundColor: theme.palette.secondary.main,
        height: '0.5px',
        width: '80%',
        marginBottom: '10px',
    },
    detailMediaContainer: {
        width: '721px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    detailMediaItem: {
        width: '100%',
        marginBottom: '10px',
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
                <DialogContent
                    className={classes.dialogContent}
                    classes={{ root: classes.dialogContentRoot }}
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
                    <div className={classes.containerToBeRenamed}>
                        <div className={classes.listContainer}>salut</div>

                        {projectDetail && (
                            <div className={classes.projectDetailContent}>
                                <Typography
                                    className={classes.title}
                                    variant={'h2'}
                                >
                                    {projectDetail.title}
                                </Typography>
                                <div className={classes.separator}></div>
                                <Typography
                                    className={classes.subtitle}
                                    variant={'subtitle2'}
                                >
                                    {projectDetail.detailedSubtitle ??
                                        projectDetail.subtitle}
                                </Typography>
                                <div className={classes.separator2}></div>
                                <Typography
                                    className={classes.categoriesText}
                                    variant={'subtitle2'}
                                >
                                    {projectDetail.categoriesText}
                                </Typography>
                                <div className={classes.detailMediaContainer}>
                                    <img
                                        src={projectDetail.bgImg}
                                        className={classes.detailMediaItem}
                                        alt="Project"
                                    />
                                    {projectDetail.extraMedia &&
                                        projectDetail.extraMedia.map(
                                            (media, index) => {
                                                if (media.type === 'img') {
                                                    return (
                                                        <img
                                                            src={media.data}
                                                            className={
                                                                classes.detailMediaItem
                                                            }
                                                            alt="media item"
                                                            key={index}
                                                        />
                                                    );
                                                } else if (
                                                    media.type === 'video'
                                                ) {
                                                    return (
                                                        <>
                                                            <iframe
                                                                title={index}
                                                                key={index}
                                                                src="https://player.vimeo.com/video/157210250"
                                                                width="723"
                                                                height="407"
                                                                frameBorder="0"
                                                                webkitallowfullscreen={
                                                                    'true'
                                                                }
                                                                mozallowfullscreen={
                                                                    'true'
                                                                }
                                                                allowFullScreen={
                                                                    true
                                                                }
                                                            ></iframe>
                                                        </>
                                                    );
                                                } else return <></>;
                                            }
                                        )}
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
