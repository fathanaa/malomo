import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './RnDResearch.css'

const RnDResearch = () => {
    return(
        <div className="RnDResearch">
            <Container>
                <Row>
                    <Col>
                        <Image fluid
                            src="https://i.ibb.co/3r75wm9/Innovation-GA1.png" 
                            alt="Innovation-GA1" 
                            border="0"
                            className="imagerndres"> 
                        </Image>        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RnDResearch