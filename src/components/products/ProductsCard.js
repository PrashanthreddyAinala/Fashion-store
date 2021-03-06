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
                                    <h5>{name}</h5>
                                    <p>{short}</p>
                                    <h6>Rs: {price}</h6>
                                </div>
                                <button className="fa-cart" disabled={inCart? true: false} onClick={()=>{value.handleCart(id)}}>
                                        {inCart?(<p className="disable">In Cart</p>): (<p className="enable">Add to Cart</p>)}
                                </button>
                            </div>)}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default ProductsCard