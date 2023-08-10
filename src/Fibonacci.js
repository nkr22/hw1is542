import React from "react";

import { Link } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Button, TextInput } from "react-materialize";
import { useState, useEffect } from "react";

// Compute the ith Fibonacci number (1, 1, 2, 3, 5, 8, 13, 21, 34…)

const Fib = () => {
    const [fibNum, setFib] = useState(0);
    const [fibReal, setReal] = useState(0);

    function handleClick() {
        // const fibNum = document.getElementById("fibNum").value;
        // const fibReal = find_fibonacci_sequence(fibNum);
        setFib(Number(document.getElementById("fibNum").value));
        // setReal(Number(fibReal));
    }

    useEffect(() => {
        console.log(fibNum);
        setReal(find_fibonacci_sequence(fibNum));
    }, [fibNum]);

    function find_fibonacci_sequence(n) {
        if (n < 0) {
            alert(
                "We cannot find the fibonacci value of a number less than 0."
            );
            setFib(0);
            console.log(fibNum);
            document.getElementById("fibNum").value = 0;
            return 0;
        }
        if (n == 0 || n == 1) {
            return n;
        } else {
            return (
                find_fibonacci_sequence(n - 1) + find_fibonacci_sequence(n - 2)
            );
        }
    }

    return (
        <div className="App">
            {/* <header className="App-header">JavaScript HW 1</header> */}
            <div className="Content">
                <TextInput
                    id="fibNum"
                    label="Enter the ith value of the Fibonacci sequence you want"
                    type="number"
                />
                <div id="fibDisplay">
                    <span className="emphasized">Position requested:</span>
                    {fibNum}
                </div>
                <div id="fibReal">
                    <span className="emphasized">Fibonacci Value:</span>
                    {fibReal}
                </div>
                <Button onClick={handleClick}>Find Fibonacci Number</Button>
            </div>
        </div>
    );
};

export default Fib;
