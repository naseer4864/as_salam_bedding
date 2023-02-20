import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


const Account = () => {
    const {isUserOpen, setIsUserOpen} = useContext(CartContext);
    const togleIsuerOpen = () => setIsUserOpen(!isUserOpen)
    return (
        <div className="account-container" onClick={togleIsuerOpen}>
           signIn <FontAwesomeIcon icon={faUser} />
        </div>
    );
}

export default Account;