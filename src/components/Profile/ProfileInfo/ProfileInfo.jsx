import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserAva from '../../../assets/images/userPhotoIco.png';
import ProfileDataForm from "./ProfileDataForm";
import changePhotoBtn from '../../../assets/images/photoIco.png'
import editProfileBtn from '../../../assets/images/editProfileIco.png'


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    };

    return (
        <div className={s.infoBlock}>
            {isOwner &&
            <label htmlFor="my-file-selector">
                <input id="my-file-selector" type="file" className="d-none" onChange={mainPhotoSelected}/>
                <img alt='' className={s.changePhotoBtn} src={changePhotoBtn}/>
            </label>}
            <div className={s.userPhotoBlock}>
                <img alt='' src={profile.photos.large || UserAva}/>
                {isOwner &&
                <ProfileStatusWithHooks className={s.status} status={status} updateUserStatus={updateUserStatus}/>
                }
            </div>
            <div className={s.profileInfo}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => { setEditMode(true) }}
                                   profile={profile}
                                   isOwner={isOwner}/>}
            </div>


        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                {isOwner && <img onClick={goToEditMode} alt='' className={s.editProfileBtn} src={editProfileBtn}/>}
            </div>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>

            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
};


export default ProfileInfo;


