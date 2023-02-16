import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
const navigate = useNavigate();

      const handlePay = () => {
        navigate("/FlutterWave")
      }
    
    return(
        <div>
            <button onClick={handlePay}>Continue Checkout</button>
        </div>
    )
}

export default Payment;