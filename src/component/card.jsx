import SimpleSlider from "./slick-slider/slick-slider";
import CardProduct from "./cardproduct";

const Stores = [
  {
      id: 1,
      title: "Luxury Decor",
      imageUrl: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route:"Shop/luxury decor"
  },

  {
      id: 2,
      title: "Curtains",
      imageUrl: "https://images.pexels.com/photos/817785/pexels-photo-817785.jpeg?auto=compress&cs=tinysrgb&w=600",
      route:'Shop/curtains'
  },

  {
      id: 3,
      title: "Luxury Towels",
      imageUrl: "https://images.pexels.com/photos/12679/pexels-photo-12679.jpeg?auto=compress&cs=tinysrgb&w=600",
      route:"Shop/luxury towels and teadybears"
  },

  {
      id: 4,
      title: "Throw Pillows",
      imageUrl: "https://media.istockphoto.com/id/1209693913/photo/hotel-bed-after-use-dirty-bed-pillow-blanket-room.jpg?s=612x612&w=0&k=20&c=YUb8eeUA3e6B00dFAflW3YWukXp72-m1N0L6uyRizoo=",
      route:"Shop/throw pillows"
  },

  {
      id: 5,
      title: "Beach Mats",
      imageUrl: "https://images.pexels.com/photos/5928257/pexels-photo-5928257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      route:"Shop/Beach Mats"
  },

  {
      id: 6,
      title: "Duvet Sets",
      imageUrl: "https://media.istockphoto.com/id/1161232231/photo/a-folded-rolls-duvet-is-lying-on-the-dresser-against-the-background-of-a-blurred-window.jpg?s=612x612&w=0&k=20&c=IKAR5wtIR7qWAP9SstTSViW11pf00LwE6gnVC8Jn5NE=",
      route:"Shop/duvet set and bedsheet"
  },

]

const Card = () => {
 
  return (
    <div className="card">
    <div className="card-slider">
      <SimpleSlider  />
    </div>
      <h2 className="shop-category">Shop by Categories</h2>
      <div className="category">
        {Stores.map((Store) => (
          <CardProduct key={Store.id} Store={Store} />
        ))}
      </div>
    </div>
  );
}

export default Card;