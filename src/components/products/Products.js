import React from "react"
import ProductsCard from "../card/ProductsCard"
import {ProductConsumer} from "../context"

import "./products.css"

class Products extends React.Component{
    render() {
        return (
            <div className="products">
                <h1>Our Products</h1>
                <ProductConsumer>
                    {(value)=> value.productsData.map(item=><ProductsCard key={item.id} product={item}/>)}
                </ProductConsumer>
            </div>
        )
    }
}

export default Products;