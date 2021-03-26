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
                            <div>
                                <CartList value={value}/>
                                <CartTotal value={value} />
                            </div>
                            )
                    } else {
                        return (<h1 className="cart-header">Your Cart is empty</h1>)
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Cart