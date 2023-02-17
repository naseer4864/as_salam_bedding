import ABOUT_US from "../../aboutus.data";



const AboutUs = () => {
   
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

            <form  action="https://getform.io/f/c90ccd8c-f512-4c60-a8b8-813c91a3a586" method="POST">
                <span style={{color:"black",fontSize:"1.1rem"}}>Have a suggestion on products for us?</span>
                <input type="text" placeholder="Full Name"  name="name" />
                <input type="email" placeholder="Email"  name="email"  />
                <input type="number" placeholder="Number" name="number" />
                <select className="select" name="seggestion" style={{ minWidth: "60%", height: "30px", border: "none", outline: "none", }}>
                    <option >Suggestion</option>
                    <option >Join us</option>
                </select>
                <textarea name="message"  cols="47" rows="10" placeholder="MESSAGE"></textarea>
                <button type="submit" className="about-btn">SEND</button>
            </form>
        </div>
    );
}

export default AboutUs;