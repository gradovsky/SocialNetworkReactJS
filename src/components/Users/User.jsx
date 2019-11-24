import React from 'react';
import s from './Users.module.css';
import UserAva from '../../assets/images/userPhotoIco.png';
import {NavLink} from 'react-router-dom';
import Button from "react-bootstrap/Button";


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.usersTable}>
            <div key={user.id}>
                <span>
                        <div className={s.userPhoto}>
                            <NavLink to={'/profile/' + user.id}>
                            <img alt='userPhoto'
                                 src={user.photos.small != null ? user.photos.small : UserAva}/>
                            </NavLink>
                            </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                    </span>
                <div>
                    {user.followed
                        ?
                        <Button variant="outline-dark" size="sm" disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>UnFollow</Button>
                        :
                        <Button variant="outline-dark" size="sm" disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</Button>}
                </div>
            </div>
        </div>
    )
};

export default User;