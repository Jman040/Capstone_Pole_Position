import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const ModNav = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);


    return (
        <nav className={`navbar`}>
            <ul className="navbar__items">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/drivers">
                        Drivers
                    </Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/teams">
                        Teams
                    </Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/myDrivers">
                        My Drivers
                    </Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/schedule">
                        Schedule
                    </Link>
                </li>


            </ul>

            {localStorage.getItem("pole_user") ? (
                <li className="navbar__item navbar__logout">
                    <Link
                        className="navbar__link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("pole_user");
                            navigate("/", { replace: true });
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}


        </nav >
    );
};
