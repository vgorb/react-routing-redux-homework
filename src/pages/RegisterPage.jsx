import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../store/authSlice.js';
import { withPageLayout } from '../hoc/withPageLayout.jsx';

function RegisterPageComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('New User');
    const [email, setEmail] = useState('new-user@example.com');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            register({
                name,
                email,
            }),
        );

        navigate('/');
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Registration form</Card.Title>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="registerName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Enter name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="registerEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="registerPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter password"
                        />
                    </Form.Group>

                    <Button type="submit" variant="success">
                        Register
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export const RegisterPage = withPageLayout(RegisterPageComponent, 'Register');