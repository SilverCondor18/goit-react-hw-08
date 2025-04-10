import { useDispatch, useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router";

export default function Navigation()
{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.navbar}>
            <Link to="/" className={css.link}>Home</Link>
            {isLoggedIn && <Link to="/contacts" className={css.link}>Contacts</Link>}
        </nav>
    )
}