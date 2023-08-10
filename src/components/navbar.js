import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="">
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/"
                            exact
                        >
                            Fibonacci
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/factorial"
                            exact
                        >
                            Factorial
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/sum"
                            exact
                        >
                            Sum of Integers
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/coins"
                            exact
                        >
                            US Coins
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
