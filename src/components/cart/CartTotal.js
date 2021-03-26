import React from "react"
import {ProductConsumer} from "../context"
import {Link} from "react-router-dom"

class CartTotal extends React.Component {
    render() {
        const {cartSubTotal, cartTax, cartTotal} = this.props.value;
        return(
            <ProductConsumer>
                {value => (
                    <div className="cart-total">
                        <Link to="/">
                            <button onClick={()=>value.clearCart()}>Clear Cart</button>
                        </Link>
                        <h2>SubTotal : <span className="amount">Rs. {cartSubTotal}</span></h2>
                        <h2>Tax : <span className="amount">Rs. {cartTax}</span></h2>
                        <h2>Total Cost : <span className="amount">Rs. {cartTotal}</span></h2>
                    </div>
                )}
            </ProductConsumer>
        )
    }
}

export default CartTotal