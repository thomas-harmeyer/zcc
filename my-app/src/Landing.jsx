import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap//FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
const Landing = () => {
    return (
        <>
            <Row className="mb-4">
                <Col sm={{ span: 4, offset: 2 }}>
                    <InputGroup >
                        <InputGroup.Text className="bg-secondary">Email</InputGroup.Text>
                        <FormControl type="email" laceholder="example@gmail.com" />
                    </InputGroup>
                </Col>
                <Col sm={{ span: 4 }}>
                    <InputGroup >
                        <InputGroup.Text className="bg-secondary">Password</InputGroup.Text>
                        <FormControl type="password" />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={{ span: 4, offset: 4 }}>
                    <InputGroup >
                        <InputGroup.Text className="bg-secondary">Subdomain</InputGroup.Text>
                        <FormControl />
                        <InputGroup.Text>.zendesk.com</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm="auto">
                    <Button>
                        Submit
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Landing;