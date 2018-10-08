import { SocketService } from '../services/SocketService';
let socketService;

const SOCKET_SERVICE_INITIALIZED = 'SOCKET_SERVICE_INITIALIZED';
export function initSocketService() {
    return dispatch => {
        socketService = new SocketService(dispatch);
        dispatch({
            type: SOCKET_SERVICE_INITIALIZED,
        });
    };
}

const SOCKET_SERVICE_CLOSED = 'SOCKET_SERVICE_CLOSED';
export function closeSocketService() {
    return dispatch => {
        socketService.close();
        dispatch({
            type: SOCKET_SERVICE_CLOSED,
        });
    };
}

const SOCKET_SERVICE_SUBSCRIBE = 'SOCKET_SERVICE_SUBSCRIBE';
export function subscribe(roomName) {
    return dispatch => {
        socketService.subscribe(roomName);
        dispatch({
            type: SOCKET_SERVICE_SUBSCRIBE,
            payload: roomName,
        });
    };
}
