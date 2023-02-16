import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card";

const Category = () => {
    const { category } = useParams();
    const { CategoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(CategoriesMap[category])

    useEffect(() => {
        setProducts(CategoriesMap[category])
    }, [category, CategoriesMap])
    return (
        <div className="extracted-category">
            <h2 style={{ margin: "25px" }}>{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}

export default Category;