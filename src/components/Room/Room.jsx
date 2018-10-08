import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import is from 'styled-is';

import { setActiveRoom } from '../../actions/rooms';

const CELL_WIDTH = 45;
const CELL_HEIGHT = 37;

const Wrapper = styled.div`
    margin: 20px;
    cursor: pointer;
    opacity: 0.3;

    ${is('isActive')`
        opacity: 1;
        cursor: default;
    `};
`;

const RoomHeader = styled.div`
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

const RoomBody = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Cell = styled.div`
    width: ${CELL_WIDTH}px;
    height: ${CELL_HEIGHT}px;
    outline: 1px solid #999999;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 2s linear;

    ${is('updated')`
        background-color: #666666;
        transition: none;
    `};
`;

class Room extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    setActiveRoom = e => {
        e.stopPropagation();
        if (!this.props.isActive) {
            this.props.setActiveRoom(this.props.name);
        }
    };

    render() {
        const { name, width, height, data, isActive, className } = this.props;
        return (
            <Wrapper className={className} isActive={isActive} onClick={this.setActiveRoom}>
                <RoomHeader>{name}</RoomHeader>
                <RoomBody width={CELL_WIDTH * width} height={CELL_HEIGHT * height}>
                    {data.map((cell, index) => (
                        <Cell key={index} updated={isActive && cell.updated}>
                            {cell.number}
                        </Cell>
                    ))}
                </RoomBody>
            </Wrapper>
        );
    }
}

export default connect(
    (state, props) => {
        const roomName = props.name;
        return {
            ...state.rooms.filter(room => room.name === roomName)[0],
            isActive: state.roomsPage.activeRoom === props.name,
        };
    },
    {
        setActiveRoom,
    }
)(Room);
