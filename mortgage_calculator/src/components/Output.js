import React from 'react';

const Output = ({maxValue}) => {
    return(
        <div class="output">
            <h3>The maximum amount you can borrow is... </h3>
            <div class="max-value">£{maxValue.toLocaleString()}</div>
        </div>
    )
};

export default Output;