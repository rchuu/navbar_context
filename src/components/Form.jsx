import React, { useContext } from 'react';
import Wrapper from './Wrapper'

const Form = () => {

    const context = useContext(Wrapper);
    const onChangeHandler = e => {
        e.preventDefault();
        context.setState(
            context.state = e.target.value
        )
    }

    return (
        <div>
            <span>Your Name:  </span>
            <input type="text" name="firstName" onChange={onChangeHandler} />
        </div>
    )
}

export default Form;