import clsx from "clsx";

export default function createLinkStyles(css)
{
    return ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    }
}