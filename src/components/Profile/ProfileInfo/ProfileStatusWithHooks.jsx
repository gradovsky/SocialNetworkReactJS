import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {

        setStatus(props.status)
    }, [props.status]);


    const activateEditMode = () => {
        props.isOwner
        ? setEditMode(true)
        : setEditMode(false);

    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b><span className={s.status} onClick={activateEditMode}>{props.status || '___________'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input className={s.input}
                       onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};


export default ProfileStatusWithHooks;