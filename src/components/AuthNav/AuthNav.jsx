import css from "./AuthNav.module.css";
import { NavLink } from "react-router";
import createLinkStyles from "../../linkStyles";

export default function AuthNav()
{
    const getLinkStyles = createLinkStyles(css);
    return (
        <div className={css.wrapper}>
            <NavLink to="/register" className={getLinkStyles}>Register</NavLink>
            <NavLink to="/login" className={getLinkStyles}>Log In</NavLink>
        </div>
    )
}