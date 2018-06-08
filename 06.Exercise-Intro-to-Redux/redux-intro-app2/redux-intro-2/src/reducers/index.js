export default (state, action) => {
    switch (action.type) {
        case 'ADD_INPUT':
            return {...state, inputFields: action.inputFields, inputFieldsHtml: action.inputFieldsHtml};
        case 'DELETE_INPUT':
            return {...state, inputFields: action.inputFields, inputFieldsHtml: action.inputFieldsHtml};
        default:
            return state;
    }
};