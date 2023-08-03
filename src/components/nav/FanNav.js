import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; // Don't forget to import useState
import "./NavBar.css";

export const FanNav = () => {
    const navigate = useNavigate();

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
                ) : null}
            </ul>
        </nav>
    );
};
