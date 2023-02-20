import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { UserContext } from "../../context/firebase.context";
import { signOutUser } from "../firebase/firebase";
import { CartContext } from "../../context/cart.context";


const UserDropDown = () => {
    const {currentUser} = useContext(UserContext);
    const {setIsUserOpen} = useContext(CartContext)
    const navigate = useNavigate();
    const handleSign = () => {
        navigate("/signIn")
        setIsUserOpen(false)
    }
    return (
        <div className="user-dropdown">
            {currentUser ? <span>WELCOME</span> : null}
            {currentUser ? ( <span>{currentUser.displayName}</span>) : null}
            {currentUser ? ( <span>{currentUser.email}</span>) : null}
            {currentUser ? ( <span onClick={signOutUser} className="nav-links-con">SIGN OUT</span>) : (<span onClick={handleSign} className="nav-links-con">SIGN IN</span>)}
        </div>
    );
}

export default UserDropDown;