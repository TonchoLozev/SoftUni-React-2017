
export default (state, action) => {
    switch (action.type) {
        case 'INCREASE_NUMBER':
            return {...state, number: action.number};
        case 'DECREASE_NUMBER':
            return {...state, number: action.number};
        case 'CLEAR_NUMBER':
            return {...state, number: action.number};
        default:
            return state;
    }
};