
/*jshint esversion: 6 */

import axios from 'axios';

const API_KEY = 'a312489b8212ab18fbd500059dc4f0f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},ar`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request.catch( error => error )
    };

}