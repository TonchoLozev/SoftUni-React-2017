import React from 'react';
import store from './store/index'
import buttonActions from './actions/index'

function dispatchBtnAction(event) {
    const btn = event.target.dataset.btn;
    const currentNumber = store.getState().number;

    if (btn === ('+')) {
        store.dispatch(buttonActions.incNumber(currentNumber));
    } else if (btn === '-') {
        store.dispatch(buttonActions.decNumber(currentNumber));
    } else if (btn === 'clear') {
        store.dispatch(buttonActions.clearNumber(currentNumber));
    }

}

const Buttons = ({buttonsType}) => {
    return (
        <div>
            {buttonsType.map((bt, i) => (
                <button
                    data-btn={bt}
                    key={`btn-${i}`}
                    onClick={dispatchBtnAction}
                >
                    {bt}
                </button>
            ))}
        </div>
    )
};

export default Buttons;