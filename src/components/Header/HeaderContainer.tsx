import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType={
    isAuth: boolean
    login: string
}

type MapDispatchToPropsType={
    setUserData:(id: number, email: string, login: string)=>void
}

type HeaderContainerType= MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerType>{

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login}= response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)