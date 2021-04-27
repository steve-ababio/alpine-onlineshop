import React, { useEffect, useState } from 'react';
import useLocalstorage from '../../hooks/uselocalstorage';
import {featuredproducts} from './productjson'

export const productcontext = React.createContext([]);
const Productdata = (props)=>{
    
    const [cart_ls_items,setcarts_ls_items] = useLocalstorage("__cart_items",[]);
    const [wishlist_ls_items,setwishlist_ls_items] = useLocalstorage("__wishlist_items",[]);

    const filteritems = (productID,itemsarr)=>
    {
        const item = featuredproducts.filter(
            featuredproduct=> productID.toString() === featuredproduct.productID
        );
        const duplicateexists = itemsarr.every(item =>{
            return item.productID !== productID
        })
        return {item,duplicateexists}
    }
    const addtowishlist = productID=>
    {
        const filteredwishlistitems = filteritems(productID,wishlist_ls_items);
        if(filteredwishlistitems.duplicateexists)
            setwishlist_ls_items([...wishlist_ls_items,...filteredwishlistitems.item]);
    }
    const addtocart = productID =>
    {
        const filteredcartitems = filteritems(productID,cart_ls_items);
        console.log(filteredcartitems)
        if(filteredcartitems.duplicateexists)
            setcarts_ls_items([...cart_ls_items,...filteredcartitems.item]);
    }

    return(
        <productcontext.Provider value={{featuredproducts:featuredproducts,addtocart:addtocart,cartitems:cart_ls_items,wishlistitems:wishlist_ls_items,addtowishlist:addtowishlist}}>
            {props.children}
        </productcontext.Provider>
    )
}

export default Productdata;