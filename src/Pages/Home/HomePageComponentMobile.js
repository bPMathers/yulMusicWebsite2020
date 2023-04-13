import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import ProjectsComponent from '../../Components/Projects/ProjectsComponent';
import NathanComponent from '../../Components/Nathan/NathanComponent';
import CreativeCollaboratorsComponent from '../../Components/CC/CreativeCollaboratorsComponent';
import NathanComponent2 from '../../Components/Contact/ContactComponent';
import ContactComponent from '../../Components/Contact/ContactComponent';
import { projectsData } from '../../Components/Projects/ProjectsData';
import NathanComponentMobile from '../../Components/Nathan/NathanComponentMobile';
import TeamComponentMobile from '../../Components/Team/TeamComponentMobile';
import ProjectsComponentMobile from '../../Components/Projects/ProjectsComponentMobile';

const useStyles = makeStyles((theme) => ({
    container: {
        // maxWidth: '370px',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '60px',
    },
    mobileTitleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '20px',
    },
    mobileTitle: {
        // width: '100%',
        marginLeft: '15px',
        color: theme.palette.common.gold,
        // padding: '15px',
        textAlign: 'center',
        letterSpacing: '10px',
        textShadow: '#6e5e08 1px 0 10px',
        fontWeight: 400,
        fontSize: 50,
    },
    mobileSubtitle: {
        lineHeight: 1.25,
        // padding: '15px',
        marginLeft: '15px',
        letterSpacing: '9px',
        fontSize: 12,
        textAlign: 'center',
    },
}));

const HomePageComponentMobile = () => {
    const classes = useStyles();
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('isMobile ---->', isMobile);

    return (
        <div className={classes.container}>
            <div className={classes.mobileTitleSection}>
                <Typography className={classes.mobileTitle} variant={'h1'}>
                    YUL MUSIC
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    className={classes.mobileSubtitle}
                >
                    HEARTS AND SPIRIT FROM MONTRÉAL
                </Typography>
            </div>
            <NathanComponentMobile />
            <div id="teamSection" className={classes.teamSection}>
                <TeamComponentMobile />
            </div>
            <div id="projectsSection" className={classes.projectsSection}>
                <ProjectsComponentMobile projectsData={projectsData} />
            </div>
        </div>
    );
};

export default HomePageComponentMobile;
