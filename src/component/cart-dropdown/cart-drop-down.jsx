import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
    const {CartItems} = useContext(CartContext);
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate("/CheckOut")
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {CartItems.map((item) => {
                    return (
                        <CartItem key={item.id} cartItem={item} />
                    )
                })}
            </div>
            <button onClick={handleCheckout}>GO TO CHECKOUT</button>
        </div>
    );
}

export default CartDropdown;