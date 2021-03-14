import { SkyconsType } from 'react-skycons';

/* openweathermap icon id - skycons
01d/n - Skycons.CLEAR_DAY/NIGHT or 'clear-day/night'
02d/n - PARTLY_CLOUDY_DAY/NIGHT
03d/n & 04d/n - CLOUDY
09d/n & 10d/n & 11d/n - RAIN
13d/n - SNOW
50d/n - FOG
*/
export const getSkycon = (iconId) => {
    switch (iconId) {
        /*
        case '01d':
            return 'clear-day';
        case '01n':
            return 'clear-night';
        case '02d':
            return 'partly-cloudy-day';
        case '02n':
            return 'partly-cloudy-night';
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return 'cloudy';
        case '09d':
        case '09n':
        case '10d':
        case '10n':
        case '11d':
        case '11n':
            return 'rain';
        case '13d':
        case '13n':
            return 'snow';
        case '50d':
        case '50n':
            return 'fog';
        default:
            return iconId;
        */
        case '01d':
            return SkyconsType.CLEAR_DAY;
        case '01n':
            return SkyconsType.CLEAR_NIGHT;
        case '02d':
            return SkyconsType.PARTLY_CLOUDY_DAY;
        case '02n':
            return SkyconsType.PARTLY_CLOUDY_NIGHT;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return SkyconsType.CLOUDY;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
        case '11d':
        case '11n':
            return SkyconsType.RAIN;
        case '13d':
        case '13n':
            return SkyconsType.SNOW;
        case '50d':
        case '50n':
            return SkyconsType.FOG;
        default:
            return SkyconsType.WIND;
    }
};
