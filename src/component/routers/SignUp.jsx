import { useState, useContext, useEffect } from "react";
import { createUserwithEandP, createUserDocRef } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../context/firebase.context";
import { useNavigate } from "react-router-dom";



const defaultformField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUp = () => {
    const [formField, setFormField] = useState(defaultformField);
    const { displayName, email, password, confirmPassword } = formField;
    const [showPassword, setShowpassword] = useState(false);
    const [error, setError]= useState(false)
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();


    const resetForm = () => {
        setFormField(defaultformField)
    }

    const handleOnsubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("password not matched")
            return;
        }
        try {
            const { user } = await createUserwithEandP(email, password);
            await createUserDocRef(user, { displayName });
            resetForm()
        } catch (error) {
            if (error.code === "auth/eamil-already-in use") {
                setError("can not create user, eamil already in use")
            } else {
                console.log("catching error creating user", error)
            }
        }
    }

    const handleOnchange = (event) => {
        const { name, value } = event.target;

        setFormField({ ...formField, [name]: value })
    }

    const handleClick = () => {
        setShowpassword(!showPassword)
    }

    useEffect(() => {
        if(currentUser){
            navigate("/")
        }
    }, [currentUser, navigate])
    return (
        <div className="handle-signin-container">
            <div className="sign-in-container">

                <span>Sign up with Email</span>
                <form onSubmit={handleOnsubmit}>

                    <input required type="text" onChange={handleOnchange} name="displayName" value={displayName} placeholder="Full Name" />


                    <input required type="email" onChange={handleOnchange} name="email" value={email} placeholder="Email" />

                    <div className="passwords">
                        <input required type={showPassword ? "text" : "password"} onChange={handleOnchange} name="password" value={password} placeholder="Password" />
                    </div>

                    <div className="passwords">
                        <input required type={showPassword ? "text" : "password"} onChange={handleOnchange} name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" />
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={handleClick} className="eyes" />
                    </div>
                    <p>{error}</p>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;