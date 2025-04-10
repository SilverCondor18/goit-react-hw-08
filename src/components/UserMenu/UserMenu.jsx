import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu()
{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoff = () => {
        dispatch(logout());
    };

    return (
        <div className={css.wrapper}>
            <p className={css.welcome}>Welcome, {user.name}</p>
            <button type="button" onClick={logoff}>Log out</button>
        </div>
    )
}