import { createGoogleUserAuth, signInUserwithEandP } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import goLgo from "../../asset/google icon.png";
import { UserContext } from "../../context/firebase.context";
import { useContext } from "react";



const defaultformfield = {
    email: "",
    password: ""
}

const SignIn = () => {
    const [formfield, setFormfield] = useState(defaultformfield)
    const { email, password } = formfield;
    const [showPassword, setShowpassword] = useState(false);
    const [error, setError]= useState(false)

    const { currentUser } = useContext(UserContext);
   
    const resetForm = () => {
        setFormfield(defaultformfield)
    }

    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setFormfield({ ...formfield, [name]: value })
    }
    const logUser = async () => {
        await createGoogleUserAuth();

    }


    const handleOnsubmit = async (event) => {
        event.preventDefault();


        try {
            await signInUserwithEandP(email, password)
            resetForm()
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    setError("incorrect password for email");
                    break
                case "auth/user-not-found":
                    setError("no user associated with this email");
                    break;
                default:
                    console.log(error)
            }

        }
    }

    const handleClick = () => {
        setShowpassword(!showPassword)
    }
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/SignUp")
    }
    useEffect(() => {
        if(currentUser) {
            navigate("/Shop")
        }

    },[currentUser, navigate])

    const handleResetPasword = () => {
        navigate("/PasswordReset")
    }
    return (
        <div className="handle-signin-container">
            <div className="sign-in-container">
                <h3>Already have an account?</h3>
                <span>Sign in with Email and Password</span>
                <form onSubmit={handleOnsubmit}>

                    <input required type="email" onChange={handleOnchange} name="email" value={email} placeholder="Email" />


                    <div className="passwords">
                        <input required type={showPassword ? "text" : "password"} onChange={handleOnchange} name="password" value={password} placeholder="Password" />
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={handleClick} className="eyes" />
                    </div>
                    <p style={{color:"brown"}}>{error}</p>
                    <p onClick={handleResetPasword}>Forgot your Password?</p>
                    <div className="sign-in-btn">
                        <button type="submit">Login</button>
                        <div className="google-logo">
                            <img src={goLgo} alt="" style={{ height: "20px" }} />
                            <button onClick={logUser}>Login with Google</button>
                        </div>
                    </div>
                    <p onClick={handleNavigate}>Don't have an account?</p>
                </form>
            </div>
        </div>
    );
}

export default SignIn;