import React from 'react';
import s from './Header.module.css';
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";


const Header = (props) => {
    return (
        <header className={s.header}>
            {props.isAuth
                ? <div>
                    <div className={s.userLogined}>
                    <b>User: </b>{props.login}
                    </div>
                    <Button variant="outline-dark" size="sm" className={s.logOut} onClick={props.logout}>Log
                        out</Button>
                </div>
                : <Redirect to={'/login'}/>
            }
        </header>
    )
};

export default Header;