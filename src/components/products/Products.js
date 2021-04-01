import React from "react"
import ProductsCard from "./ProductsCard"
import {ProductConsumer} from "../context"

import "./products.css"

class Products extends React.Component{
    render() {
        return (
            <div className=" container products text-center">
                <h1 className="pt-5 pb-5">Our Products</h1>
                <div className="row">
                    <ProductConsumer>
                        {(value)=> value.productsData.map(item=><ProductsCard key={item.id} product={item}/>)}
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}

export default Products;