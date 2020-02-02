import React, {Component} from "react";
import './sign-up.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, displayName)
            // clear up the form after signing up
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.log(e)
        }
        // clean state if any error happens:
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        required
                        handleChange={this.handleChange}

                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                        handleChange={this.handleChange}
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp
