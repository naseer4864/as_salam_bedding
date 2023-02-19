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
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="mobile-menu-icon" onClick={() => setIsmobile(!isMobile)}>
                        {isMobile ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsmobile(true)}>
                            <Link to="/about-us" className="nav-links-con">ABOUT US</Link>
                            <Link to="/Shop" className="nav-links-con" >SHOP</Link>
                        </div>
                    </div>
                    <Link to="/" className="logo-container">
                        <p style={{ fontWeight: "bolder", color: "white" }}>AS_salam</p>
                        <img src={logo} alt="" className="logo" />
                    </Link>
                </div>

                <div className="nav-links-container">
                    <Link to="/about-us" className="nav-links">About Us</Link>
                    <Account />
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
                {isUserOpen && <UserDropDown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navbar;