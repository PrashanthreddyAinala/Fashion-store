import React from "react"
import CartData from "./CartData"
import {ProductConsumer} from "../context"

class CartList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="pt-5 pb-5 text-center">
                    <h1 className="cart-header">Your Cart Items</h1>
                </div>
                <div className="row data-padd mb-5">
                    <h2>Products</h2>
                    <h2>Name</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Remove</h2>
                    <h2>Total</h2>
                </div>
                <ProductConsumer>
                    {value => value.Cart.map(item=><CartData key={item.id} value={item}/>)}
                </ProductConsumer>
            </React.Fragment>
            
        )
    }
}

export default CartList