import { Container } from 'react-bootstrap';

export function withPageLayout(Component, title) {
    return function PageWithLayout(props) {
        return (
            <Container className="py-4">
                <h1 className="mb-4">{title}</h1>
                <Component {...props} />
            </Container>
        );
    };
}