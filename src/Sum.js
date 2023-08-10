// importing Link from react-router-dom to navigate to
// different end points.

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Button, Col, Row, TextInput } from "react-materialize";
import React, { useEffect, useMemo, useState } from "react";

// Compute the sum of all integers between two given integers (inclusive)

const Sum = () => {
    const [Int1, setInt1] = useState(0);
    const [Int2, setInt2] = useState(0);
    const [TotalSum, setSum] = useState(0);
    function handleClick() {
        // const int1 = Number();
        // const int2 = Number();

        setInt1(parseInt(document.getElementById("int1").value));
        setInt2(parseInt(document.getElementById("int2").value));
        // setSum(Number(totalsum));
    }

    useEffect(() => {
        console.log(Int1);
        console.log(Int2);
        find_sum(Int1, Int2);
    }, [Int1, Int2]);

    function find_sum(a, b) {
        let totalsum = 0;

        if (b < a) {
            alert(
                "The second integer must be greater than or equal to the first number"
            );
            setInt1(0);
            setInt2(0);
            document.getElementById("int1").value = 0;
            document.getElementById("int2").value = 0;
            setSum(0);
        } else {
            for (let first = a; first <= b; first = first + 1) {
                totalsum = totalsum + first;
            }
            setSum(totalsum);
        }
    }

    return (
        <div className="App">
            {/* <header className="App-header">JavaScript HW 1</header> */}
            <div className="Content">
                <div className="row">
                    <TextInput
                        className=""
                        id="int1"
                        placeholder="Lower Integer"
                        type="number"
                    />
                    <TextInput
                        id="int2"
                        className=""
                        placeholder="Higher Integer"
                        type="number"
                    />
                </div>

                <div id="factDisplay">
                    <span className="emphasized">
                        Sum Requested Between the Two Values of:
                    </span>
                    {Int1} and {Int2}
                </div>
                <div id="factReal">
                    <span className="emphasized">Sum: </span>
                    {TotalSum}
                </div>
                <Button onClick={handleClick}>Find Sum</Button>
            </div>
        </div>
    );
};

export default Sum;
