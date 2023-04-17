import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';
// import { path } from '../../utils'

import * as actions from "../../store/actions";

import './Login.scss';
// import Register from './Register';
// import Header from '../Header/Header';
// import { FormattedMessage } from 'react-intl';
// import { handleLoginAPI } from '../../services/userService';
import { login } from '../../store/actions';
import { path } from '../../utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false ,
    
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password:event.target.value
        })
        console.log(event.target.value)
    }
    
    handleLogin = async () => {
        try
        {
            this.props.login(this.state.email,this.state.password)
            // console.log(t)
            // window.location.href=path.HOME
        }catch (err) {
            console.log(err)
        }
        
    }

    handleHideShowPassword =() =>{
        this.setState({
            isShowPassword : !this.state.isShowPassword
        })
    }
    handleRegister =() =>{
        window.location.href=path.REGISTER
    }

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>
                            Login
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Enter your email' value={this.state.email} onChange={(event) => this.handleOnChangeEmail(event)}></input>
                        </div>

                        <div className='col-12 form- login-input'>
                        <label>Password</label>
                            <div>
                            <input type={this.state.isShowPassword?'text':'password'} className='form-control' placeholder='Enter your password' value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)}></input>
                            <span onClick={()=>{this.handleHideShowPassword()}}>
                                <div className='custom-input-password'>
                                <i className={this.state.isShowPassword?"far fa-eye-slash":"far fa-eye"}></i>
                                </div>
                                
                            </span>
                            </div>
                            
                            
                        </div>
                        <div className='col-12'>
                        <Link to={path.REPASS} className='register'>Forgot password</Link>
                        </div>
                        <div className='col-12'>
                            <Link to={path.REGISTER} className='register'>I don'have account</Link>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={()=>this.handleLogin()}>Login</button>
                        </div>

                        {/* <div className='col-12'>
                            
                            <button className='btn-login' onClick={()=>{this.handleRegister()}}>Register</button>
                        </div> */}
                        
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        // LoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, {login})(Login);
