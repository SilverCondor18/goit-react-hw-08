import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function RestrictedRoute({ page, fallbackRoute })
{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (isLoggedIn ? <Navigate to={fallbackRoute} /> : page);
}