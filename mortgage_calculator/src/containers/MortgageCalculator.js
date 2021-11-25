import React, { useState } from 'react';
import CalculatorForm from '../components/CalculatorForm';
import Output from '../components/Output';

const MortgageCalculator = () => {

    const [maxValue, setMaxValue] = useState(0);

    const calculateMaxValue = (salaries, deposit, commitments) => {
        const value = (salaries * 3) + deposit - (commitments * 12);
        setMaxValue(value);
    }

    return(
        <>
        <h1>Bumblebee mortgage calculator</h1>
        <CalculatorForm calculateMaxValue={calculateMaxValue}/>
        <Output maxValue={maxValue}/>
        </>
    );
};

export default MortgageCalculator;