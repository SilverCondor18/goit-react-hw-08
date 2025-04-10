import css from "./AuthNav.module.css";
import { Link } from "react-router";
export default function AuthNav()
{
    return (
        <div className={css.wrapper}>
            <Link to="/register" className={css.link}>Register</Link>
            <Link to="/login" className={css.link}>Log In</Link>
        </div>
    )
}