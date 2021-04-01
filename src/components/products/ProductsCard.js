import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../context"
import "./products.css"

class ProductsCard extends React.Component{
    render() {
        const {id,img, name, inCart} = this.props.product
        return (
            <div className="col-10 col-lg-3 col-sm-5 mx-auto mb-4">
                <div className="card">
                    <ProductConsumer>
                        {value=>(
                            <div>
                                <div className="card-body">
                                    <Link to="/details">
                                        <img src={img} alt="phone" onClick={()=>value.handleDetail(id)}/>
                                    </Link>
                                    <button className="fa-cart mt-2" disabled={inCart? true: false} onClick={()=>value.handleCart(id)}>
                                        {inCart?(<i className="fa fa-cart-arrow-down"/>): (<i className="fa fa-cart-plus"></i>)}
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <h2>{name}</h2>
                                </div>
                            </div>)}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default ProductsCard