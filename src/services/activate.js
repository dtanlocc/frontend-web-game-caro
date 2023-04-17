import axios from 'axios';

const verifyEmail = (uid, token) => {
  return axios.post('/auth/users/activation/', {
    uid: uid,
    token: token
  });
};

export { verifyEmail };
