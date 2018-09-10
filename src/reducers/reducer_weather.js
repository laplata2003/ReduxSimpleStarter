
/*jshint esversion: 6 */

import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:

            console.log("action: ", action.payload.request.status);

            if (action.payload.request.status === 404) {
                console.log("saliendo ...");

                return state;
            }

            const cityIds = state.map(cityData => cityData.city.id);
            const targetCityId = action.payload.data.city.id;
            
            return cityIds.includes(targetCityId)? state: [ action.payload.data, ...state ]; 
    }
    
    return state;
} 