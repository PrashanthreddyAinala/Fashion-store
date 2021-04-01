import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"
import "./products.css"

class ProductsCard extends React.Component{
    render() {
        const {id,img, name, inCart, short, price} = this.props.product
        return (
            <div className="col-lg-3 col-md-4 col-6 mx-auto mb-4">
                <div className="card">
                    <ProductConsumer>
                        {value=>(
                            <div>
                                {/* <div className="card-body"> */}
                                    <Link to="/details">
                                        <img src={img} alt="phone" onClick={()=>value.handleDetail(id)}/>
                                    </Link>
                                    
                                {/* </div> */}
                                <div className="pt-3 pl-2 text-left">
                                    <h4>{name}</h4>
                                    <p>{short}</p>
                                    <h4>Rs: {price}</h4>
                                </div>
                                <button className="fa-cart" disabled={inCart? true: false} onClick={()=>value.handleCart(id)}>
                                        {inCart?(<i className="fa fa-cart-arrow-down"/>): (<i className="fa fa-cart-plus"></i>)}
                                </button>
                            </div>)}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default ProductsCard