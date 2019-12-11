import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}
                    status={this.props.status}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    status: state.profilePage.status


});

export default connect(mapStateToProps, {logout})(HeaderContainer);