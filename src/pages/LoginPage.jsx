import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice.js';
import { withPageLayout } from '../hoc/withPageLayout.jsx';

function LoginPageComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('student@example.com');
    const [password, setPassword] = useState('123456');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            login({
                name: 'Student',
                email,
            }),
        );

        navigate('/');
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Login form</Card.Title>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export const LoginPage = withPageLayout(LoginPageComponent, 'Login');