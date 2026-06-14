import { Card, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { withPageLayout } from '../hoc/withPageLayout.jsx';

function HomePageComponent() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <>
            <Alert variant="info">
                This project demonstrates React Router, Redux Toolkit, React-Bootstrap and HOC pattern.
            </Alert>

            <Card>
                <Card.Body>
                    <Card.Title>Welcome!</Card.Title>

                    {isAuthenticated ? (
                        <Card.Text>
                            You are logged in as <strong>{user.name}</strong>. Your email is{' '}
                            <strong>{user.email}</strong>.
                        </Card.Text>
                    ) : (
                        <Card.Text>
                            You are not logged in. Please use the Login or Register page.
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}

export const HomePage = withPageLayout(HomePageComponent, 'Home Page');