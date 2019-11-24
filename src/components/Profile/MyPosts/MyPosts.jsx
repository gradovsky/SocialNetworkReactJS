import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {

    let postsElement = props.posts.map(post => <Posts message={post.message} key={post.id}
                                                      likesCount={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (

        <div className={s.postsBlock}>

            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
});

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <div className={s.posts}>
                        <Field className={s.form} component={Textarea} placeholder='Your message'
                               name={'newPostText'} validate={[required, maxLength10]}/>
                        <button className={s.postBtn} size="sm">Add post</button>
                    </div>

                </div>
            </form>
        </div>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddMyPostForm'})(AddNewPostForm);


export default MyPosts;