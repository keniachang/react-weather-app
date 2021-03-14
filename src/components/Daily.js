import moment from 'moment';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { getSkycon } from '../utilities/GetSkycons';
import Skycons from 'react-skycons';

const Daily = ({ day }) => {
    const { unit, data, dataUnit } = useContext(GlobalContext);

    // const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const iconUrl = day.weather[0].icon;
    let dayTemp = Math.round(day.temp.day);
    let nightTemp = Math.round(day.temp.night);
    if (unit !== dataUnit) {
        if (dataUnit === 'metric') {
            // convert temperature from Celsius to Fahrenheit
            dayTemp = Math.round(dayTemp * (9 / 5) + 32);
            nightTemp = Math.round(nightTemp * (9 / 5) + 32);
        } else {
            // convert temperature from Fahrenheit to Celsius
            dayTemp = Math.round((dayTemp - 32) * (5 / 9));
            nightTemp = Math.round((nightTemp - 32) * (5 / 9));
        }
    }

    /*
    const day = moment.unix(1615604400).utc().utcOffset(-18000/3600).format('YYYY-MM-DD H');
    console.log(day);
    */

    const svgProps = {
        className: 'icon'
    };

    return (
        <tr>
            <td className='date'>
                {moment
                    .unix(day.dt)
                    .utc()
                    .utcOffset(data.timezone_offset / 3600)
                    .format('dddd')}
            </td>
            <td>
                {/* <img className='icon' src={iconUrl} alt='Icon' /> */}
                <Skycons
                    color='white'
                    type={getSkycon(iconUrl)}
                    animate={true}
                    size={80}
                    resizeClear={true}
                    {...svgProps}
                />
            </td>
            <td className='temperature'>{dayTemp}&#176;</td>
            <td className='temperature'>{nightTemp}&#176;</td>
        </tr>
    );
};

export default Daily;
