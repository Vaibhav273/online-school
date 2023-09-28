import { Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import structure from "../assets/study-resources/structure.json";

const SchoolClass = () => {
    const { className } = useParams();
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        if (className) {
            if (+className == 1) {
                setPageTitle("Class I");
            }
            else if (+className == 2) {
                setPageTitle("Class II");
            }
            else if (+className == 3) {
                setPageTitle("Class III");
            }
            else if (+className == 4) {
                setPageTitle("Class IV");
            }
            else if (+className == 5) {
                setPageTitle("Class V");
            }
            else if (+className == 6) {
                setPageTitle("Class VI");
            }
            else if (+className == 7) {
                setPageTitle("Class VII");
            }
            else if (+className == 8) {
                setPageTitle("Class VIII");
            }
            else if (+className == 9) {
                setPageTitle("Class IX");
            }
            else if (+className == 10) {
                setPageTitle("Class X");
            }
            else if (+className == 11) {
                setPageTitle("Class XI");
            }
            else if (+className == 12) {
                setPageTitle("Class XII");
            }

        }
    }, []);

    return (
        <>
            <Container fluid>
                <Col xl={12} className="pageTitle">
                    <h3>{pageTitle}</h3>
                    <div className="divider div-transparent div-stopper"></div>
                </Col>
                <Row className="mb-4">
                    <Col xl={12}>
                        <div className="bookshelf">
                            <div className="covers d-flex flex-wrap align-items-end justify-content-evenly">
                                {structure.classes[+className! - 1].subjects.map(sub =>
                                    <>
                                        <Link to={"/classes/" + className + "/" + sub.subjectName}>
                                            <div className="thumb book-1 mb-2 mb-md-0 bg-secondary">
                                                <span className="text-light fw-bold text-capitalize">{sub.subjectName.replace(/_/, ' ')}</span>
                                                <Image fluid src={"/src/assets/study-resources/class_" + className + "/" + sub.subjectName + "/book_cover.jpg"} alt={sub.subjectName} />
                                            </div>
                                        </Link>
                                    </>
                                )}
                            </div>
                            <Image className="shelf-img w-100" src="/src/assets/images/shelf_wood_1920.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default SchoolClass;