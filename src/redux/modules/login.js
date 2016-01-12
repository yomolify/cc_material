const SHOW = 'redux-example/SHOW';
const SHOW_SUCCESS = 'redux-example/SHOW_SUCCESS';
const SHOW_FAIL = 'redux-example/SHOW_FAIL';
const HIDE = 'redux-example/HIDE';
const HIDE_SUCCESS = 'redux-example/HIDE_SUCCESS';
const HIDE_FAIL = 'redux-example/HIDE_FAIL';
const SIGNIN = 'redux-example/SIGNIN';
const SIGNIN_SUCCESS = 'redux-example/SIGNIN_SUCCESS';
const SIGNIN_FAIL = 'redux-example/SIGNIN_FAIL';

const initialState = {
  loginModal: false
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW:
      return {
        ...state
      };
    case SHOW_SUCCESS:
    console.log('123')
      return {
        ...state,
        loginModal: true,
      };
    case SHOW_FAIL:
      return {
        ...state
      };
    case HIDE:
      return {
        ...state
      };
    case HIDE_SUCCESS:
    console.log('in action')
      return {
        ...state,
        loginModal: false
      };
    case HIDE_FAIL:
      return {
        ...state
      };
    case SIGNIN:
      return {
        ...state
      };
    case SIGNIN_SUCCESS:
    console.log('in action')
      return {
        ...state,
        loginModal: false
      };
    case SIGNIN_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
}

export function openLoginModal() {
  return {
    types: [SHOW, SHOW_SUCCESS, SHOW_FAIL],
    promise: () => new Promise((resolve) => resolve({}))
  };
}

export function hide() {
  console.log('in function')
  return {
    types: [HIDE, HIDE_SUCCESS, HIDE_FAIL],
    promise: () => new Promise((resolve) => resolve({}))
  };
}

export function signin() {
  console.log('in functioan')
  return {
    types: [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL],
    promise: () => new Promise((resolve) => resolve({}))
  };
}

// userSchema - in post add function which generates 16 digit random string, add to userschema verification-token: string
// create link api/v1/auth/validate-user?token=asdasdadasads&email=sadasda and send to email
// authcontroller - validateToken() match token from email and token
// if match, then email verified to true and delete token
// bad request if already verified, email not exist, wrong token
// and in login controller check for email is verified

// forgot password token(string) add to userSchema
// api/auth/forgotpassword takes in email and generates token and saves to the user & creates the link and sends email on clicking forgotpassword
// on 200 an email has been sent to
// email has link to go to localhost:3000/forgotpassword (this link also has forgotPasswordToken) with input fields for new and confirm,
// on enter, send token and email and new password and it will authorize

