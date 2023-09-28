import { Button, Col, Container, Row } from "react-bootstrap";

import home_image from "../assets/images/home-image.png";
import cardScience from "../assets/images/science.png";
import cardMaths from "../assets/images/calculating.png";
import cardGeography from "../assets/images/earth.png";
import cardChemistry from "../assets/images/chemistry.png";
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
                            alt="Banner Image"
                        />
                    </Col>
                </Row>
                {/* </Container> */}
                <Col xl={12} className="homeSearch">
                    {/* <Container> */}
                    <Search placeholder="Search a Topic" onSearch={onSearch} />
                    {/* </Container> */}
                </Col>
                {/* <Container> */}
                <Col xl={12} className="pageTitle">
                    <h3>Learn by Subjects</h3>
                    <div className="divider div-transparent div-stopper"></div>
                </Col>
                <Row>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardScience}
                                className="align-top logo img-fluid"
                                alt="Science"
                            />
                            <h4>Science</h4>
                            <p>Learn to Question !</p>
                            <Button className="btn btn-outline-dark">Get Started<FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardMaths}
                                className="align-top logo img-fluid"
                                alt="Mathematics"
                            />
                            <h4>Mathematics</h4>
                            <p>Zero to Infinity !</p>
                            <Button className="btn btn-outline-dark">Get Started<FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardGeography}
                                className="align-top logo img-fluid"
                                alt="Geography"
                            />
                            <h4>Geography</h4>
                            <p>Explore the Universe !</p>
                            <Button className="btn btn-outline-dark">Get Started<FaArrowRight /></Button>
                        </Col>
                    </Col>
                    <Col xl={3}>
                        <Col xl={12} className="courseCard">
                            <img
                                src={cardChemistry}
                                className="align-top logo img-fluid"
                                alt="Chemistry"
                            />
                            <h4>Chemistry</h4>
                            <p>From an Atom to Galaxies !</p>
                            <Button className="btn btn-outline-dark">Go to Chapter <FaArrowRight /></Button>
                        </Col>
                    </Col>
                </Row>
                {/* </Container> */}

                <Col xl={12} className="schoolBox">
                    {/* <Container> */}
                    <Row>
                        <Col xl={8} className="box-text">
                            <h4>Let Learn with Us !!</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </Col>
                        <Col xl={4} className="box-image">
                            <img
                                src={box_image}
                                className="align-top img-fluid"
                                alt="Children"
                            />
                        </Col>
                    </Row>
                    {/* </Container> */}
                </Col>

                <Col xl={12} className="mt-3">

                </Col>
            </Container>
        </>
    );
}

export default Home;