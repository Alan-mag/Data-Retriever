import moment from 'moment';
import {firebase, firebasedb} from '../../firebase/firebase';

export const signup = (user, uid) => ({
  type: 'SIGN-UP',
  uid: uid,
  user: user
});

export const sendError = (error) => ({
  type: 'SEND-ERROR',
  error: error.message,
})

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  localStorage.clear();
  return() => {
    return firebase.auth().signOut();
  };
};

export const login = (uid, user) => ({
  type: 'LOGIN',
  uid: uid,
  user: user
});

export const startLogin = (cred) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.password).then((user) => {
      firebasedb.ref(`users/${user.uid}`).once('value').then((snapshot) => {
        if (snapshot.exists()) {
          let cur = snapshot.val();
          localStorage.setItem('uid', user.uid);
          const locInfo = {
            username: cur.username,
            email: cur.email,
          }
          localStorage.setItem('user', JSON.stringify(locInfo));
          return dispatch(login(user.uid, cur));
        }
      })
    }).catch((error) => {
      const { code, message } = error;
      dispatch(sendError(error));
      console.log(error);
    })
  }
};

export const startSignUp = (user) => (dispatch) => {
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((newUser) => {
    firebasedb.ref(`users/${newUser.uid}`).update(user).then((ref) => {
      localStorage.setItem('uid', user.uid);
      const locInfo = {
        username: user.username,
        email: user.email,
      }
      localStorage.setItem('user', JSON.stringify(locInfo));
      return dispatch(signup(user, newUser.uid));
    })
  })
};