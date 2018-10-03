import { createSelector } from 'reselect';

export const roomComponentSelector = createSelector(
    [state => state.rooms, (state, props) => props.name],
    (rooms, roomName) => rooms.filter(room => room.name === roomName)[0]
);
