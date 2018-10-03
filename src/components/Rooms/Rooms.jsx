import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAllRooms } from '../../actions/rooms';
import Room from '../Room/Room';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Loader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Rooms extends Component {
    componentDidMount() {
        this.props.getAllRooms();
    }

    render() {
        const { loading, roomsList } = this.props;
        if (loading) {
            return <Loader>Loading...</Loader>;
        }
        return (
            <Wrapper>
                {roomsList.map(roomName => (
                    <Room name={roomName} key={roomName} />
                ))}
            </Wrapper>
        );
    }
}

export default connect(
    state => {
        return {
            ...state.roomsPage,
        };
    },
    {
        getAllRooms,
    }
)(Rooms);
