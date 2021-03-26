import React from "react"
import { NavLink } from "react-router-dom";

import "./Nav.css";

class NavBar extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <div    >
                    <NavLink to="/" className="link1">
                        <h1>Mobile Store</h1>
                    </NavLink>
                </div>
                <div className="cart">
                    <NavLink to="/cart" className="link2">
                        <p><i className="fa fa-shopping-cart"/> My Cart</p>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar;