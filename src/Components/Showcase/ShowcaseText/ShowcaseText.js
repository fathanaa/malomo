import { Col, Container, Row } from "react-bootstrap"
import './ShowcaseText.css'

const ShowcaseText = () => {
    return(
        <Container fluid className="justify-content-md-center">
            <Row>
                <Col>
                    <p className="ShowcaseText-1">MALOMO TEKNOLOGI </p>
                    <p className="ShowcaseText-1">INDONESIA</p>
                </Col>
            </Row>
            <Row>
                <Col>We develop electronical engineering and machines</Col>
            </Row>
        </Container>
    )
}

export default ShowcaseText