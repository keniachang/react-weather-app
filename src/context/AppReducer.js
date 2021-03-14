export const appReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_UNIT':
            return {
                ...state,
                unit: action.payload
            };
        case 'GET_WEATHER':
            return {
                ...state,
                city: action.payload.city,
                data: action.payload.data,
                dataUnit: state.unit,
                error: null
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
