import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = styled.input`
    position: relative;
    width: 40px;
    height: 20px;
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.text_secondary};
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:checked {
        background-color: ${({ theme }) => theme.primary};
    }

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: ${({ theme }) => theme.bg};
        border-radius: 50%;
        transition: transform 0.3s;
    }

    &:checked:before {
        transform: translateX(20px);
    }
`;

const ThemeSwitcher = ({ darkMode, setDarkMode }) => {
    return (
        <label>
            <ToggleSwitch
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
        </label>
    );
};

export default ThemeSwitcher;
