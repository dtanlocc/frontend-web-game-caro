import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import { Link } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';
import { path } from '../../utils';
// import axios from "axios";
// import * as actions from "../../store/actions";
import './Register.scss';
// import { handleRegisterAPI } from '../../services/userService';
import { register } from '../../store/actions';
// import { FormattedMessage } from 'react-intl';
// import { path } from '../../utils';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            re_password:'',
            username:'',
            isShowPassword:false,
            isShowRePassword:false
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username:event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangeRePassword = (event) => {
        this.setState({
            re_password:event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password:event.target.value
        })
        console.log(event.target.value)
    }

    

    handleRegister= async (e) => {
        // console.log('all state: ',this.state)
        e.preventDefault();
        if (this.state.password !== this.state.re_password) {
        alert('Passwords do not match');
        return;
        }
        try{
            this.props.register(this.state.username,this.state.email,this.state.password,this.state.re_password)
            alert("Kiểm tra email để verify!!!");
            // window.location.href=path.LOGIN
        }catch (err) {
            alert("bug");
            console.log(err)
    }
        
    }

    handleHideShowPassword =() =>{
        this.setState({
            isShowPassword : !this.state.isShowPassword
        })
    }
    handleHideShowRePassword =() =>{
        this.setState({
            isShowRePassword : !this.state.isShowRePassword
        })
    }

    
    
    render() {


        return (
            <div className='login-backgrounds'>
                <div className='login-containers'>
                    <div className='login-contents row'>
                        <div className='col-12 texts-login'>
                            Register
                        </div>
                        <div className='col-12 form-group login-inputs'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Enter your Email' value={this.state.email} onChange={(event) => this.handleOnChangeEmail(event)}></input>
                        </div>

                        <div className='col-12 form-group login-inputs'>
                            <label>Username</label>
                            <input type='text' className='form-control' placeholder='Enter your name' value={this.state.username} onChange={(event) => this.handleOnChangeUsername(event)}></input>
                        </div>

                        <div className='col-12 form- login-inputs'>
                            <label>Password</label>
                            <div >
                                <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter your password' value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)}></input>
                                <span onClick={() => { this.handleHideShowPassword() }}>
                                    <div className='customs-input-password'>
                                        <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                    </div>

                                </span>
                            </div>


                        </div>

                        <div className='col-12 form- login-inputss'>
                            <label>RePassword</label>
                            <div >
                                <input type={this.state.isShowRePassword ? 'text' : 'password'} className='form-control' placeholder='Enter your repassword' value={this.state.re_password} onChange={(event) => this.handleOnChangeRePassword(event)}></input>
                                <span onClick={() => { this.handleHideShowRePassword() }}>
                                    <div className='customs-input-re_password'>
                                        <i className={this.state.isShowRePassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                    </div>

                                </span>
                            </div>


                        </div>

                        <div className='col-12'>
                            <Link to={path.LOGIN} className='logins'>I have a account</Link>
                        </div>

                        <div className='col-12'>
                            <button className='btns-login' onClick={(e) => this.handleRegister(e)}>Register</button>
                        </div>

                        {/* <div className='col-12'>
                            
                            <button className='btns-login' onClick={()=>{this.handleLogin()}}>Login</button>
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

// const mapDispatchToProps = dispatch => {
//     return {
//         register: (username,email,)
//     };
// };

export default connect(mapStateToProps,{register})(Register);
