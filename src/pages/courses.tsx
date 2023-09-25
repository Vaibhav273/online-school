import { Button } from "antd";
import { Col, Row, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import class1 from "../assets/images/Class1.png";
import class2 from "../assets/images/Class2.png";
import class3 from "../assets/images/Class3.png";
import class4 from "../assets/images/Class4.png";
import class5 from "../assets/images/Class5.png";
import class6 from "../assets/images/Class6.png";
import class7 from "../assets/images/Class7.png";
import class8 from "../assets/images/Class8.png";
import class9 from "../assets/images/Class9.png";
import class10 from "../assets/images/Class10.png";
import class11 from "../assets/images/Class11.png";
import class12 from "../assets/images/Class12.png";
import "../assets/scss/page/courses.scss"
import { Link } from "react-router-dom";


const Courses = () => {
    return (
        <>
            <Col xl={12} className="pageTitle">
                <h3>Enter into your Class</h3>
                <div className="divider div-transparent div-stopper"></div>
            </Col>
            <Row>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/1">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class1}
                                alt="class 1"
                            />
                            {/* <h4>Science</h4>
                        <p>Learn to Question !</p>
                        <Button className="btn btn-outline-dark">Get Started<FaArrowRight /></Button> */}
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/2">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class2}
                                alt="class 2"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/3">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class3}
                                alt="class 3"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/4">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class4}
                                alt="class 4"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/5">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class5}
                                alt="class 5"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/6">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class6}
                                alt="class 6"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/7">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class7}
                                alt="class 7"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/8">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class8}
                                alt="class 8"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/9">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class9}
                                alt="class 9"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/10">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class10}
                                alt="class 10"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/11">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class11}
                                alt="class 11"
                            />
                        </Col>
                    </Link>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <Link to="/classes/12">
                        <Col xl={12} className="courseCard classes-card">
                            <Image fluid
                                src={class12}
                                alt="class 12"
                            />
                        </Col>
                    </Link>
                </Col>
            </Row>
        </>
    );
}

export default Courses;