import { RoomsServices } from '../services/RoomsServices';

export const ROOMS_FETCH_ALL_REQUEST = 'ROOMS_FETCH_ALL_REQUEST';
export const ROOMS_FETCH_ALL_SUCCESS = 'ROOMS_FETCH_ALL_SUCCESS';
export const ROOMS_FETCH_ALL_ERROR = 'ROOMS_FETCH_ALL_ERROR';
export function getAllRooms() {
    return dispatch => {
        dispatch({
            type: ROOMS_FETCH_ALL_REQUEST,
        });
        RoomsServices.getAllRooms()
            .then(response => {
                dispatch({
                    type: ROOMS_FETCH_ALL_SUCCESS,
                    payload: response,
                });
            })
            .catch(error => {
                dispatch({
                    type: ROOMS_FETCH_ALL_ERROR,
                    error,
                });
            });
    };
}

export const ROOMS_SET_ACTIVE = 'ROOMS_SET_ACTIVE';
export function setActiveRoom(roomName) {
    return dispatch => {
		    dispatch({
				    type: ROOMS_SET_ACTIVE,
            payload: roomName
		    });
    }
}
