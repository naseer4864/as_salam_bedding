import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
   const addProductToCart = () => addItemToCart(product)
    return (
        <div className="product-card-container">
                <img  src={imageUrl} alt={`${name}`}/>
                <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">&#8358; {price}</span>
                </div>
                <button onClick={addProductToCart} >Add to cart</button>
        </div>
    );
}

export default ProductCard;