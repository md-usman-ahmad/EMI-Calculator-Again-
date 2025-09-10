import { useState } from "react";



// Without Calculate Button(2.0)
export function Input({loanAmount,rateOfInterest,loanTenure, updatedInputs }) {
  
  return (
    <>
      <div className="mb-3">
        <div className=" d-flex justify-content-between ">
            <label className="form-label">Loan Amount(₹)</label>
            <h6>[Minimum 1Lakh]</h6>
        </div>
        <input
          type="text"
          className="form-control me-2"
          id="name"
          placeholder="Enter Amount"
          aria-label="Search"
          defaultValue={loanAmount}
          onChange={(event) => { updatedInputs("loanAmount",Number(event.target.value))}}
        />
      </div>
      <div className="mb-3">
        <div className=" d-flex justify-content-between ">
            <label className="form-label">Rate of Interest(%)</label>
            <h6>[1-30]</h6>
        </div>
        <input
          type="text"
          className="form-control me-2"
          id="name"
          placeholder="Enter Percentage"
          aria-label="Search"
          defaultValue={rateOfInterest}
          onChange={(event) => { updatedInputs("rateOfInterest",Number(event.target.value/(12*100)))}}
        />
      </div>
      <div className="mb-3">
        <div className=" d-flex justify-content-between ">
            <label className="form-label">Loan Tenure(Yr)</label>
            <h6>[1-30]</h6>
        </div>
        <input
          type="text"
          className="form-control me-2"
          id="name"
          placeholder="Enter No of Years"
          aria-label="Search"
          defaultValue={loanTenure}
          onChange={(event) => { updatedInputs("loanTenure",Number(event.target.value*12))}}
        />
      </div>
    </>
  );
}

// Without Calculate Button(1.0)
// export function Input({ EMICalculation }) {
//   const [userInputs, setUserInputs] = useState({
//     loanAmount: 100000,
//     rateOfInterest: 1,
//     loanTenure: 1,
//   });
  
//   return (
//     <>
//       <div className="mb-3">
//         <div className=" d-flex justify-content-between ">
//             <label className="form-label">Loan Amount(₹)</label>
//             <h6>[Minimum 1Lakh]</h6>
//         </div>
//         <input
//           type="text"
//           className="form-control me-2"
//           id="name"
//           placeholder="Enter Amount"
//           aria-label="Search"
//           defaultValue={10000}
//           onChange={(event) => {
//             const newInputs = { ...userInputs, loanAmount: event.target.value };
//             setUserInputs(newInputs);
//             EMICalculation(newInputs);  
//           }}
//         />
//       </div>
//       <div className="mb-3">
//         <div className=" d-flex justify-content-between ">
//             <label className="form-label">Rate of Interest(%)</label>
//             <h6>[1-30]</h6>
//         </div>
//         <input
//           type="text"
//           className="form-control me-2"
//           id="name"
//           placeholder="Enter Percentage"
//           aria-label="Search"
//           defaultValue={1}
//           onChange={(event) => {
//             const newInputs = {
//               ...userInputs,
//               rateOfInterest: event.target.value
//             }
//             setUserInputs(newInputs);
//             EMICalculation(newInputs);
//           }}
//         />
//       </div>
//       <div className="mb-3">
//         <div className=" d-flex justify-content-between ">
//             <label className="form-label">Loan Tenure(Yr)</label>
//             <h6>[1-30]</h6>
//         </div>
//         <input
//           type="text"
//           className="form-control me-2"
//           id="name"
//           placeholder="Enter No of Years"
//           aria-label="Search"
//           defaultValue={1 }
//           onChange={(event) => {
//             const newInputs = {
//               ...userInputs,
//               loanTenure: event.target.value
//             }
//             setUserInputs(newInputs);
//             EMICalculation(newInputs);
//           }}
//         />
//       </div>
//     </>
//   );
// }


                                      // With Calculate button(2.0)
// export function Input({loanAmount,rateOfInterest,loanTenure,updatedInputs,EMICalculation}) {
//   return (
//     <>
//         <div className="mb-3">
//           <div className=" d-flex justify-content-between ">
//              <label className="form-label">Loan Amount(₹)</label>
//              <h6>[Minimum 1Lakh]</h6>
//           </div>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter Amount"
//             aria-label="Search"
//             defaultValue={loanAmount}
//             onChange={ (event)=>{updatedInputs("loanAmount",event.target.value)} }
//           />
//         </div>
//         <div className="mb-3">
//           <div className=" d-flex justify-content-between ">
//              <label className="form-label">Rate of Interest(%)</label>
//              <h6>[1-30]</h6>
//           </div>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter Percentage"
//             aria-label="Search"
//             defaultValue={rateOfInterest}
//             onChange={ (event)=>{updatedInputs("rateOfInterest",event.target.value)} }
//           />
//         </div>
//         <div className="mb-3">
//           <div className=" d-flex justify-content-between ">
//              <label className="form-label">Loan Tenure(Yr)</label>
//              <h6>[1-30]</h6>
//           </div>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter No of Years"
//             aria-label="Search"
//             defaultValue={loanTenure}
//             onChange={ (event)=>{updatedInputs("loanTenure",event.target.value)} }
//           />
//         </div>
//         <button type="button" className="btn btn-outline-primary" onClick={EMICalculation}>Calculate</button>
//     </>
//   );
// }




// With Calculate button(1.0)
// export function Input({EMICalculation}) {
//     const [userInputs,setUserInputs] = useState({
//         loanAmount:undefined,
//         rateOfInterest: undefined,
//         loanTenure: undefined,
//     })
//     console.log("userInput - >",userInputs);
//   return (
//     <>
//         <div className="mb-3">
//           <label className="form-label">Loan Amount(₹)</label>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter Amount"
//             aria-label="Search"
//             onChange={ (event)=>{setUserInputs( {...userInputs,loanAmount: event.target.value} )} }
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Rate of Interest(%)</label>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter Percentage"
//             aria-label="Search"
//             onChange={ (event)=>{setUserInputs( {...userInputs,rateOfInterest: event.target.value} )} }
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Loan Tenure(Yr)</label>
//           <input
//             type="text"
//             className="form-control me-2"
//             id="name"
//             placeholder="Enter No of Years"
//             aria-label="Search"
//             onChange={ (event)=>{setUserInputs( {...userInputs,loanTenure: event.target.value} )} }
//           />
//         </div>
//         <button type="button" className="btn btn-outline-primary" onClick={ ()=>{EMICalculation(userInputs)} }>Calculate</button>
//     </>
//   );
// }
