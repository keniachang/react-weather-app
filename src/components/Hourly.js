import moment from 'moment';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { getSkycon } from '../utilities/GetSkycons';
import Skycons from 'react-skycons';

const Hourly = ({ hour }) => {
    const { unit, data, dataUnit } = useContext(GlobalContext);

    // const iconUrl = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
    const iconUrl = hour.weather[0].icon;
    let temperature = Math.round(hour.temp);
    if (unit !== dataUnit) {
        if (dataUnit === 'metric') {
            // convert temperature from Celsius to Fahrenheit
            temperature = Math.round(temperature * (9 / 5) + 32);
        } else {
            // convert temperature from Fahrenheit to Celsius
            temperature = Math.round((temperature - 32) * (5 / 9));
        }
    }

    // document.querySelectorAll('img').ondragstart = function () {
    //     return false;
    // };

    const svgProps = {
        className: 'icon',
        style: { margin: '10px 0' }
    };

    return (
        <div className='hourly'>
            <h2>
                {moment
                    .unix(hour.dt)
                    .utc()
                    .utcOffset(data.timezone_offset / 3600)
                    .format('H A')}
            </h2>
            <div>
                {/* <img
                    className='icon'
                    src={iconUrl}
                    alt='Icon'
                    draggable='false'
                /> */}
                <Skycons
                    color='white'
                    type={getSkycon(iconUrl)}
                    animate={true}
                    size={80}
                    resizeClear={true}
                    {...svgProps}
                />
            </div>
            <span className='temperature'>{temperature}&#176;</span>
        </div>
    );
};

export default Hourly;
