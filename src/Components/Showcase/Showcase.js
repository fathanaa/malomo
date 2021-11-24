import './Showcase.css'
import ShowcaseText from './ShowcaseText/ShowcaseText.js'
import ShowcaseImage from './ShowcaseImage/ShowcaseImage.js'
import { Row,Col } from 'react-bootstrap'

const Showcase = () => {
    return(
        <div className="Showcase">
            <Row>
                <Col sm={8} className="ShowcaseText">
                    <ShowcaseText  />
                </Col>
                <Col sm={4}>
                    <ShowcaseImage />
                </Col>
            </Row>

        </div>
    )
}

export default Showcase