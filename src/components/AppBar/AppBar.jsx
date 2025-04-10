import { useDispatch, useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../../components/UserMenu/UserMenu";
import Navigation from "../../components/Navigation/Navigation";
import AuthNav from "../../components/AuthNav/AuthNav";

export default function AppBar()
{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.wrapper}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    )
}