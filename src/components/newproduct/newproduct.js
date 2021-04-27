import React ,{useContext} from 'react';
import {productcontext} from '../../data/productdata/product.context';
import { FiShoppingCart } from "react-icons/fi";
import './newproduct.css';
const Featuredproduct = ()=>
{
    const featuredproducts = useContext(productcontext).featuredproducts;
    const addtocart = useContext(productcontext).addtocart;
    return(
        <div className="featured-product-wrapper">
            <div className="featured-product-header">
                <h3>FEATURED PRODUCTS</h3>
                <span>VIEW ALL</span>
            </div>
            <div className="featured-product-box-wrapper">
            {
                featuredproducts.map(product=>
                    (
                        <div className="featured-product-box-container" key={product.productID}>
                            <div className="featured-product-box">
                                <img src={product.image} alt="feature product" />      
                                <div className="product-cart-icon" onClick={()=>addtocart(product.productID)}>
                                    <FiShoppingCart style={{marginRight:5,marginBottom:5}} size={30} color="rgb(105, 105, 105)" />
                                </div>                                            
                            </div> 
                            <div className="product-box-info">
                                <h2>{product.Title}</h2>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    )
                )

            }   
            </div>   
        </div>
    ) 
}
export default Featuredproduct 