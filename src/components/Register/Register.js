import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Register.css';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from)
    const handleGoogleLogin =()=>{
     signInUsingGoogle()
     .then(result=>{
         history.push(redirect_uri)
 
     })
    }
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const toggoleLogin =e=>{
        setIsLogin(e.target.checked);

    }
    const handleNameChange =e=>{
        setName(e.target.value);

    }
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
   const handleRegistration =e =>{
       e.preventDefault()
       if(password.length<6){
           setError('Password must be at least 6 character');
           return
       }
       if(isLogin){
        processLogin(email,password);
    }
    else{
         registerNewUser(email,password);
    }
       
   }
   const processLogin =(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        setError(error.message)
    })
   }
   const handlePassword=e=>{
       setPassword(e.target.value);
   }
   const registerNewUser=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        setError('');
        verifyEmail();
        setUserName();
    })
   }
   const setUserName=()=>{
    updateProfile(auth.currentUser, {displayName:name})
    .then(result=>{

    })
   }
   const verifyEmail =()=>{
       sendEmailVerification(auth.currentUser)
       .then(result=>{

       })
   }
   const handleResetPassword =()=>{
       sendPasswordResetEmail(auth,email)
       .then(result=>{

       })
   }
    return (
        <div className="login-form">
            <div>
                <form onSubmit={handleRegistration}>
                    <h3>{isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div><input onBlur={handleNameChange} className="input-field" type="text" name="" id="" placeholder="Your Name" /> </div>}<br />
                    <input onBlur={handleEmailChange} className="input-field" type="email" name="" id="" placeholder="Enter Your Email" required /> <br />
                    <input onBlur={handlePassword} className="input-field" type="password" name="" id="" placeholder="Ënter Your Password" required/> <br />
                    <span className="text-danger">{error}</span> <br />
                    <input onChange={toggoleLogin} type="checkbox" id="vehicle1" name="register" value="Bike"/>
                        <label for="register"> Already Register?</label>
                     <br /><button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <button type="button" onClick={handleResetPassword} className="btn btn-danger m-2"> Reset Password</button>
                <button onClick={handleGoogleLogin} className="btn-style"> Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;
