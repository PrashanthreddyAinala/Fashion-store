import React from "react"
import {ProductConsumer} from "../context"

class CartData extends React.Component {
    render() {
        const {id,img, name, price, count, total} = this.props.value
        return (
            <ProductConsumer>
                {value=>(
                    <div className="cart-body">
                        <h3><img src={img} alt="phone" /></h3>
                        <h3>{name}</h3>
                        <h3>Rs. {price}</h3>
                        <h3><button onClick={()=>value.decrement(id)}>-</button>{count}<button onClick={()=>value.increment(id)}>+</button></h3>
                        <h3><button className="delete" onClick={()=>value.removeItem(id)}><i className="fa fa-trash"/></button></h3>
                        <h3>Rs. {total}</h3>
                    </div>
                )}
            </ProductConsumer>
                
        )
    }
}

export default CartData;