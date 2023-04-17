import axios from 'axios';

class handleRegisterAPI {
  static createUser(email, name, password, rePassword) {
    const data = {
      email: email,
      name: name,
      password: password,
      re_password: rePassword
    };
    const config = {
      method: 'post',
      url: process.env.REACT_APP_BACKEND_URL+'/v1/api/auth/users/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(config);
  }
}

const handleLoginAPI = (email, password) => {
  return axios.post('/api/v1/user/login/', { email, password });
};


export { handleLoginAPI, handleRegisterAPI };
