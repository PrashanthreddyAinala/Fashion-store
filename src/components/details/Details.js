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
                        id,name, img, price, desc, inCart
                    } = value.detailData;
                    return (
                        <div className="detail-header">
                            <h1>{name}</h1>
                                <div className="element">
                                    <img src={img} alt="phone" />
                                </div>
                                <div className="element">
                                    <h2>Model : {name}</h2>
                                    <h2>Price : Rs. {price}</h2>
                                    <h3>Details about Product : </h3>
                                    <p>{desc}</p>
                                    <Link to="/">
                                    <button className="primary">Back to Products</button>
                                    </Link>
                                    <button className="secondry" disabled={inCart? true: false} onClick={()=> value.handleCart(id)}>{inCart? "In Cart": "Add to Cart"}</button>
                                </div>
                        </div>
                    )
                }} 
            </ProductConsumer>
        )
    }
}

export default Details;