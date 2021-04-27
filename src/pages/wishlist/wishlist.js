import React, { useContext } from 'react';
import {productcontext} from '../../data/productdata/product.context';
import './wishlist.css';
const Wishlist = ()=>
{
    const wishlistitems = useContext(productcontext).wishlistitems;
    
    return(
        <div className="wishlist-wrapper">
            {wishlistitems.map(items=>(
                <div className="wishlist-card">
                    <div className="wishlist-card-img">
                        <img src={items.image} alt="wishlist" />
                    </div>i
                    <div className="wishlist-text-ctn">
                        <div className="wishlist-title">{items.Title}</div>
                        <div className="wishlist-price">{items.price}</div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Wishlist;