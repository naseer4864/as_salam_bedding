import { useNavigate } from "react-router-dom";

const CardProduct = ({Store}) => {
    const {title, imageUrl, route} = Store
    const navigate= useNavigate();
    const onNavigateHandler = () => navigate(route)
    return ( 
        <div>
            <div className="container" onClick={onNavigateHandler}>
              <img src={imageUrl} alt="" className="background-image" />
              <div className='body-container'>
                <h2>{title}</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
        </div>
     );
}
 
export default CardProduct;