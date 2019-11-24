import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsConteiner';
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;