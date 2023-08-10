import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Button, TextInput } from "react-materialize";
import { useState } from "react";

// Compute n! (factorial) for integer n ≥ 0

const Factorial = () => {
    const [factNum, setFact] = useState(0);
    const [factReal, setFReal] = useState(0);
    function handleClick() {
        const factnum = document.getElementById("factNum").value;
        const factreal = find_factorial(factnum);
        setFact(Number(factnum));
        setFReal(Number(factreal));
    }

    function find_factorial(n) {
        if (n === 0) {
            return 1;
        }
        if (n < 0) {
            alert("We cannot do a factorial of below 0.");
            setFact(0);
            document.getElementById("factNum").value = 0;
            return 0;
        } else {
            let total = 1;
            for (let iCount = n; iCount >= 1; iCount = iCount - 1) {
                total = total * iCount;
            }
            return total;
        }
    }

    return (
        <div className="App">
            {/* <header className="App-header">JavaScript HW 1</header> */}
            <div className="Content">
                <TextInput
                    id="factNum"
                    label="Enter an integer to find the factorial of!"
                    type="number"
                />
                <div id="factDisplay">
                    <span className="emphasized">
                        Factorial Requested for the number:
                    </span>
                    {factNum}
                </div>
                <div id="factReal">
                    <span className="emphasized">Desired Factorial Value:</span>
                    {factReal}
                </div>
                <Button onClick={handleClick}>Find Factorial</Button>
            </div>
        </div>
    );
};

export default Factorial;
