import * as types from './actionTypes';
import axios from 'axios';

const colorsApiUrl = 'http://localhost:5000/api/login'

export const inputChange = (event) => {
    return {
        type: types.ON_LOGIN_FORM_CHANGE,
        payload: {
            key: event.target.name,
            value: event.target.value
        }
    }
}

export const login = (loginForm,history) => dispatch => {
    axios.post(colorsApiUrl, loginForm)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/colors')
        dispatch({type: types.ON_SUBMIT})
    })
    .catch(error => {
        alert(error.response.data)
    })
}