import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mx-auto mt-4">
        <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button> <br />
        <Form.Text className="text-success">
           Don't have an account <Link to='/register'> Register</Link>
        </Form.Text>
        <Form.Text className="text-danger">
             
        </Form.Text>
        <Form.Text className="text-danger">
             
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
