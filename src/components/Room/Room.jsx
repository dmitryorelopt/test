import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { roomComponentSelector } from '../../selectors/rooms';

const CELL_WIDTH = 45;
const CELL_HEIGHT = 37;

const Wrapper = styled.div`
    margin: 20px;
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
`;

class Room extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
    };

    render() {
        const { name, width, height, data, className } = this.props;
        return (
            <Wrapper className={className}>
                <RoomHeader>{name}</RoomHeader>
                <RoomBody
                    width={CELL_WIDTH * width}
                    height={CELL_HEIGHT * height}
                    data-tooltip="test sdfsdfsdf"
                >
                    {data.map((cell, index) => (
                        <Cell key={index}>{cell}</Cell>
                    ))}
                </RoomBody>
            </Wrapper>
        );
    }
}

export default connect(roomComponentSelector)(Room);
