import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { getSkycon } from '../utilities/GetSkycons';
import Skycons from 'react-skycons';

const City = () => {
    const { unit, city, data, dataUnit, toggleUnit } = useContext(
        GlobalContext
    );

    let weather = '';
    let temperature = 'Temperature';
    let iconUrl = null;
    if (city !== 'City') {
        weather = data.daily[0].weather[0].main;
        temperature = Math.round(data.daily[0].temp.day);
        // iconUrl = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`;
        iconUrl = data.daily[0].weather[0].icon;

        if (unit !== dataUnit) {
            if (dataUnit === 'metric') {
                // convert temperature from Celsius to Fahrenheit
                temperature = Math.round(temperature * (9 / 5) + 32);
            } else {
                // convert temperature from Fahrenheit to Celsius
                temperature = Math.round((temperature - 32) * (5 / 9));
            }
        }
    }

    return (
        <section className='sub-header'>
            <div className='city-weather'>
                <h1>{city}</h1>
                <h2>Weather {city !== 'City' ? `(${weather})` : weather}</h2>
                <h1 className='temperature'>{temperature}&#176;</h1>
                {/* <span>
                    {data ? Math.floor(data.main.temp_min) : 'min'}
                </span>&nbsp;-&nbsp;<span>{data ? data.main.temp_max : 'max'}</span> */}
                <button onClick={toggleUnit}>Temp. Unit</button>
            </div>
            <div className='weather-icon'>
                {/* open weather map api icon */}
                {/* {iconUrl ? (
                    <img
                        className='icon'
                        src={iconUrl}
                        alt='weather icon'
                        // style={{animation: 'moving 4s ease-in-out infinite'}}
                    />
                ) : (
                    <h2>Icon</h2>
                )} */}

                {/* skycons */}
                {iconUrl ? (
                    <Skycons
                        color='white'
                        type={getSkycon(iconUrl)}
                        animate={true}
                        size={100}
                        resizeClear={true}
                    />
                ) : (
                    <h2>Icon</h2>
                )}
            </div>
        </section>
    );
};

export default City;
