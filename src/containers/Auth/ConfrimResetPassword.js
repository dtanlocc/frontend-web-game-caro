import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';
// import { path } from '../../utils'
import { reset_password_confirm } from "../../store/actions";
import "./ConfirmResetPassword.scss";

class ConfirmResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uid:"",
        token:"",
      // email: '',
      password: "",
      re_password: "",
      // username:'',
      isShowPassword: false,
      isShowRePassword: false,
      requestSent: false,
    };
  }

  handleOnChangeRePassword = (event) => {
    this.setState({
      re_password: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  };

  handleHideShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleHideShowRePassword = () => {
    this.setState({
      isShowRePassword: !this.state.isShowRePassword,
    });
  };
  
  handleNewPassword= async (e) => {
    // console.log('all state: ',this.state)
    e.preventDefault();
    if (this.state.password !== this.state.re_password) {
    alert('Passwords do not match');
    
    return;
    }
    try{
        const { match } = this.props;
    const uid = match.params.uid;
    const token = match.params.token;
        console.log(token,"/",uid);
        this.props.reset_password_confirm(uid,token,this.state.password,this.state.re_password)
        alert("Kiểm tra email để verify!!!");
        this.setState({ requestSent: true });
        // window.location.href=path.LOGIN
    }catch (err) {
        alert("bug");
        console.log(err)
}
    
}

  render() {
    
    if (this.state.requestSent) {
        return <Redirect to='/' />;
      }
      return (
        
          <div className="ConfirmResetPassword-background">
              <div className="ConfirmResetPassword-container">
                  <div className="ConfirmResetPassword-content row">
                      <div className="col-12 text-ConfirmResetPassword">
                          Reset Password
                      </div>
                      <div className='col-12 form- ConfirmResetPassword-inputs'>
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

                        <div className='col-12 form- ConfirmResetPassword-inputss'>
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
                      <div className="col-12">
                          <button
                              className="btns-ConfirmResetPassword"
                              onClick={(e) => this.handleNewPassword(e)}>
                              Change Password
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default connect(mapStateToProps,{reset_password_confirm})(ConfirmResetPassword);
