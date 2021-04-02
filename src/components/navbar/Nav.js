import React from "react"
import { NavLink } from "react-router-dom";
import {ProductConsumer} from "../context"

import "./Nav.css";

class NavBar extends React.Component{
    render() {
        return (
            <ProductConsumer>
                {value=>(
                    <div className="navbar bg-danger p-3">
                    <div>
                        <NavLink to="/" className="link1">
                            <h3>Fashion Palace</h3>
                        </NavLink>
                    </div>
                    <div className="cart">
                        <NavLink to="/cart" className="link2">
                            <p><i className="fa fa-shopping-cart"/><span className="counter">{value.counter}</span></p>
                        </NavLink>
                    </div>
                </div>
                )}
            </ProductConsumer>   
        )
    }
}

export default NavBar;