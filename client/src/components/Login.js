import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const {inputChange, loginForm, login, history} = props;

  const submit = event => {
    event.preventDefault();
    login(loginForm, history);
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label>username</label>
        <input value={loginForm.username} onChange={inputChange} name='username' type='text' placeholder='username'/>
        <label>username</label>
        <input value={loginForm.password} onChange={inputChange} name='password' type='password' placeholder='username'/>
        <button type='submit' onClick={submit}>Login</button>
      </form>
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(Login);
