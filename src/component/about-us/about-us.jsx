import ABOUT_US from "../../aboutus.data";
import axios from "axios";
import { useState} from "react";

const formDefault = {
    fullname:"",
    email:"",
    number:"",
    suggestion:"",
    joinus:"",
    message:"",
}

const AboutUs = () => {
    const [formFeild, setFormfeild] = useState(formDefault)
    const {fullname, email, number, suggestion, message, joinus} = formFeild
   
    const reSetform = () => {
        setFormfeild(formDefault)
    }
    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormfeild({...formFeild, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
    
        axios
          .post(
            "https://getform.io/f/c90ccd8c-f512-4c60-a8b8-813c91a3a586",
            formData
          )
          .then((response) => {
            console.log(response);
            reSetform();
            setTimeout(() => {
              alert("Thank you message sent!");
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div className="about-us-container">
            {
                ABOUT_US.map((about) => {
                    return (
                        <div key={about.id} className="about-us-writeup">
                            <h3>{about.title}</h3>
                            <p>{about.content}</p>
                        </div>
                    )
                })
            }

            <form onSubmit={handleSubmit}>
                <span style={{color:"black",fontSize:"1.1rem"}}>Have a suggestion on products for us?</span>
                <input type="text" placeholder="Full Name"  name="fullname" required value={fullname} onChange={handleChange} />
                <input type="email" placeholder="Email"  name="email" required value={email} onChange={handleChange}  />
                <input type="number" placeholder="Number" name="number"  required value={number} onChange={handleChange}  />
                <select className="select" name="seggestion" style={{ minWidth: "60%", height: "30px", border: "none", outline: "none", color:"gray" }} required >
                    <option value={suggestion} onChange={handleChange}>Suggestion</option>
                    <option value={joinus} onChange={handleChange} >Join us</option>
                </select>
                <textarea name="message"  cols="47" rows="10" placeholder="MESSAGE" required value={message} onChange={handleChange} style={{paddingLeft:"10px", paddingTop:"10px"}} ></textarea>
                <button type="submit" className="about-btn">SEND</button>
            </form>
        </div>
    );
}

export default AboutUs;