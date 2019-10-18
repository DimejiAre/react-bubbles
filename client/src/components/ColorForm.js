import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../state/actionCreators';

function ColorForm(props){
    const {postColor, colorForm, colorChange} = props;

    const submit = event => {
        event.preventDefault();
        postColor(colorForm);
    }
    return (
        <form className='color-form'>
        <h4>Add Color</h4>
        <label>Color</label>
        <input value={colorForm.color} onChange={colorChange} name='color' type='text'/>
        <label>hex code</label>
        <input value={colorForm.hex} onChange={colorChange} name='hex' type='text'/>
        <button type='submit' onClick={submit}>Submit</button>
        </form>
    )
    
}

export default connect(
    state => state,
    actionCreators
)(ColorForm);

