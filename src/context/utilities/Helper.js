export const getRequestUrl = (zip, unit, id) => {
    // current weather
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=${unit}&appid=${id}`;
};

export const getOneCallRequestUrl = (lat, lon, unit, id) => {
    // one call api
    // hourly forcast for 48 hours (starting hour is this hour / when the call is made)
    // daily forcast for 7 days (starting date is today)
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=${unit}&appid=${id}`;
};
