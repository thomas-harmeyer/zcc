import Card from "react-bootstrap/Card";

const Problem = () => {
    return (
        <>
            <Card bg="warning" border="light" text="light" >
                <Card.Body>
                    <Card.Title>
                        Sorry, there was a problem encountered when we tried connecting to the server.
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default Problem;