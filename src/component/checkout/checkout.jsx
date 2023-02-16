import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkoutitem";
import Shipping from "../shipping/shipping";
import FlutterWave from "../flutter/flutter";

const CheckOut = () => {
    const { CartItems, totalCart } = useContext(CartContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Items</span>
                </div>
                <div className="header-block">
                    <span>Qtys</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {CartItems.map((CartItem) => {
                return (
                    < CheckoutItem key={CartItem.id} CartItem={CartItem} />
                )
            })}
            <div className="overalltotal">
            <span>Sub-Total: &#8358; {totalCart}</span>
            <Shipping />
                <FlutterWave/> 
            </div>
            
        </div>
    );
}

export default CheckOut