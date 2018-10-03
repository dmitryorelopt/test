import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
    width: 1200px;
    max-width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
`;

const LinkContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const nav = [
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/rooms',
        label: 'Rooms',
    },
];

const Navigation = () => (
    <Wrapper>
        {nav.map(link => (
            <LinkContainer key={link.path}>
                <StyledLink to={link.path}>{link.label}</StyledLink>
            </LinkContainer>
        ))}
    </Wrapper>
);

export default Navigation;
