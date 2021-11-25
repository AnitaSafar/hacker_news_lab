import React, {useState}  from "react";

const CalculatorForm = ({calculateMaxValue}) => {

    const [salary1, setSalary1] = useState("");
    const [salary2, setSalary2] = useState("");
    const [deposit, setDeposit] = useState("");
    const [commitments, setCommitments] = useState("");

    
    const handleSalary1Change = (event) => {
        setSalary1(event.target.value);
    };

    const handleSalary2Change = (event) => {
        setSalary2(event.target.value);
    };

    const handleDepositChange = (event) => {
        setDeposit(event.target.value);
    }

    const handleCommitmentsChange = (event) => {
        setCommitments(event.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const combinedSalaries = parseFloat(salary1) + parseFloat(salary2);
        const depositValue = parseFloat(deposit);
        

        calculateMaxValue(combinedSalaries, depositValue);
        };

    return(
        <div class="container">
            <form class="flex" onSubmit={handleFormSubmit}>

                <div class="flex">
                    <label>Enter your annual salary: </label> 
                    <input class="box" type="text" placeholder="£" value={salary1} onChange={handleSalary1Change} />
                    <label>Enter your partner's annual salary: </label>
                    <input class="box" type="text" placeholder="£" value={salary2} onChange={handleSalary2Change} />
                </div>
                <div>
                    <label>Enter deposit amount: </label> 
                    <input class="box" type="text" placeholder="£" value={deposit} onChange={handleDepositChange} />
                </div>

                
                <input class="submit-button" type="submit" value="Submit"/>
                

            </form>
        </div>
    )
} ;

export default CalculatorForm;