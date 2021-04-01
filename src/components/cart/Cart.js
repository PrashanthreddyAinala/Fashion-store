import React from "react"
import {ProductConsumer} from "../context"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
import "./Cart.css"

class Cart extends React.Component{
    render() {
        return (
            <ProductConsumer>
                {value=> {
                    const {Cart} = value;
                    if(Cart.length>0) {
                        return (
                            <div className="container">
                                <CartList value={value}/>
                                <CartTotal value={value} />
                            </div>
                            )
                    } else {
                        return (
                        <div className="container text-center pt-5">
                            <h1 className="cart-header">Your Cart is empty</h1>
                        </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Cart