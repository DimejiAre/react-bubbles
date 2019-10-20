import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import './scss/Login.scss';

const Login = (props) => {
  const { inputChange, loginForm, login, history } = props;

  const submit = event => {
    event.preventDefault();
    login(loginForm, history);
  }
  return (
    <div className='login-page'>
      <h1>Welcome to the Bubble App!</h1>
      <form className='login-form'>
        <label>Username</label>
        <input value={loginForm.username} onChange={inputChange} name='username' type='text' placeholder='username' />
        <label>Password</label>
        <input value={loginForm.password} onChange={inputChange} name='password' type='password' placeholder='password' />
        <button type='submit' onClick={submit}>Login</button>
      </form>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(Login);
