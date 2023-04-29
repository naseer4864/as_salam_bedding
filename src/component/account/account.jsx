import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/firebase.context";

const Account = () => {
  const { isUserOpen, setIsUserOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const toggleIsUserOpen = () => setIsUserOpen(!isUserOpen);

  return (
    <div className="account-container" onClick={toggleIsUserOpen}>
      {currentUser ? (
        
          <span>Account</span>
        
      ) : (
        <span>
            Sign In <FontAwesomeIcon icon={faUser} />
        </span>
      )}
    </div>
  );
};

export default Account;
