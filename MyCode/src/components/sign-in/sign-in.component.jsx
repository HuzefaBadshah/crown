import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with ur email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput onChange={this.handleChange} label="email" name="email" value={this.state.email} />
                    <FormInput onChange={this.handleChange} label="password" name="password" value={this.state.password} />

                    <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton isGoogleSignIn type="submit" onClick={signInWithGoogle}>
                        Sign In with Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;