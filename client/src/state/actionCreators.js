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

export const colorChange = (event) => {
    return {
        type: types.ON_COLOR_FORM_CHANGE,
        payload: {
            key: event.target.name,
            value: event.target.value
        }
    }
}

export const login = (loginForm, history) => dispatch => {
    axios.post(colorsApiUrl + '/login', loginForm)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            history.push('/bubbles')
            dispatch({ type: types.ON_SUBMIT })
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

export const updateColors = color => dispatch => {
    axiosWithAuth().put(colorsApiUrl + '/colors/' + color.id, color)
        .then(res => {
            dispatch(getColors(res.data))
        })
        .catch(error => {
            alert(error.message)
        })
}

export const removeColor = (color, setEditing) => dispatch => {
    axiosWithAuth().delete(colorsApiUrl + '/colors/' + color.id, color)
        .then(res => {
            setEditing(false)
            dispatch(getColors(res.data))
        })
        .catch(error => {
            alert(error.message)
        })
}

export const postColor = color => dispatch => {
    const params = {
        color: color.color,
        code: {
            hex: color.hex
        }
    }
    axiosWithAuth().post(colorsApiUrl + '/colors', params)
        .then(res => {
            dispatch(getColors(res.data))
            dispatch({ type: types.ON_SUBMIT })
        })
        .catch(error => {
            alert(error.message)
            dispatch({ type: types.ON_SUBMIT })
        })
}