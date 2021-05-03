import React from 'react';
import {MdDelete,} from 'react-icons/md';
import './wishlist.css';
import useLocalstorage from '../../hooks/uselocalstorage';
const Wishlist = ()=>
{
    const [wishlistitem_ls,setwishlistitem_ls] = useLocalstorage('__wishlist_items',[]);

    const removewishlistitem = (e,productID)=>{
        const mutatedwishlistitems = wishlistitem_ls.filter(item=>(
           item.productID !== productID
        ));
        setwishlistitem_ls(mutatedwishlistitems);
    }
    return(
        <div className="wishlist-wrapper">
            {
                wishlistitem_ls.length > 0 ?
                    wishlistitem_ls.map(items=>(
                        <div className="wishlist-card" key={items.productID}>
                            <div className="wishlist-card-img">
                                <img src={items.image} alt="wishlist" />
                            </div>
                            <div className="wishlist-text-ctn">
                                <div className="wishlist-title">{items.Title}</div>
                                <div className="wishlist-price">{items.price}</div>
                            </div>
                            <div className="wishlist-card-remove" onClick={e=>removewishlistitem(e,items.productID)}>
                                <MdDelete size={25} color="grey" />
                            </div>
                        </div>
                    ))
                : <div className="wishlist-empty">
                    <div className="wishlist-empty-title">Your wishlist is empty</div>
                    <div className="wishlist-empty-subtitle">Explore more and shortlist some items</div>
                    <button className="wishlist-startshopping-button">Start Shopping</button>
                 </div>
            }

        </div>
    )
}

export default Wishlist;