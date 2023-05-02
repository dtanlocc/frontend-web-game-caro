import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { withRouter, Link } from 'react-router-dom';
import { get_info } from '../../store/actions';
import './Info.scss';
import { path } from '../../utils';

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      id: '',
      email: ''
    };
  }

  componentDidMount() {
    this.props.get_info()
      .then(response => {
        this.setState({
          username: response.name,
          email: response.email,
          id: response.id
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { username, email, id } = this.state;
    console.log(this.state);
    return (
        <div className='userInfo-background'>
        <div className='userInfo-container'>
            <div className='userInfo-content row'>
                <div className='col-12 text-userInfo'>
                    User Information
                </div>
                <div className='col-12 form-group userInfo-input'>
                    <label>ID:</label>
                    <span className='t' >{id}</span>
                </div>
                <div className='col-12 form-group userInfo-input'>
                <label>User Name: </label>
                    <span className='t'>{username}</span>
                </div>

                <div className='col-12 form-group userInfo-input'>
                <label>Email:</label>
                    <span className='t'> {email}</span>
                </div>     

                <div className='col-12'>
                    <Link to={path.REPASS} className='change-password'>Thay đổi mật khẩu.</Link>
                </div>          
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
  });
  
  export default connect(mapStateToProps,{get_info})(withRouter(UserInfo));
