import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../asset/home-logo.png"
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-drop-down";
import UserDropDown from "../account/userdropdown";
import { CartContext } from "../../context/cart.context";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Account from "../account/account";




const Navbar = () => {
    const [isMobile, setIsmobile] = useState(false)
    const { isCartOpen, isUserOpen } = useContext(CartContext)
   
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <div className="nav-links-container">
                    <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsmobile(false)}>
                        <Link to="/Shop" className="nav-links-con">SHOP</Link>
                    <Account />
                    <CartIcon />
                    </div>
                </div>
                {isCartOpen && <CartDropdown />}
                {isUserOpen && <UserDropDown />}
                <div className="mobile-menu-icon" onClick={() => setIsmobile(!isMobile)}>
                    {isMobile ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navbar;