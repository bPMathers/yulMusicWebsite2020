import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nathan5 from '../../assets/Nathan/viz_05.mp4';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
}));

const NathanComponentMobile = () => {
    const classes = useStyles();

    useEffect(() => {
        // document.querySelector('#nathanVideo1').playbackRate = 1;
        document.querySelector('#nathanVideo1').play();
    }, []);

    // const playVid = () => document.querySelector('#nathanVideo1').play();

    return (
        <div className={classes.container}>
            <div
                className={classes.content}
                // onClick={() => playVid()}
            >
                <video
                    id="nathanVideo1"
                    src={nathan5}
                    width={'320px'}
                    autoPlay={true}
                    loop={true}
                    muted
                    playsInline
                    style={{
                        filter: 'hue-rotate(42deg)',
                    }}
                />
                <Typography
                    variant="h5"
                    style={{
                        color: 'white',
                        fontSize: '12px',
                    }}
                >
                    Touch Designer: Nathan Roy
                </Typography>
            </div>
        </div>
    );
};

export default NathanComponentMobile;
