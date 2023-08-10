import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Home component
import Navbar from "./components/navbar";
import Fib from "./Fibonacci";
import Factorial from "./Factorial";
import Sum from "./Sum";
import Coins from "./Coins";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Routes>
                    <Route path="/" element={<Fib />}></Route>
                    <Route path="/factorial" element={<Factorial />}></Route>
                    <Route path="/sum" element={<Sum />}></Route>
                    <Route path="/coins" element={<Coins />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
