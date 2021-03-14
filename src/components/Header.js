import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
    const [zip, setZip] = useState('');

    const { unit, error, getWeather, getError } = useContext(
        GlobalContext
    );

    const onSubmit = (e) => {
        e.preventDefault();

        if (!zip) {
            getError('Please enter your zip code');
        } else {
            // get weather data
            getWeather(zip);

            setZip('');
        }
    };

    return (
        <header className='app-header'>
            <h1>
                Local Weather{' '}
                {unit === 'metric' ? (
                    <span>&#8451;</span>
                ) : (
                    <span>&#8457;</span>
                )}
            </h1>
            <div>
                {error ? <span className='alert'>{error}</span> : null}
            </div>
            <form onSubmit={onSubmit}>
                <input
                    className='zip-code'
                    type='text'
                    placeholder='Zip Code in USA'
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />
                <button type='submit'>Enter</button>
            </form>
        </header>
    );
};

export default Header;
