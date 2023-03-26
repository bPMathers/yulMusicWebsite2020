import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { projectsData } from './ProjectsData';
import ProjectDetailComponent from './ProjectDetailComponent';
import ProjectComponent2 from './ProjectComponent2';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.secondary.main,
    },
    projectsListContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    projectsList: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
}));

const ProjectsComponent = ({ projectsData }) => {
    const classes = useStyles();

    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(undefined);

    const handleOnDetailClose = () => {
        setDetailOpen(false);
    };

    const handleProjectClick = (projectId) => () => {
        const project = projectsData.find(
            (project) => project.id === projectId
        );
        setDetailOpen(true);
        setSelectedProject(project);
    };

    const handleNavigate = (direction) => {
        const currentProjectIndex = projectsData.findIndex(
            (project) => project.id === selectedProject.id
        );
        if (direction === 'left') {
            setDetailOpen(true);
            if (currentProjectIndex === 0) {
                setSelectedProject(projectsData[projectsData.length - 1]);
            } else {
                setSelectedProject(projectsData[currentProjectIndex - 1]);
            }
        } else if (direction === 'right') {
            if (currentProjectIndex === projectsData.length - 1) {
                setSelectedProject(projectsData[0]);
            } else {
                setSelectedProject(projectsData[currentProjectIndex + 1]);
            }
        }
    };

    const handleSelectItemFromList = (index) => {
        setSelectedProject(projectsData[index]);
    };

    return (
        <>
            <ProjectDetailComponent
                onClose={handleOnDetailClose}
                open={detailOpen}
                project={selectedProject}
                onNavigate={handleNavigate}
                onSelectItemFromList={handleSelectItemFromList}
                projectsData={projectsData}
            />
            <div className={classes.container} open={detailOpen}>
                <div className={classes.projectsListContainer}>
                    <div className={classes.projectsList}>
                        {projectsData
                            .filter((pr) => {
                                return [
                                    500, 498, 497, 495, 493, 471, 468, 459, 430,
                                ].includes(pr.id);
                            })
                            .map((project) => {
                                return (
                                    <div
                                        onClick={handleProjectClick(project.id)}
                                        key={project.id}
                                    >
                                        <ProjectComponent2 project={project} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsComponent;
