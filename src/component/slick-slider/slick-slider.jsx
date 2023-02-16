import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "../../slider.data";

import { useNavigate } from "react-router-dom";


export default function SimpleSlider() {
  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  };
  const navigate = useNavigate()
    const handleSlider = () => {
      navigate('/Shop')
    }
  
  return (
    <div className="slider">
      <Slider {...settings}>
        {SliderData.map((data) => {
          return(
            <div key={data.id} className="slider-container">
              <img src={data.imageLink} alt="" className="slider-img"/>
              <span className="slider-info" onClick={handleSlider}>
                {data.name}
              </span>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}