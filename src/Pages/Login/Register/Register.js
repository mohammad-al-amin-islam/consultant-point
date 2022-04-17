import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-100 '>
            <div className='w-50 mx-auto shadow-lg p-5 m-5 rounded h-100 bg-light'>
                <div className='text-center text-primary m-3'>
                    <h1>Consultant Point</h1>
                    <h4>Create an account</h4>
                </div>
                <Form>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='p-3 fs-5 border-0' type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='p-3 fs-5 border-0' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 fs-5 border-0' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='d-block fs-5 w-50 mx-auto p-3 border-0' variant="success" type="submit">
                        Register
                    </Button>
                </Form>
                <div className='mt-3 d-flex align-items-center justify-content-center'>
                    <div className='border w-25'></div> <p className='mx-4 my-2'>Or Log in With</p> <div className='border w-25'></div>
                </div>
                <button className='d-block fs-5 w-25 mx-auto p-3 border-0 my-2'>Google</button>
                <p className='text-center'>Already a member?<Link className='text-decoration-none' to='/login'>Login here</Link> </p>
            </div>
        </div>
    );
};

export default Register;