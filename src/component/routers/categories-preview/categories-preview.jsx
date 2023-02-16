import { Fragment, useContext } from "react";
import  {CategoriesContext} from "../../../context/categories.context"
import CategoryPreview from "../../category-preview/category-preveiw";
// import withLoading from "../../isloading/isloading";


const CategoriesPreview = () => {
    const { CategoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(CategoriesMap).map((title) => {
                    const products = CategoriesMap[title];
                    return(
                        <CategoryPreview key={title} title={title} products={products} />
                        ) 
                })}
        </Fragment>
    );
}

export default CategoriesPreview;