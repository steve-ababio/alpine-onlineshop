import React, {useEffect, useRef, useState,} from 'react';
import {MdDelete,MdFavoriteBorder} from 'react-icons/md';
import {useHistory} from 'react-router-dom';
import useLocalstorage from '../../hooks/uselocalstorage';

import './cartinfo.css';

const Cartinfo = ()=>
{
    const[cartitems,setlscartitems] = useLocalstorage("__cart_items",[]);
    const [totalamt,settotalamt] = useState(0.0);
    const cartprice = useRef([]);
    let itemsamount = useRef([]);
    const inputnumref = useRef();
    const history = useHistory();
    const reducearray = arr=>arr.reduce((total,amt)=>total+amt,0);

    useEffect(()=>
    {
        const total = reducearray(itemsamount.current);
        settotalamt(total);
    },[])
    const computemutatedtotal = e=>
    {
        if(e.target.value !== '')
        {
            const idx = parseInt(e.target.dataset.idx);
            const price = parseInt(e.target.dataset.price);
            const qty = parseInt(e.target.value);
            itemsamount.current[idx] = (price * qty);
            cartprice.current[idx] = {...cartprice.current[idx],qty:qty}
            const total = reducearray(itemsamount.current);        
            settotalamt(total);
        }
        else
        { 
            settotalamt(reducearray(itemsamount.current));
        }
    }
    const removecartitem = (productID,idx)=>
    {
        const mutatedcart = cartitems.filter(item =>(
             item.productID !== productID
        )); 
        setlscartitems(mutatedcart);
        itemsamount.current.splice(idx,1);
        settotalamt(reducearray(itemsamount.current))   
    }
    const navigatetocheckout = ()=>
    {
        history.push({
            pathname:"/checkout",
            state:{params:{cartprice:cartprice.current}}
        })
    }
    return (
        <div className="cartinfo">
            <div className="cartinfo-wrapper">
                <h1>CART </h1>
                {
                    cartitems.length > 0 ?
                    cartitems.map((cartitem,idx)=>{
                        //React strict mode messing stuff up .... slice helps
                        itemsamount.current =[...itemsamount.current,parseInt(cartitem.price.substr(1))].slice(0,cartitems.length);
                        cartprice.current =[...cartprice.current,{productID:cartitem.productID,qty:1}].slice(0,cartitems.length);;
                       return (
                        <div className="cartinfo-box" key={cartitem.productID}>
                            <div className="cartinfo-image-container">
                                <img src={cartitem.image} alt="cartinfo"/>
                            </div>
                            <div className="cartinfo-title-container">
                                {cartitem.Title}
                            </div>
                            <div className="cartinfo-price-quanity-container">
                                <div className="cartinfo-price-wrapper">
                                    <span>{cartitem.price}</span>
                                </div>
                                <div className="cartinfo-quantity-wrapper">
                                    <input data-idx={idx} data-price={parseInt(cartitem.price.substr(1))} min={1} max={20} type="number" ref={inputnumref} onChange={computemutatedtotal}  contentEditable={true} defaultValue= "1"/>
                                </div>
                            </div>
                            <div className="delete-fav-icon-container" >
                                <div className="delete-icon-container" onClick={()=>removecartitem(cartitem.productID,idx)}>
                                    <MdDelete size={25} color="grey" />
                                </div>
                                <div className="fav-icon-container">
                                    <MdFavoriteBorder size={25} color="rgb(187, 187, 187)"/>
                                </div>
                            </div>
                        </div>)
                        
                    })
                    : 
                    <div className="cart-isempty-text">CART IS EMPTY</div>
                }
            </div>
            <div className="totalamount-wrapper">
                <button onClick={navigatetocheckout} disabled={ totalamt <= 0} className= "checkout-btn">
                        <span>checkout</span>
                </button>
               <span>Total: ${totalamt}</span>
            </div>
        </div>
    )
}

export default Cartinfo;