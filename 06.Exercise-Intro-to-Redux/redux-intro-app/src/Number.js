import React from 'react';

const Number = ({number}) =>{
    return(
        <div>
            <h1>Increment, decrement or clear to zero: <span>{number}</span></h1>
        </div>
    )
};

export default Number;