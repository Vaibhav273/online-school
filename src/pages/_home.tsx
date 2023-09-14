import { Button, Col, Container, Row } from "react-bootstrap";

import home_image from "../assets/images/home-image.png";
import cardScience from "../assets/images/science.png";
import cardScience1 from "../assets/images/calculating.png";
import cardScience2 from "../assets/images/earth.png";
import cardScience3 from "../assets/images/chemistry.png";
import box_image from "../assets/images/box-image.png";
import { FaArrowRight } from 'react-icons/fa';
import Search from "antd/es/input/Search";


function Home() {

    const onSearch = async () => {

    }

    return (
        <>

            <Container>
                <Row>
                    <Col xl={7} className="homeTopText">
                        <h1>Let's Learn with Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button className="btn btn-primary">Click Here <FaArrowRight /></Button>
                    </Col>
                    <Col xl={5} className="homeTopImage">
                        <img
                            src={home_image}
                            className="align-top img-fluid"
                            alt="Welcome to Bolier Inspectorate"
                        />
                    </Col>
                </Row>
            </Container>
            <Col xl={12} className="homeSearch">
                <Container>
                    <Search placeholder="Search for Course" onSearch={onSearch} />
                </Container>
            </Col>
            <Container>
                <Col xl={12} className="pageTitle">
                    <h3>Title Page</h3>
                    <div className="divider div-transparent div-stopper"></div>
                </Col>
                <Row>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardScience}
                                className="align-top logo img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                            <h4>Chapter 1</h4>
                            <p>For Science</p>
                            <Button className="btn btn-outline-dark">Go to Chapter <FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardScience1}
                                className="align-top logo img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                            <h4>Chapter 1</h4>
                            <p>For Maths</p>
                            <Button className="btn btn-outline-dark">Go to Chapter <FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardScience2}
                                className="align-top logo img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                            <h4>Chapter 1</h4>
                            <p>For Geology</p>
                            <Button className="btn btn-outline-dark">Go to Chapter <FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardScience3}
                                className="align-top logo img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                            <h4>Chapter 1</h4>
                            <p>For Chemestry</p>
                            <Button className="btn btn-outline-dark">Go to Chapter <FaArrowRight /></Button>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Col xl={12} className="schoolBox">
                <Container>
                    <Row>
                        <Col xl={8} className="box-text">
                            <h4>Let Learn with Us !!</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </Col>
                        <Col xl={4} className="box-image">
                            <img
                                src={box_image}
                                className="align-top img-fluid"
                                alt="Welcome to Bolier Inspectorate"
                            />
                        </Col>
                    </Row>
                </Container>
            </Col>

            <Col xl={12} className="mt-3">
            
            </Col>
        </>
    );
}

export default Home;