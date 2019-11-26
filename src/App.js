import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ParticleAnimation from "./components/common/BackgraundAnimation/ParticleAnimation";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <main className='appPage'>
                <HeaderContainer/>
                <Navbar/>
                <Main/>
                <Footer/>
                <ParticleAnimation/>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};


export default SocialJSApp;
