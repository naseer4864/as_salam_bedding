import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"


const CartIcon = () => {
    const { setisCartOpen, isCartOpen } = useContext(CartContext);
    const { cartCount } = useContext(CartContext)
    const toggleIsOpen = () => setisCartOpen(!isCartOpen)
    return (
        <div className="cart-icon-container" onClick={toggleIsOpen}>
            <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;