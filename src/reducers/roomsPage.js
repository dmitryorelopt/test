import {
    ROOMS_FETCH_ALL_ERROR,
    ROOMS_FETCH_ALL_REQUEST,
    ROOMS_FETCH_ALL_SUCCESS,
} from '../actions/rooms';

const initialState = {
    loading: false,
    roomsList: [],
};

export default function roomsPage(state = initialState, action) {
    switch (action.type) {
        case ROOMS_FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ROOMS_FETCH_ALL_SUCCESS:
            return {
                ...state,
                roomsList: action.payload.map(room => room.name),
                loading: false,
            };

        case ROOMS_FETCH_ALL_ERROR:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
}
