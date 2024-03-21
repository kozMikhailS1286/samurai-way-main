import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import logo from "./pngwing.png"


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login} : <button onClick={props.logout}> - Logout </button> </div>
                    : <NavLink to={'/login'}> <a> Login </a> </NavLink> }
            </div>
        </header>
    );
}

export default Header;