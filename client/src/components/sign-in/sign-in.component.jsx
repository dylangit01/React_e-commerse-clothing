import React, {useState} from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";



const SignIn =() => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // this.useState({email: '', password: ''})
        } catch (e) {
            console.log(e)
        }
    };

   const handleChange = event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    };

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={email}
                        label='email'
                        required
                        handleChange={handleChange}
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={password}
                        label='password'
                        required
                        handleChange={handleChange}
                    />

                    <div className='buttons'>
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    };

export default SignIn















// Original codes not using Hook:

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//
//     handleSubmit = async event => {
//         event.preventDefault()
//         const {email, password} = this.state
//
//         try {
//             await auth.signInWithEmailAndPassword(email, password)
//             this.setState({email: '', password: ''})
//         } catch (e) {
//             console.log(e)
//         }
//     };
//
//     handleChange = event => {
//         const {name, value} = event.target;
//         this.setState({[name]: value})
//     }
//
//     render() {
//         const {email, password} = this.state
//         return (
//             <div className='sign-in'>
//                 <h2 className='title'>I already have an account</h2>
//                 <span>Sign in with your email and password.</span>
//
//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput
//                         name='email'
//                         type="email"
//                         value={email}
//                         label='email'
//                         required
//                         handleChange={this.handleChange}
//                     />
//                     <FormInput
//                         name='password'
//                         type="password"
//                         value={password}
//                         label='password'
//                         required
//                         handleChange={this.handleChange}
//                     />
//
//                     <div className='buttons'>
//                         <CustomButton type="submit"> SIGN IN </CustomButton>
//                         <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
//
// export default SignIn
