import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";

const CategoryPreview = ({title, products}) => {
    return ( 
        <div className="category-preview-container">
            <h3><Link to={title} className="title">{title.toUpperCase()}</Link></h3>
            <div className="preview">
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
     );
}
 
export default CategoryPreview;