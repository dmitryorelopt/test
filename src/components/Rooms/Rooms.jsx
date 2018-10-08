import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAllRooms } from '../../actions/rooms';
import Room from '../Room/Room';
import { initSocketService, closeSocketService, subscribe } from '../../actions/socket';

const Wrapper = styled.div`
    width: 1200px;
    max-width: 100%;
    height: 100%;
    margin: auto;
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
        this.props.initSocketService();
        if (this.props.activeRoom && this.props.socketOpened) {
            this.props.subscribe(this.props.activeRoom);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.socketOpened &&
            (this.props.activeRoom !== nextProps.activeRoom ||
                this.props.socketOpened !== nextProps.socketOpened)
        ) {
            this.props.subscribe(nextProps.activeRoom);
        }
    }

    componentWillUnmount() {
        this.props.closeSocketService();
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
            socketOpened: state.socket.isOpen,
        };
    },
    {
        getAllRooms,
        initSocketService,
        closeSocketService,
        subscribe,
    }
)(Rooms);
