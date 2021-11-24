import { Col, Container, Row } from "react-bootstrap"
import RnDDev from './RnDDev/RnDDev.js'
import RnDResearch from "./RndResearch/RnDResearch.js"
import './RnD.css'

const RnD = () => {
    return(
        <div className="RnD">
            <Container >
                <Row>
                    <Col><RnDDev /></Col>
                    <Col><RnDResearch /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default RnD