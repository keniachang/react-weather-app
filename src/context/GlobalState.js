import { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';
import { getRequestUrl, getOneCallRequestUrl } from './utilities/Helper';

import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// unit (metric - Celsius / imperial - Fahrenheit)
const initialState = {
    unit: 'metric',
    city: 'City',
    data: {
        timezone_offset: 0,
        hourly: [],
        daily: [
            {
                temp: {
                    day: ''
                },
                weather: [
                    {
                        main: '',
                        icon: ''
                    }
                ]
            }
        ]
    },
    dataUnit: '',
    error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function toggleUnit() {
        if (state.unit === 'metric') {
            dispatch({
                type: 'TOGGLE_UNIT',
                payload: 'imperial'
            });
        } else {
            dispatch({
                type: 'TOGGLE_UNIT',
                payload: 'metric'
            });
        }
    }

    async function getWeather(zip) {
        try {
            const resByZip = await axios.get(
                getRequestUrl(zip, state.unit, API_KEY)
            );

            const lat = resByZip.data.coord.lat;
            const lon = resByZip.data.coord.lon;
            const city = resByZip.data.name;

            const res = await axios.get(
                getOneCallRequestUrl(lat, lon, state.unit, API_KEY)
            );

            dispatch({
                type: 'GET_WEATHER',
                payload: { city, data: res.data }
            });
        } catch (err) {
            // getError(err.response);
            getError('Invalid');
        }
    }

    function getError(err) {
        dispatch({
            type: 'ERROR',
            payload: err
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                unit: state.unit,
                city: state.city,
                data: state.data,
                dataUnit: state.dataUnit,
                error: state.error,
                toggleUnit,
                getWeather,
                getError
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
