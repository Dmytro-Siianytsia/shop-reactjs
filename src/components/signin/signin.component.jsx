import { Component } from "react";

import CustomButton from "../button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.style.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
						label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
						label='Password'
          />
          <div className="buttons">
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn
