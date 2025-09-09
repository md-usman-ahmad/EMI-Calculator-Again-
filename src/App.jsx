import { Input } from "./component/input/input.jsx";
import { useState, useRef } from "react";


                                  // Without Calculate Button 
export function App() {
    const [EMI_Values,setEMI_Values] = useState({
        emi: undefined,
        principalAmount: undefined,
        totalAmount: undefined,
        totalInterest: undefined
    })

    if(EMI_Values.emi === undefined || EMI_Values.principalAmount === undefined || EMI_Values.totalAmount === undefined || EMI_Values.emi === undefined ){
        let p = 100000;
        let r = 1/(12*100);
        let n = 1*12;
        setEMI_Values({
            emi: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ),
            principalAmount: p,
            totalAmount: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n,
            totalInterest: (Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n) - p
        })
    }

    function EMICalculation(userInputs){
        console.log("App.jsx me pass hua userInputs = ",userInputs);

       if( (userInputs.loanAmount > 0 && userInputs.rateOfInterest > 0 && userInputs.loanTenure > 0) ){
        if(userInputs.loanAmount < 100000 ){
          userInputs.loanAmount = 100000
        }
        if(userInputs.rateOfInterest < 1 ){
          userInputs.rateOfInterest = 1
        }
        if(userInputs.rateOfInterest > 30 ){
          userInputs.rateOfInterest = 30
        }
        if(userInputs.loanTenure < 1 ){
          userInputs.loanTenure = 1
        }
        if(userInputs.loanTenure > 30 ){
          userInputs.loanTenure = 30
        }

          console.log("loanAmount = ",userInputs.loanAmount , "rateOfInterest = " ,userInputs.rateOfInterest , "loanTenure = " ,userInputs.loanTenure)
          let p = userInputs.loanAmount;
          let r = userInputs.rateOfInterest/(12*100);
          let n = userInputs.loanTenure*12;

          setEMI_Values({
              emi: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ),
              principalAmount: p,
              totalAmount: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n,
              totalInterest: (Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n) - p
          })
       }  
    }

  return (
    <>
      <p className=" fw-bold display-6 text-center pt-2">EMI Calculator</p>
      <div className="container ">
        <div className="row pt-4 justify-content-center">
          <div
            className="col-sm-4 me-3 p-4 border border-end-0 border-2  rounded rounded-5 shadow"
            style={{ boxShadow: "-5px 5px 5px rgb(199, 198, 198) !important" }}
          >
            <Input EMICalculation={ EMICalculation } ></Input>

            <div className="mt-4 border rounded shadow-lg p-3">
                <div className=" d-flex justify-content-between ">
                    <h5>Monthly EMI</h5>
                    <p>₹{EMI_Values.emi}</p>
                </div>
                <div className=" d-flex justify-content-between ">
                    <h5>Principal Amount</h5>
                    <p>₹{EMI_Values.principalAmount}</p>
                </div>
                <div className=" d-flex justify-content-between ">
                    <h5>Total Interest</h5>
                    <p>₹{EMI_Values.totalInterest}</p>
                </div>
                <div className=" d-flex justify-content-between ">
                    <h5>Total Amount</h5>
                    <p>₹{EMI_Values.totalAmount}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

                                                  // With Calculate button
// export function App() {
//     const [EMI_Values,setEMI_Values] = useState({
//         emi: undefined,
//         principalAmount: undefined,
//         totalAmount: undefined,
//         totalInterest: undefined
//     })

//     function EMICalculation(userInputs){
//         console.log("App.jsx me pass hua userInputs = ",userInputs);

//        if( !(userInputs.loanAmount > 0 && userInputs.rateOfInterest > 0 && userInputs.loanTenure > 0) ){
//           alert("inputs Should be greater than 0");
//           return
//        }
//        if( !(userInputs.loanAmount >= 100000) ){
//           alert("loan Amount should start from 1lakh");
//           return
//        }
//        if( !(userInputs.rateOfInterest > 0 && userInputs.rateOfInterest <= 30) ){
//           alert("rate of Interest should b/w [1-30]");
//           return
//        }
//        if( !(userInputs.loanTenure > 0 && userInputs.loanTenure < 30) ){
//           alert("loanTenure should b/w [1-30]");
//           return
//        }
//         let p = userInputs.loanAmount;
//         let r = userInputs.rateOfInterest/(12*100);
//         let n = userInputs.loanTenure*12;


//         setEMI_Values({
//             emi: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ),
//             principalAmount: p,
//             totalAmount: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n,
//             totalInterest: (Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n) - p
//         })
//     }

//   return (
//     <>
//       <p className=" fw-bold display-6 text-center pt-2">EMI Calculator</p>
//       <div className="container ">
//         <div className="row pt-4 justify-content-center">
//           <div
//             className="col-sm-4 me-3 p-4 border border-end-0 border-2  rounded rounded-5 shadow"
//             style={{ boxShadow: "-5px 5px 5px rgb(199, 198, 198) !important" }}
//           >
//             <Input EMICalculation={ EMICalculation } ></Input>

//             <div className="mt-4 border rounded shadow-lg p-3">
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Monthly EMI</h5>
//                     <p>₹{EMI_Values.emi}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Principal Amount</h5>
//                     <p>₹{EMI_Values.principalAmount}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Total Interest</h5>
//                     <p>₹{EMI_Values.totalInterest}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Total Amount</h5>
//                     <p>₹{EMI_Values.totalAmount}</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
