import React from 'react';
import { useState } from 'react';
import {
    Container,
    Wrapper,
    Title,
    Desc,
    CardContainer,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. I have developed
                    different static and Dyanamic websites. Here are some of my
                    projects.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === 'all' ? (
                        <ToggleButton
                            active
                            value="all"
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="all"
                            onClick={() => setToggle('all')}
                        >
                            All
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'react' ? (
                        <ToggleButton
                            active
                            value="react"
                            onClick={() => setToggle('react')}
                        >
                            React Apps
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="react"
                            onClick={() => setToggle('react')}
                        >
                            React Apps
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'Fullstack' ? (
                        <ToggleButton
                            active
                            value="Fullstack"
                            onClick={() => setToggle('Fullstack')}
                        >
                            Fullstack Application
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="Fullstack"
                            onClick={() => setToggle('Fullstack')}
                        >
                            Fullstack Application
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === 'Dynamic' ? (
                        <ToggleButton
                            active
                            value="Dynamic"
                            onClick={() => setToggle('Dynamic')}
                        >
                            Dynamic
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="Dynamic"
                            onClick={() => setToggle('Dynamic')}
                        >
                            Dynamic
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' &&
                        projects.map((project) => (
                            <ProjectCard
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
