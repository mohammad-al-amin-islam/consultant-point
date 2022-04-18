import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //for reset password
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


    const handleSubmitLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);

    }

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, navigate, from]);

    if (loading || sending) {
        return <Loading></Loading>
    }

    let getError;
    if (error || resetError) {
        getError = <p>{error?.message} {resetError?.message}</p>
    }

    //reset button handleling
    const handleResetBtn = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast('Enter Email');
        }

    }

    return (
        <div className='w-100 form-responsive-contaner'>
            <div className=' form-container mx-auto shadow-lg p-5 m-5 rounded h-100 bg-light'>
                <div className='text-center text-primary m-3'>
                    <h1>Consultant Point</h1>
                    <h4>Sign in to your account</h4>
                </div>
                <Form onSubmit={handleSubmitLogin}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className='p-3 fs-5 border-0' type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 fs-5 border-0' type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    {getError}
                    <p>Forget Password? <button onClick={handleResetBtn} className="btn btn-link text-decoration-none">Reset Here</button></p>
                    <Button className='d-block fs-5 w-50 mx-auto p-3 border-0 mb-3' variant="success" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='text-center'>New To Consultant Point? <Link className='text-decoration-none' to='/register'>Register here</Link> </p>
                <SocialSignIn></SocialSignIn>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;