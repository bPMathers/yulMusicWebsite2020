import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        // width: '160px',
        // height: '240px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        display: 'flex',
        margin: '10px',
        '&:hover': {
            cursor: 'pointer',
        },
    },

    // hoverContainer: {
    //     position: 'absolute',
    //     bottom: '20%',
    //     right: 0,
    //     opacity: '0.3',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     height: '240px',
    //     width: '100%',
    //     textDecoration: 'none',
    // },
    opacity: {
        opacity: 0.2,
    },
    name: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 500,
    },
    role: {
        fontSize: '0.8em',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        marginTop: '3px',
        marginBottom: '10px',
        opacity: 0.8,
    },
}));

const TeamMemberComponentMobile = (props) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [memberPhotoDimensions, setMemberPhotoDimensions] = useState({
        width: (dimensions.width - 80) / 2,
        height: ((dimensions.width - 80) / 2) * 1.5,
    });

    console.log(dimensions);

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
    }, []);

    useEffect(() => {
        setMemberPhotoDimensions({
            memberPhotoWidth: (dimensions.width - 80) / 2,
            memberPhotoHeight: ((dimensions.width - 80) / 2) * 1.5,
        });
    }, [dimensions]);

    const { teamMember } = props;
    const classes = useStyles();

    const photoWidth = (dimensions.width - 80) / 2;

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className={classes.container}>
            <div
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // onTouchStart={handleMouseEnter}
                // onTouchEnd={handleMouseLeave}
                style={{ position: 'relative' }}
            >
                <div>
                    <img
                        className={isHovering ? classes.opacity : undefined}
                        src={teamMember.image}
                        alt="1"
                        height={memberPhotoDimensions.memberPhotoHeight}
                    />
                </div>
                {isHovering && (
                    <Fade
                        in={isHovering}
                        style={{ transitionTimingFunction: 'ease-in' }}
                    >
                        {/* <div
                            className={classes.hoverContainer}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography className={classes.name} variant={'h2'}>
                                {teamMember.name}
                            </Typography>
                            <div className={classes.separator}></div>
                            <Typography
                                className={classes.role}
                                variant={'subtitle1'}
                            >
                                {teamMember.role}
                            </Typography>
                        </div> */}
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default TeamMemberComponentMobile;
