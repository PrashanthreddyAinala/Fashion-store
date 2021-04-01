import React from "react"
import Data from "../data"
import {detailProduct} from "../data"

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    constructor() {
        super()
        this.state = {
            productsData: [],
            detailData : detailProduct,
            Cart : [],
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        let tempData = [];
        Data.forEach(item=>{
            const singleItem = {...item};
            tempData = [...tempData, singleItem]
        })
        this.setState(()=>{
            return{productsData: tempData};
        })
    }

    getProduct = (id) => {
        const product = this.state.productsData.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const data = this.getProduct(id);
        this.setState(()=>{
            return {detailData: data}
        })
    }

    handleCart = (id) => {
        const tempProduct = [...this.state.productsData];
        const index = tempProduct.indexOf(this.getProduct(id));
        const item = tempProduct[index];
        item.inCart = true;
        item.count = 1;
        const price = item.price;
        item.total = price;
        this.setState(()=>{
            return { productsData: tempProduct, Cart: [...this.state.Cart, item]}
        }, ()=>this.addTotal());
    }

    increment = (id) => {
        let tempCart = [...this.state.Cart];
        const selectedItem = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedItem);

        const product = tempCart[index];

        product.count = product.count+1;
        product.total = product.count* product.price;

        this.setState(()=>{
            return{Cart:[...tempCart]}
        },()=>this.addTotal())
    }

    decrement = (id) => {
        let tempCart = [...this.state.Cart];
        const selectedItem = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedItem);

        const product = tempCart[index];

        product.count = product.count-1;
        if(product.count===0) {
            this.removeItem(id)
        }
        else{
            product.total = product.count * product.price;
            this.setState(()=>{
                return{Cart:[...tempCart]}
            },()=>this.addTotal())
        }
    }

    removeItem = (id) => {
        let tempProduct = [...this.state.productsData];
        let tempCart = [...this.state.Cart];

        tempCart = tempCart.filter(item=>item.id !== id);
        const index = tempProduct.indexOf(this.getProduct(id));
        let removedItem = tempProduct[index];
        removedItem.inCart= false;
        removedItem.count = 0;
        removedItem.total = 0;
        this.setState(()=>{
            return {
                Cart: [...tempCart],
                productsData: [...tempProduct],
            } 
        },()=>this.addTotal())

    }

    addTotal = () => {
        let subtotal = 0;
        this.state.Cart.map(item=>(subtotal += item.total));
        const tempTax = subtotal * 0.01;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal: subtotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    clearCart= () => {
        this.setState(()=>{
            return {Cart : []}
        }, ()=>{
            this.setData();
            this.addTotal();
        })
    }

    render() {
        return(
            <ProductContext.Provider value={{...this.state,
            handleDetail: this.handleDetail,
            handleCart: this.handleCart,
            clearCart: this.clearCart,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };