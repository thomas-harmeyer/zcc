import Card from "react-bootstrap/Card";

const Problem = () => {
    return (
        <>
            <Card bg="warning" border="dark" text="light" >
                <Card.Body>
                    <Card.Title>
                        Sorry, there was a problem connecting to the server. Check your credentials and network connection, and try again.
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default Problem;