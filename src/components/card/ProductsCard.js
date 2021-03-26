import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"
import "./productscard.css"

class ProductsCard extends React.Component{
    render() {
        const {id,img, name, inCart} = this.props.product
        return (
            <div className="box">
                <ProductConsumer>
                    {value=>(
                        <div>
                            <Link to="/details">
                                <img src={img} alt="phone" onClick={()=>value.handleDetail(id)}/>
                            </Link>
                            <button className="fa-cart" disabled={inCart? true: false} onClick={()=>value.handleCart(id)}>
                                {inCart?(<i className="fa fa-cart-arrow-down"/>): (<i className="fa fa-cart-plus"></i>)}
                            </button>
                            <h2>{name}</h2>
                        </div>)}
                </ProductConsumer>
            </div>
        )
    }
}

export default ProductsCard