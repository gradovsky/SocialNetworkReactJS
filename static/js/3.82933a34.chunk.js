(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{301:function(e,t,a){e.exports={userPhotoBlock:"ProfileInfo_userPhotoBlock__N18ru",contact:"ProfileInfo_contact__2A9Yx",error:"ProfileInfo_error__2ynNX",status:"ProfileInfo_status__3sx4g",input:"ProfileInfo_input__1hvP_",changePhotoBtn:"ProfileInfo_changePhotoBtn__15Ckv",editProfileBtn:"ProfileInfo_editProfileBtn__3bZ-T",infoBlock:"ProfileInfo_infoBlock__3gl6B"}},302:function(e,t,a){e.exports=a.p+"static/media/saveProfileIco.59f3d3af.png"},303:function(e,t,a){e.exports=a.p+"static/media/photoIco.10b598ca.png"},304:function(e,t,a){e.exports=a.p+"static/media/editProfileIco.428fbbfc.png"},305:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3nXHg",posts:"MyPosts_posts__30NYH",form:"MyPosts_form__1IDYi",postBtn:"MyPosts_postBtn__3cVbt"}},306:function(e,t,a){e.exports={item:"Posts_item__2QBOj"}},307:function(e,t,a){"use strict";a.r(t);var n=a(35),o=a(36),l=a(38),s=a(37),r=a(39),c=a(0),i=a.n(c),u=a(98),m=a(301),f=a.n(m),p=a(64),d=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),s=Object(u.a)(l,2),r=s[0],m=s[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{className:f.a.status,onClick:function(){o(!0)}},e.status||"click me"," ")),n&&i.a.createElement("div",null,i.a.createElement("input",{className:f.a.input,onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateUserStatus(r)},value:r})))},b=a(120),E=a.n(b),h=a(33),v=a(131),P=a(302),g=a.n(P),k=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("img",{alt:"",className:f.a.editProfileBtn,src:g.a,onClick:t}),n&&i.a.createElement("div",{className:f.a.error}," ",n," ")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name:")," ",Object(h.c)("Full name","text","fullName",h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),Object(h.c)("","checkbox","lookingForAJob",h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: "),Object(h.c)("My professional skills:","text","lookingForAJobDescription",h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me: "),Object(h.c)("About me:","text","aboutMe",h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts: "),Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:f.a.contact},i.a.createElement("b",null,e,":",Object(h.c)(e,"text","contacts."+e,h.a)))}))))})),_=a(303),O=a.n(_),j=a(304),y=a.n(j),N=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,i.a.createElement("div",null,a&&i.a.createElement("img",{onClick:n,alt:"",className:f.a.editProfileBtn,src:y.a})),i.a.createElement("div",null,i.a.createElement("b",null,"Full name:")," ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me: "),t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return i.a.createElement(B,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},B=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:f.a.contact},i.a.createElement("b",null,t),": ",a)},S=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,o=e.isOwner,l=e.savePhoto,s=e.saveProfile,r=Object(c.useState)(!1),m=Object(u.a)(r,2),b=m[0],h=m[1];if(!t)return i.a.createElement(p.a,null);return i.a.createElement("div",{className:f.a.infoBlock},o&&i.a.createElement("label",{htmlFor:"my-file-selector"},i.a.createElement("input",{id:"my-file-selector",type:"file",className:"d-none",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),i.a.createElement("img",{alt:"",className:f.a.changePhotoBtn,src:O.a})),i.a.createElement("div",{className:f.a.userPhotoBlock},i.a.createElement("img",{alt:"",src:t.photos.large||E.a}),o&&i.a.createElement(d,{className:f.a.status,status:a,updateUserStatus:n})),i.a.createElement("div",{className:f.a.profileInfo},b?i.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){s(e).then((function(){h(!1)}))}}):i.a.createElement(N,{goToEditMode:function(){h(!0)},profile:t,isOwner:o})))},I=a(97),x=a(305),U=a.n(x),A=a(306),M=a.n(A),w=function(e){return i.a.createElement("div",{className:M.a.item},i.a.createElement("img",{src:"https://static.tildacdn.com/tild3739-6264-4166-b438-626535346335/image.png",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like")," ",e.likesCount))},C=a(90),F=a(49),T=i.a.memo((function(e){var t=e.posts.map((function(e){return i.a.createElement(w,{message:e.message,key:e.id,likesCount:e.likesCount})}));return i.a.createElement("div",{className:U.a.postsBlock},i.a.createElement(D,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:U.a.posts},t))})),J=Object(F.a)(10),D=Object(v.a)({form:"ProfileAddMyPostForm"})((function(e){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("div",{className:U.a.posts},i.a.createElement(C.a,{className:U.a.form,component:h.b,placeholder:"Your message",name:"newPostText",validate:[F.b,J]}),i.a.createElement("button",{className:U.a.postBtn,size:"sm"},"Add post")))))})),V=T,Y=a(15),z=Object(Y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(I.a)(t))}}}))(V),L=function(e){return e.profile?i.a.createElement("div",null,i.a.createElement(S,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile}),i.a.createElement(z,null)):i.a.createElement(p.a,null)},H=a(28),X=a(7),Q=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(L,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(X.d)(Object(Y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:I.c,getUserStatus:I.d,updateUserStatus:I.g,savePhoto:I.e,saveProfile:I.f}),H.f)(Q)}}]);
//# sourceMappingURL=3.82933a34.chunk.js.map