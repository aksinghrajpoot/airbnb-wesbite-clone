import React, { useState } from "react"

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <a href='/'><img src="./logo.png" alt="Logo" /></a>
                        </div>
                        <div className="hamburger-menu" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={isNavOpen ? "menu--bar" : "hideMenuNav"} >
                            <ul className="menu--items">
                                <li>Home</li>
                                <li>Travel</li>
                                <li>Insurance</li>
                                <li>Bookings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}