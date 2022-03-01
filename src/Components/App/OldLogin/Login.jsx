import React from "react";
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

export default function Login() {
    return (

        <div className="Login">
            <div className="Nav">
                <NavigationBar />
            </div>
            <div className="Main">
                <Container>
                    <Row>
                        <Col>
                            <div className="mb-3">
                                <h2>New User?</h2>
                            </div>

                            Login with google authentication column
                        </Col>
                        <Col>
                            <div className="mb-3">
                                <h2>Login using credentials</h2>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>
                                        Email address or Contact Number
                                    </Form.Label>
                                    <Form.Control className="placehldr" type="email" placeholder="Enter email or Contact number" />
                                    <Form.Text className="text-muted">
                                        We'll never share your details with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="pass">Password</Form.Label>
                                    <Form.Control className="placehldr" type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <div className="for-pass"><a href="#">Forgot Password?</a></div>
                                </Form.Group>
                                <Form.Group className="tandc" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="By login below, you agree to the Terms and Conditions of GrihSangini" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>

    );
}

