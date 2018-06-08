const decNumber = (curNum) =>({type: 'DECREASE_NUMBER', number: --curNum});
const incNumber = (curNum) =>({type: 'INCREASE_NUMBER', number: ++curNum});
const clearNumber = () =>({type: 'CLEAR_NUMBER', number: 0});

export default {decNumber, incNumber, clearNumber};