import React from 'react';
import { useEffect, useState} from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


export default function FlutterWave() {
  const {totalCart} = useContext(CartContext)
  const public_key=process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY
  const [price, setPrice] = useState(0);
  
    useEffect(() => {
        if (totalCart === 4000) {
          setPrice(1500);
        } else if(totalCart >= 8000 ){
          setPrice(4000)
        } 
    }, [setPrice, totalCart])
  const config = {
    public_key: public_key,
    tx_ref: Date.now(),
    amount: totalCart,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'Asalam_store.',
      description: 'Payment for items in cart',
      logo: 'https://i.ibb.co/SKP9nVc/home-logo-removebg-preview.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button style={{padding:"8px 10px",backgroundColor:"black",opacity:"0.7",cursor:"pointer",color:"white"}}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        PAY:  &#8358; {totalCart + price}
      </button>
    </div>
  );
}