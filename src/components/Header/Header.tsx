import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";


const Header = (props: HeaderPropsType) => {
    console.log(props.isAuth, 'Header')
    return (
        <header className={s.header}>
            <img src="https://cdn2.scratch.mit.edu/get_image/user/17356205_60x60.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login} : <button onClick={props.logout}> - Logout </button> </div>
                    : <NavLink to={'/login'}> <a> Login </a> </NavLink> }
            </div>
        </header>
    );
}

export default Header;