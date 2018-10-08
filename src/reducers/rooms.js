import { ROOMS_FETCH_ALL_SUCCESS } from '../actions/rooms';
import {ROOMS_DATE_UPDATE} from '../services/SocketService';

const initialState = [];


export default function rooms(state = initialState, action) {
    switch (action.type) {
		    case ROOMS_FETCH_ALL_SUCCESS:
		    		const processedRoom = [];
				    action.payload.forEach(room => {
				    	  let newRoom = {...room, data: room.data.map(cell => ({number: cell, updated: false}))};
						    processedRoom.push(newRoom)
				    });
            return processedRoom;

        case ROOMS_DATE_UPDATE:
        		const nextState = [];
		        state.forEach(roomData => {
		            if (roomData.name === action.payload.room) {
		                const newData = action.payload.data;
				            const newRoom = {...roomData, data: [...roomData.data]};
				            if (newData.filter) {
						            for (let i = 0; i < newRoom.data.length; i++) {
								            const room = newRoom.data[i];
								            room.updated = false;

								            const dataForRoom = newData.filter(arr => arr[0] === i)[0];
								            if (dataForRoom) {
										            room.updated = room.number !== dataForRoom[1];
										            room.number = dataForRoom[1];
								            }
						            }
				            }
				            nextState.push(newRoom);
                } else {
				            nextState.push(roomData);
		            }
            });

            return nextState;

        default:
            return state;
    }
}
