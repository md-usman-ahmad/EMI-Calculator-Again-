
                                              // With Calculate button  

import { useState } from "react";
export function Input({EMICalculation}) {
    const [userInputs,setUserInputs] = useState({
        loanAmount:undefined,
        rateOfInterest: undefined,
        loanTenure: undefined,
    })
    console.log("userInput - >",userInputs);
  return (
    <>
        <div className="mb-3">
          <label className="form-label">Loan Amount(₹)</label>
          <input
            type="text"
            className="form-control me-2"
            id="name"
            placeholder="Enter Amount"
            aria-label="Search"
            onChange={ (event)=>{setUserInputs( {...userInputs,loanAmount: event.target.value} )} }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rate of Interest(%)</label>
          <input
            type="text"
            className="form-control me-2"
            id="name"
            placeholder="Enter Percentage"
            aria-label="Search"
            onChange={ (event)=>{setUserInputs( {...userInputs,rateOfInterest: event.target.value} )} }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Tenure(Yr)</label>
          <input
            type="text"
            className="form-control me-2"
            id="name"
            placeholder="Enter No of Years"
            aria-label="Search"
            onChange={ (event)=>{setUserInputs( {...userInputs,loanTenure: event.target.value} )} }
          />
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={ ()=>{EMICalculation(userInputs)} }>Calculate</button>
    </>
  );
}
