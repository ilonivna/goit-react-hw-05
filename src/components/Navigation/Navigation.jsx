import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}

export default function Navigation() {
    return (
        <nav>
            <ul className={css.list}>
                <li>
                    <NavLink to="/" className={getLinkClass}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={getLinkClass}>Movies</NavLink>
                </li>
            </ul>
    </nav>
)
}