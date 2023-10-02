import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col xl={6} lg={6} md={6}>
                            <p>&copy; Made with Love. All Right Reserved.</p>
                        </Col>
                        <Col xl={6} lg={6} md={6} className="text-end">
                            <p>Designed By <span>Omaya Group</span></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;