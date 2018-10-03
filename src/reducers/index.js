import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rooms from './rooms';
import roomsPage from './roomsPage';

export default combineReducers({
    routing: routerReducer,
    roomsPage,
    rooms,
});
