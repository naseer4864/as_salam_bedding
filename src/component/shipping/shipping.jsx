import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Shipping = () => {
    const [price, setPrice] = useState(0);
    const {totalCart} = useContext(CartContext)
  
    useEffect(() => {
        if (totalCart === 4000) {
          setPrice(1500);
        } else if(totalCart > 8000 ){
          setPrice(4000)
        } 
    }, [setPrice, totalCart])

  
    return (
      <div className="cart-shipping">
        <div>Shipping: &#8358; {price}</div>
        <span>Total:  &#8358; {totalCart + price} </span>
      </div>
    );
}
 
export default Shipping;