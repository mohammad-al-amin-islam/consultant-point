import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FaqArea = () => {
    const handleButton = (event) => {
        event.preventDefault();
        toast('Submitted Successfully')
    }
    return (
        <div className='container my-5 shadow-lg p-3'>
            <h1 className='text-center'>Have Any Question?</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Control className="p-3" type="Text" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control className="p-3" type="Email" placeholder="Your Email" required />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Control className="p-3" type="text" placeholder="Your Phone" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Select className='p-3' defaultValue="Services">
                            <option>Services</option>
                            <option>Risk Management</option>
                            <option>Tax Management</option>
                            <option>Financial Advice</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <FloatingLabel controlId="floatingTextarea2" label="Messages">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                            required />
                    </FloatingLabel>
                </Row>

                <Button onClick={handleButton} className='d-block mx-auto w-25 mt-3' variant="primary" type="submit">
                    Get In Touch
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default FaqArea;