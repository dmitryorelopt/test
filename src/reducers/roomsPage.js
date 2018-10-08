import {
		ROOMS_FETCH_ALL_ERROR,
		ROOMS_FETCH_ALL_REQUEST,
		ROOMS_FETCH_ALL_SUCCESS, ROOMS_SET_ACTIVE,
} from '../actions/rooms';

const initialState = {
    loading: false,
    roomsList: [],
    activeRoom: ''
};

export default function roomsPage(state = initialState, action) {
    switch (action.type) {
        case ROOMS_FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ROOMS_FETCH_ALL_SUCCESS:
            const roomsList = action.payload.map(room => room.name);
            return {
                ...state,
				        roomsList,
		            activeRoom: roomsList[0] || '',
                loading: false,
            };

        case ROOMS_FETCH_ALL_ERROR:
            return {
                ...state,
                loading: false,
            };

        case ROOMS_SET_ACTIVE:
            return {
                ...state,
		            activeRoom: action.payload
            };

        default:
            return state;
    }
}
