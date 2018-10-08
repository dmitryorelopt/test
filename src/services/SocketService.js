export const SOCKET_OPENED = 'SOCKET_OPENED';
export const SOCKET_CLOSED = 'SOCKET_CLOSED';
export const ROOMS_DATE_UPDATE = 'ROOMS_DATE_UPDATE';
export class SocketService {
    constructor(dispatch) {
        this.webSocket = new WebSocket('ws://localhost:1337');
        this.webSocket.onopen = () => {
            this.isActive = true;
		        dispatch({
				        type: SOCKET_OPENED
		        })
        };

        this.webSocket.onclose = () => {
            this.isActive = false;
		        dispatch({
				        type: SOCKET_CLOSED
		        })
        };

        this.webSocket.onmessage = event => {
            dispatch({
		            type: ROOMS_DATE_UPDATE,
		            payload: {
		            		room: this.subscribeRoom,
		            		data: JSON.parse(event.data)
		            }
            })
        };
    }

    subscribe(roomName) {
        if (!this.isActive) {
            throw new Error('Socket is close');
        }
        this.unsubscribe();
        this.webSocket.send(JSON.stringify({ type: 'SUBSCRIBE', room: roomName }));
        this.subscribeRoom = roomName;
    }

    unsubscribe() {
        if (!this.isActive) {
            throw new Error('Socket is close');
        }
        if (this.subscribeRoom) {
            this.webSocket.send(
                JSON.stringify({ type: 'UNSUBSCRIBE', room: this.subscribeRoom })
            );
        }
    }

    close() {
    		this.webSocket.close();
    }
}
