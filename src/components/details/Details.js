import React from "react"
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom"
import "./details.css"

class Details extends React.Component{
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {
                        id,name, img, price, desc, inCart, short
                    } = value.detailData;
                    return (
                        <div className="">
                            <div className="row element">
                                <div className="col-12 col-lg-6 text-right margin">
                                    <img src={img} alt="item" />
                                </div>
                                <div className="col-12 col-lg-6 pl-4 margin">
                                    <h1>{name}</h1>
                                    <h5>{short}</h5>
                                    <hr />
                                    <h2>Rs. {price}</h2>
                                    <p className="tax">inclusive of all taxes</p>
                                    <h3>PRODUCT DETAILS</h3>
                                    <p>{desc}</p>
                                    <button className="secondry" disabled={inCart? true: false} onClick={()=> value.handleCart(id)}>{inCart? "Item In Cart": "Add to Cart"}</button>
                                    <Link to="/">
                                    <button className="primary">Back to Products</button>
                                    </Link>
                                    <div className="pt-5">
                                        <p>100% Original Products</p>
                                        <p>FREE Delivery on order above Rs. 499</p>
                                        <p>Pay on delivery might be available</p>
                                        <p>Easy 30 days returns and exchanges</p>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    )
                }} 
            </ProductConsumer>
        )
    }
}

export default Details;