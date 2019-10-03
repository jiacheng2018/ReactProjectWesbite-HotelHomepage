import React, { Component,Fragment } from 'react'
import SignUp from '../components/SignUp';
import Todo from '../components/Todo';

export default class SignupForm extends Component {
    render() {
        return (
            <Fragment>
                <SignUp />
                <Todo/>
            </Fragment>
        )
    }
}
