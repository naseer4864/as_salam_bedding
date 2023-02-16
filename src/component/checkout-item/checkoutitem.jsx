import { useContext } from "react";
import { CartContext } from "../../context/cart.context";



const CheckoutItem = ({CartItem}) => {
    const {name, imageUrl, price, quantity} = CartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
const clearItemHandler = () => clearItemFromCart(CartItem)
    return ( 
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="checkout-name">{name}</span>
            <span className="checkout-quantity">
                <div className="arrow" onClick={() => removeItemFromCart(CartItem)}>
                    &#10094;
                </div>
                <span className="value">
                {quantity}
                </span>
                <div className="arrow" onClick={() => addItemToCart(CartItem)}>
                &#10095;
                </div>
                </span>
            <span className="checkout-price">&#8358; {price*quantity}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
     );
}
 
export default CheckoutItem;