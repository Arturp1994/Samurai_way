import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type MapStateToPropsType={
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType={
    getAuthUserData:()=>void
}

type HeaderContainerType= MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType>{

    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer)