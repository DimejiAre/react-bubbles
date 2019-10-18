import * as types from './actionTypes';
import axios from 'axios';
import axiosWithAuth from '../axios';

const colorsApiUrl = 'http://localhost:5000/api'

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
    axios.post(colorsApiUrl + '/login', loginForm)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/bubbles')
        dispatch({type: types.ON_SUBMIT})
    })
    .catch(error => {
        alert(error.response.data)
    })
}

export const addColors = colors => {
    return {
        type: types.ADD_COLORS,
        payload: colors
    }
}

export const getColors = () => dispatch => {
    axiosWithAuth().get(colorsApiUrl + '/colors')
    .then(res => {
        dispatch(addColors(res.data))
    })
    .catch(error => {
        alert(error.response.data)
    })
}