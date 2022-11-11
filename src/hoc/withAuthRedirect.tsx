import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {MapStateToPropsForRedirectType} from "../components/Profile/ProfileContainer";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component: ComponentType<T>){

    function RedirectComponent(props:MapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
}