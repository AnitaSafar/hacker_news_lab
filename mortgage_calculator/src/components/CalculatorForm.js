import React, {useState}  from "react";

const CalculatorForm = ({calculateMaxValue}) => {

    const [salary1, setSalary1] = useState();
    const [salary2, setSalary2] = useState();

    const handleSalary1Change = (event) => {
        setSalary1(event.target.value);
    };

    const handleSalary2Change = (event) => {
        setSalary2(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const combinedSalaries = parseFloat(salary1) + parseFloat(salary2)

        calculateMaxValue(combinedSalaries);
        };

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="number" value={salary1} onChange={handleSalary1Change} />
            <input type="number" value={salary2} onChange={handleSalary2Change} />
            <input type="submit" value="submit"/>
        </form>
    )
} ;

export default CalculatorForm;