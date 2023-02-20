import isloading from "../../asset/isloading indicator.gif"


const LazyLoading = () => {
  return ( 
    <div>
      <img src={isloading} alt="load" />
    </div>
   );
}
 
export default LazyLoading;