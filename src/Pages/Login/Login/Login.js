import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmitLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, navigate, from]);

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-100 '>
            <div className='w-50 mx-auto shadow-lg p-5 m-5 rounded h-100 bg-light'>
                <div className='text-center text-primary m-3'>
                    <h1>Consultant Point</h1>
                    <h4>Sign in to your account</h4>
                </div>
                <Form onSubmit={handleSubmitLogin}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='p-3 fs-5 border-0' type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 fs-5 border-0' type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button className='d-block fs-5 w-50 mx-auto p-3 border-0' variant="success" type="submit">
                        Login
                    </Button>
                </Form>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default Login;