import { Col, Container, Row, } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import structure from "../assets/study-resources/structure.json";
import { Image } from "antd";

const SchoolClass = () => {
    const { className } = useParams();
    const [pageTitle, setPageTitle] = useState('');
    const [rowCount, setRowCount] = useState<number>();
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
        getRowCount();
    }, [rowCount]);
    const getRowCount = () => {
        const unitLength = structure.classes[+className! - 1].subjects.length - 1;
        setRowCount(Math.ceil(unitLength / 5));
    }
    return (
        <>
            <Container fluid className="brick-background">
                <Col xl={12} className="pageTitle">
                    <h3>{pageTitle}</h3>
                    <div className="divider div-transparent div-stopper"></div>
                </Col>
                <Row className="mb-4">
                    {[...Array(rowCount)].map(
                        (_, rowIndex) =>
                            <Col xl={12} className="bookshelf mb-3">
                                <div className="covers d-flex flex-wrap align-items-end justify-content-evenly">
                                    {structure.classes[+className! - 1].subjects.map((sub, i) =>
                                        <>
                                            {((i >= rowIndex * 5) && (i < rowIndex * 5 + 5)) &&
                                                <Link to={"/classes/" + className + "/" + sub.subjectName}>
                                                    <div className="thumb book-1 mb-2 mb-md-0 bg-dark">
                                                        <span className="text-light fw-bold text-capitalize d-block">{sub.subjectName.replace(/_/, ' ')}</span>
                                                        <Image preview={false} src={"/src/assets/study-resources/class_" + className + "/" + sub.subjectName + "/book_cover.jpg"}
                                                            className="d-inline-block"
                                                            fallback="/src/assets/images/book_image_alt1.png" 
                                                            alt={sub.subjectName} />
                                                    </div>
                                                </Link>
                                            }
                                        </>
                                    )}
                                </div>
                                <Image preview={false} className="shelf-img w-100" src="/src/assets/images/shelf_glass_HQ.png" />
                            </Col>
                    )}
                    {/* <Col xl={12} className="bookshelf">
                        <Row>
                            {structure.classes[+className! - 1].subjects.map(sub =>
                                <>
                                    <Col md={6} lg={4} xl={3} className="selfImage">
                                        <Link to={"/classes/" + className + "/" + sub.subjectName}>
                                            <div className="thumb book-1 mb-2 mb-md-0 bg-dark">
                                                <span className="text-light fw-bold text-capitalize d-block">{sub.subjectName.replace(/_/, ' ')}</span>
                                                <Image preview={false} src={"/src/assets/study-resources/class_" + className + "/" + sub.subjectName + "/book_cover.jpg"}
                                                    fallback="/src/assets/images/book_image_alt3.png"
                                                    alt={sub.subjectName}
                                                />
                                            </div>
                                        </Link>

                                    </Col>
                                </>
                            )}
                        </Row>                        
                    </Col> */}
                </Row>
            </Container>
        </>
    );
}
export default SchoolClass;