import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Ceckout = () => {
    return (
        <div className='w-100 '>
            <div className='w-50 mx-auto shadow-lg p-5 m-5 rounded h-100 bg-light'>
                <div className='text-center text-primary m-3'>
                    <h1>Consultant Point</h1>
                    <h4>Checkout Form</h4>
                </div>
                <Form >
                    <Form.Group className="mb-3 " controlId="formBasicText">
                        <Form.Control className='p-3 fs-5 border-0' type="text" name='name' placeholder="User  Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='p-3 fs-5 border-0' type="email" name='email' placeholder="User email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control className='p-3 fs-5 border-0' type="text" name='address' placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control className='p-3 fs-5 border-0' type="text" name='number' placeholder="Phone Number" required />
                    </Form.Group>
                    <Button className='d-block fs-5 w-50 mx-auto p-3 border-0' variant="success" type="submit">
                        Checkout
                    </Button>
                </Form>


            </div>
        </div>
    );
};

export default Ceckout;