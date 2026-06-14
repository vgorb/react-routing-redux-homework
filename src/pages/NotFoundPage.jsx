import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { withPageLayout } from '../hoc/withPageLayout.jsx';

function NotFoundPageComponent() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Page not found</Card.Title>
                <Card.Text>
                    The page you are looking for does not exist.
                </Card.Text>

                <Button as={NavLink} to="/" variant="primary">
                    Go to Home Page
                </Button>
            </Card.Body>
        </Card>
    );
}

export const NotFoundPage = withPageLayout(NotFoundPageComponent, '404');