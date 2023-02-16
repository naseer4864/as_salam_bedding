import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/firebase.context";
import { signOutUser } from "../firebase/firebase";


const UserDropDown = () => {
    const {currentUser} = useContext(UserContext)
    return (
        <div className="user-dropdown">
            {currentUser ? <span>WELCOME</span> : null}
            {currentUser ? ( <span>{currentUser.displayName}</span>) : null}
            {currentUser ? ( <span>{currentUser.email}</span>) : null}
            {currentUser ? ( <span onClick={signOutUser} className="nav-links-con">SIGN OUT</span>) : (<Link to="/signIn" className="nav-links-con">SIGN IN</Link>)}
        </div>
    );
}

export default UserDropDown;