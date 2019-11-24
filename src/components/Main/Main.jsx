import React from 'react';
import UsersContainer from "../Users/UsersContainer";
import LoginPage from "../Login/Login";
import {Redirect, Route} from "react-router-dom";
import s from './Main.module.css'
import {withSuspense} from "../../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import ('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('../Profile/ProfileContainer'));

const Main = () => {
    return (
        <main className={s.main}>
            <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginPage/>}/>
        </main>
    )
};

export default Main;