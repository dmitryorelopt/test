import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Header = styled.header`
    width: 100%;
    height: 80px;
    background: #c7c7c7;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <Navigation />
                </Header>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default App;
