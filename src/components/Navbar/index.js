import React from 'react';
import {
    Nav,
    NavLink,
    NavbarContainer,
    Span,
    NavLogo,
    NavItems,
    GitHubButton,
    ButtonContainer,
    MobileIcon,
    MobileMenu,
    MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { Switch } from '@mui/material';
import { Button } from '@mui/material'; // Import Switch from Material UI or use any other library

const Navbar = ({ darkMode, setDarkMode }) => {
    // Receive darkMode and setDarkMode as props
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <a
                        href="#about"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20;',
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        <DiCssdeck size="3rem" />{' '}
                        <Span style={{ fontSize: '1.5rem' }}>Prabhas</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    {' '}
                    <Button
                        onClick={() => setDarkMode(!darkMode)}
                        style={{
                            color: darkMode ? 'White' : 'black',
                        }}
                    >
                        {darkMode ? (
                            <CiLight size="1.75rem" />
                        ) : (
                            <CiDark size="1.75rem" />
                        )}
                    </Button>
                </MobileIcon>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        style={{
                            marginTop: '0.5rem',
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>

                <ButtonContainer>
                    <GitHubButton href={Bio.github} target="_blank">
                        Github Profile
                    </GitHubButton>
                    {/* Add the theme switcher */}
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        color="default"
                        inputProps={{ 'aria-label': 'theme switcher' }}
                    />
                </ButtonContainer>

                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href="#about"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            href="#skills"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Skills
                        </MobileLink>
                        <MobileLink
                            href="#projects"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            href="#education"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Education
                        </MobileLink>
                        <GitHubButton
                            style={{
                                padding: '10px 16px',
                                background: `${theme.primary}`,
                                color: 'white',
                                width: 'max-content',
                            }}
                            href={Bio.github}
                            target="_blank"
                        >
                            Github Profile
                        </GitHubButton>
                    </MobileMenu>
                )}
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
