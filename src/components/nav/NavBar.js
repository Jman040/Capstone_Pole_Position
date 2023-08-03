import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { ModNav } from "./ModNav.js";
import { FanNav } from "./FanNav.js";

export const NavBar = () => {
    const localPoleUser = localStorage.getItem("pole_user");
    const poleUserObject = JSON.parse(localPoleUser);

    if (poleUserObject.isMod) {
        return <ModNav />;
    } else {
        return <FanNav />;
    }
};


