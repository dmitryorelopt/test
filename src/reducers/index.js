import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rooms from './rooms';
import roomsPage from './roomsPage';
import socket from './socket';

export default combineReducers({
    routing: routerReducer,
    roomsPage,
    rooms,
    socket,
});
