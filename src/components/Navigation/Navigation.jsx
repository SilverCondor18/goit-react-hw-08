import { useDispatch, useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router";
import createLinkStyles from "../../linkStyles";

export default function Navigation()
{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const getLinkStyles = createLinkStyles(css);
    return (
        <nav className={css.navbar}>
            <NavLink to="/" className={getLinkStyles}>Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts" className={getLinkStyles}>Contacts</NavLink>}
        </nav>
    )
}