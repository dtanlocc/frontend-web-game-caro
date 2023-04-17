import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import {Link } from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';


// import * as actions from "../../store/actions";
import './Repassword.scss';
import { path } from '../../utils';
import { reset_password } from '../../store/actions';
// import { FormattedMessage } from 'react-intl';
// import { path } from '../../utils';

class Repassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:''
        }
    }


    handleOnChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
        console.log(event.target.value)
    }

    handleRepassword =()=>{
        try
        {
            this.props.reset_password(this.state.email)
            alert("Check your gmail!")
            window.location.href=path.LOGIN
        }catch (err) {
            alert("bug");
            console.log(err)
        }
        
    }

    render() {


        return (
            <div className='login-backgrounds'>
                <div className='login-containers'>
                    <div className='login-contents row'>
                        <div className='col-12 texts-login'>
                            Reset Password
                        </div>
                        <div className='col-12 form-group login-inputs'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Enter your email' value={this.state.email} onChange={(event) => this.handleOnChangeEmail(event)}></input>
                        </div>

                        <div className='col-12'>
                            <Link to={path.LOGIN} className='logins'>I have a account</Link>
                        </div>

                        <div className='col-12'>
                            <Link to={path.REGISTER} className='logins'>I don't have a account</Link>
                        </div>

                        <div className='col-12'>
                            <button className='btns-login' onClick={() => this.handleRepassword()}>Send Request</button>
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

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, {reset_password})(Repassword);