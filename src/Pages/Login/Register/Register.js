import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialSignIn from '../../Shared/SocialSignIn/SocialSignIn';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Register = () => {

    //create user and also verification mail authentication
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, navigate, from]);


    if (loading) {
        return <Loading></Loading>
    }


    //handle form submit
    const handleFromSubmitReg = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
    }

    let getError;
    if (error) {
        getError = <p>{error?.message}</p>
    }
    return (
        <div className='w-100 '>
            <div className='form-container mx-auto shadow-lg p-5 m-5 rounded h-100 bg-light'>
                <div className='text-center text-primary m-3'>
                    <h1>Consultant Point</h1>
                    <h4>Create an account</h4>
                </div>
                <Form onSubmit={handleFromSubmitReg}>
                    <Form.Group className="mb-3 " controlId="formBasicText">
                        <Form.Control className='p-3 fs-5 border-0' type="text" name='name' placeholder="Full  Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='p-3 fs-5 border-0' type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 fs-5 border-0' type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    {getError}
                    <Button className='d-block fs-5 w-50 mx-auto p-3 border-0 mb-3' variant="success" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='text-center'>Already a member?<Link className='text-decoration-none' to='/login'>Login here</Link> </p>

                <SocialSignIn></SocialSignIn>

            </div>
        </div>
    );
};

export default Register;