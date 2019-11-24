import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import saveProfileIco from './../../../assets/images/saveProfileIco.png'


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <img alt='' className={s.editProfileBtn} src={saveProfileIco} onClick={handleSubmit}/>
                {error && <div className={s.error}> {error} </div>}
            </div>
            <div>
                <b>Full name:</b> {createField('Full name', 'text', 'fullName', Input)}
            </div>
            <div>
                <b>Looking for a job: </b>{createField("", 'checkbox', 'lookingForAJob', Input)}
            </div>
            <div>
                <b>My professional skills: </b>
                {createField('My professional skills:', 'text', 'lookingForAJobDescription', Textarea,)}
            </div>
            <div>
                <b>About me: </b>
                {createField('About me:', 'text', 'aboutMe', Textarea,)}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:{createField(key, 'text', 'contacts.' + key, Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
};
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;





