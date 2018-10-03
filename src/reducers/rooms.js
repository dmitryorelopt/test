import { ROOMS_FETCH_ALL_SUCCESS } from '../actions/rooms';

const initialState = [];

export default function rooms(state = initialState, action) {
    switch (action.type) {
        case ROOMS_FETCH_ALL_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
