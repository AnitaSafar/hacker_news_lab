import React, { useState } from 'react';
import CalculatorForm from '../components/CalculatorForm';

const MortgageCalculator = () => {

    const [maxValue, setMaxValue] = useState(0);

    const calculateMaxValue = (salaries) => {
        console.log(salaries)
        const value = salaries * 3;
        console.log(value)
        setMaxValue(value);
    }

    return(
        <>
        <h1>Mortgage calculator</h1>
        <CalculatorForm calculateMaxValue={calculateMaxValue}/>
        </>
    );
};

export default MortgageCalculator;