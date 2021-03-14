import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import Daily from './Daily';

const WeekWeather = () => {
    const { data } = useContext(GlobalContext);

    return (
        <div className='week-weather'>
            <table>
                <thead>
                    <tr className='daily-head'>
                        <th>Date</th>
                        <th>Icon</th>
                        <th>Day</th>
                        <th>Night</th>
                    </tr>
                </thead>
                <tbody>
                    {data.daily.slice(1).map((day) => (
                        <Daily key={day.dt} day={day} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeekWeather;
