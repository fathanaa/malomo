import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './RnDDev.css'

const RnDDev = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image fluid
                            src="https://i.ibb.co/JFK8BTv/Research-GA2.png" 
                            alt="Innovation-GA1" 
                            border="0"
                            className="imagernddev"> 
                        </Image>        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RnDDev