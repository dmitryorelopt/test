import {SOCKET_OPENED, SOCKET_CLOSED} from '../services/SocketService';

const initialState = {
		isOpen: false
};

export default function socket(state = initialState, action) {
		switch (action.type) {
				case SOCKET_OPENED:
						return {
								...state,
								isOpen: true
						};
				case SOCKET_CLOSED:
						return {
								...state,
								isOpen: false
						};

				default:
						return state;
		}
}
