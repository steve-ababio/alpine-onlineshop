import React, { useEffect, useState } from 'react';
import {HiCheck, HiOutlineMail} from 'react-icons/hi';
import {FiPhoneCall,FiUserPlus} from 'react-icons/fi';
import {useStripe,useElements, CardElement} from '@stripe/react-stripe-js';
import './checkout.css';

const url = "http://localhost:8080/create-payment-intent";

const Checkout = (props)=>
{
    const cartprice = props.location.state.params.cartprice;
    const stripe = useStripe();
    const elements = useElements();

    const[email,setemail] = useState('');
    const[name,setname] = useState('');
    const[phone,setphone] = useState(null)

    //stripe states
    const [succeeded, setsucceeded] = useState(false);
    const [error, seterror] = useState(null);
    const [processing, setprocessing] = useState('');
    const [disabled, setdisabled] = useState(true);
    const [clientsecret, setclientsecret] = useState('');
    const[display,setdisplayed] = useState(true);
   
    useEffect( ()=>
    {
      const fetchpayintent = async()=>{
          const json = await fetch(url, {method: "POST",headers: {"Content-Type": "application/json",},body:JSON.stringify({iteminfo:cartprice})})
          const clientsecret = await json.json();
          setclientsecret(clientsecret.clientsecret);
      };
      fetchpayintent()
    },[])
    const cardStyle = {
        style: {
          width:200,
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

    const handlesubmitdetails = async e =>
    {
        e.preventDefault();
        setprocessing(true);
        
        const payload = await stripe.confirmCardPayment(clientsecret,{
          payment_method:{
            card:elements.getElement(CardElement),
            billing_details:{
              email:email,
              name:name,
              phone:phone,
            }
          }
        })
        if(payload.error)
        {
            seterror(`Payment failed ${payload.error.message}`);
            setprocessing(false);
        }
        else
        {
            seterror(null);
            setprocessing(false);
            setsucceeded(true);

        }
    } 
    useEffect(() =>{
      if(succeeded)
        localStorage.removeItem("__cart_items");
    },[succeeded])

    const handleemail = e =>
    {
        setemail(e.target.value);
    }
    const handlename = e =>
    {
      setname(e.target.value);
    }
    const handlephone = e =>
    {
      setphone(e.target.value);
    }
    const handleChange = async (event) => {
        setdisabled(event.empty);
        seterror(event.error ? event.error.message : "");
    }
    const closesuccesspurchasecard = ()=>
    {
      setdisplayed(false);
    }

    
    return(
        <div className="checkout-wrapper">
           <h2>CHECKOUT</h2>
            <form className="checkout-form" onSubmit={e=>{handlesubmitdetails(e)}}>
           
                <div className="payment-info">
                    <div className="payment-type-icon">
                        <HiOutlineMail size={28} color="grey" />
                    </div>
                    <input onChange={handleemail} name="email" type="email" placeholder="e-mail" />
                </div>
                <div className="payment-info">
                    <div className="payment-type-icon">
                        <FiUserPlus size={28} color="grey" />
                    </div>
                    <input onChange={handlename} name="name" type="text" placeholder="name" />
                </div>
                <div className="payment-info">
                    <div className="payment-type-icon">
                        <FiPhoneCall size={28} color="grey" />
                    </div>
                    <input onChange={handlephone} name="telephone" type="tel" placeholder="telephone" />
                </div>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <div className="payment-btn">
                    <button disabled={processing || disabled || succeeded}><span id="button-text">
                    {
                      processing ? (<div className="spinner" id="spinner"></div>) : ("Pay now")
                    }
                  </span>
                  </button>
                </div>
            </form>
            {
              succeeded ?
                <div className={display ? "purchase-card-overlay-on purchase-card-overlay" : "purchase-card-overlay-off purchase-card-overlay"}>
                    <div className="purchase-success-card">
                        <div className="purchase-success-check-icon-ctn purchase-success-card-content">
                            <div> <HiCheck size={30} color="rgb(109, 38, 240)" /></div>
                        </div>  
                        <div className="purchase-success-txt purchase-success-card-content">purchase successful</div>
                        <div className="purchase-success-ok-btn-ctn">
                            <button onClick={closesuccesspurchasecard} className="purchase-success-ok-btn purchase-success-card-content">OK</button>
                        </div>
                    </div> 
                </div>
                :null
            }
        </div>
    )
}

export default Checkout;