const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
  SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

  // //admin
  // ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
  // ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',
  // PROCESS_LOGOUT: 'PROCESS_LOGOUT',

  // //user
  // ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAIL: "SIGNUP_FAIL",
  ACTIVATION_SUCCESS: "ACTIVATION_SUCCESS",
  ACTIVATION_FAIL: "ACTIVATION_FAIL",
  USER_LOADED_SUCCESS: "USER_LOADED_SUCCESS",
  USER_LOADED_FAIL: "USER_LOADED_FAIL",
  AUTHENTICATED_SUCCESS: "AUTHENTICATED_SUCCESS",
  AUTHENTICATED_FAIL: "AUTHENTICATED_FAIL",
  PASSWORD_RESET_FAIL: "PASSWORD_RESET_FAIL",
  PASSWORD_RESET_SUCCESS: "PASSWORD_RESET_SUCCESS",
  PASSWORD_RESET_CONFIRM_FAIL: "PASSWORD_RESET_CONFIRM_FAIL",
  PASSWORD_RESET_CONFIRM_SUCCESS: "PASSWORD_RESET_CONFIRM_SUCCESS",
  GOOGLE_AUTH_SUCCESS: "GOOGLE_AUTH_SUCCESS",
  GOOGLE_AUTH_FAIL: "GOOGLE_AUTH_FAIL",
  FACEBOOK_AUTH_SUCCESS: "FACEBOOK_AUTH_SUCCESS",
  FACEBOOK_AUTH_FAIL: "FACEBOOK_AUTH_FAIL",
  LOGOUT: "LOGOUT",
  SHOW_LIST_ROOM: "SHOW_LIST_ROOM",
  SHOW_LIST_ROOM_FAIL: "SHOW_LIST_ROOM_FAIL",
  jOIN_ROOM_SUCCESS: "jOIN_ROOM_SUCCESS",
  jOIN_ROOM_FAIL : "jOIN_ROOM_FAIL",
  ROOM:'ROOM',
  MAkE_MOVE_SUCCESS: 'MAkE_MOVE_SUCCESS',
  MAkE_MOVE_FAIL: 'MAkE_MOVE_FAIL',
  UPDATE_BOARD_SUCCESS: 'UPDATE_BOARD_SUCCESS',
  UPDATE_BOARD_FAIL: 'UPDATE_BOARD_FAIL'

  
});

export default actionTypes;

export const pieces = {
    X: "X",
    O: "O"
}
