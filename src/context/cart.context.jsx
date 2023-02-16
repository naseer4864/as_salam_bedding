import { createContext, useState, useEffect } from "react";

const addCartItem = (CartItems, productToAdd) => {
    const existingCartItem = CartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return CartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...CartItems, { ...productToAdd, quantity: 1 }]
};

const removeCartItem = (CartItems, cartItemToRemove) => {
    const existingCartItem = CartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return CartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }

    return CartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
)
};


const clearCartItem = (CartItems, cartItemToClear) =>  CartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen: false,
    isUserOpen:false,
    setisCartOpen: () => { },
    CartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: null,
    totalCart: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setisCartOpen] = useState(false);
    const  [isUserOpen, setIsUserOpen] = useState(false)
    const [CartItems, setCartItems] = useState([]);
    const [cartCount, setCartcount] = useState(null);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        const newCartCount = CartItems.reduce((total, cartItem) => total + cartItem.quantity, null)
        setCartcount(newCartCount)
    },[CartItems]);

    useEffect(() => {
        const newCartTotal = CartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalCart(newCartTotal)
    },[CartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(CartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(CartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(CartItems, cartItemToClear))
    }
   

    const value = { isCartOpen, setisCartOpen,isUserOpen, setIsUserOpen, CartItems, addItemToCart,
        cartCount, removeItemFromCart, clearItemFromCart, totalCart }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}