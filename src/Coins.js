import React, { useEffect } from "react";
// importing Link from react-router-dom to navigate to
// different end points.

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Button, TextInput } from "react-materialize";
import { useState } from "react";

// Given a number of cents, print to the browser console
//the corresponding U.S. coins that total to the given number.
//Print the solution that needs the fewest coins.
//Only use pennies, nickels, dimes, and quarters.
//Example: for 113, the answer is “4 quarters”, “1 dime”, “3 pennies”.
//Do not print the case where the solution calls for 0 of the coin
//(e.g. don’t print “0 nickels”).
//Use the singular word if the value is 1,
//or the plural if the coin count is greater than 1.

const Coins = () => {
    const [coins, setCoins] = useState(0);
    function handleClick() {
        setCoins(parseInt(document.getElementById("cents").value));
    }

    useEffect(() => {
        find_coins(coins);
    }, [coins]);

    function find_coins(cents) {
        if (cents < 0) {
            alert(
                "Sorry, we can only calculate coins for integers greater than 0!"
            );
            setCoins(0);
            document.getElementById("cents").value = 0;
            console.clear();
        } else {
            let coins = [25, 10, 5, 1];
            let coinNames = ["quarter", "dime", "nickel", "penny"];
            let coinPhrase = [];
            console.log("These are the counts for " + cents + " cents.");
            let coinCount = [];
            for (let i = 0; i < coins.length; i = i + 1) {
                coinCount[i] = Math.floor(cents / coins[i]);
                if (coinCount[i] == 0) {
                    coinPhrase[i] = "";
                } else if (coinCount[i] == 1) {
                    coinPhrase[i] = "1 " + coinNames[i];
                } else if (coinCount[i] > 1 && coinNames[i] == "penny") {
                    coinPhrase[i] = coinCount[i] + " pennies";
                } else if (coinCount[i] > 1) {
                    coinPhrase[i] = coinCount[i] + " " + coinNames[i] + "s";
                }
                cents = cents % coins[i];
            }

            for (let i = 0; i < coinPhrase.length; i = i + 1) {
                if (coinPhrase[i] != "") {
                    console.log(coinPhrase[i]);
                }
            }
        }
    }

    return (
        <div className="App">
            {/* <header className="App-header">JavaScript HW 1</header> */}
            <div className="Content">
                <TextInput
                    id="cents"
                    label="Enter how many cents"
                    type="number"
                />
                <div id="centDisplay">
                    <span className="emphasized">
                        Number of Cents to Convert:
                    </span>
                    {coins}
                </div>
                <div id="factReal">
                    <span className="emphasized showcoins">
                        See the Coin Count in the Console!
                    </span>
                </div>
                <Button onClick={handleClick}>Find Number of Coins</Button>
            </div>
        </div>
    );
};

export default Coins;
