import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Badge, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faBowlFood, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import chennaiImg from "../../pics/Chennai2.jpeg";
import kodaikanalImg from "../../pics/Kodaikanal1.jpeg";
import ootyImg from "../../pics/Ooty1.jpeg";
import kanyaImg from "../../pics/Kanyakumari2.jpeg";
import kumbakonamImg from "../../pics/Kumbakonam3.jpeg";
import maduraiImg from "../../pics/Madurai3.jpeg";
import yercaudImg from "../../pics/Yercaud1.jpeg";
import theniImg from "../../pics/Theni3.jpeg";
import hogenakkalImg from "../../pics/Hogenakkal2.jpeg";


function rameshwaram() {
  return (
    <div className="container mt-5">
      <div>
        <h2>02. Rameshwaram To All District</h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <Row>
            {/* 1st row */}
            <Col style={{ margin: "30px" }} lg={3}>
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={ootyImg}
                  alt="Rameshwaram  to Ooty"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">Rameshwaram to Ooty</span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1500
                  </Card.Text>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* 2nd card */}
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={maduraiImg}
                  alt="Rameshwaram  to Madurai"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Madurai
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3500
                  </Card.Text>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 3rd box */}
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kodaikanalImg}
                  alt="Rameshwaram  to Kodaikanal"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kodaikanal
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2200
                  </Card.Text>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kumbakonamImg}
                  alt="Rameshwaram  to Kumbakonam"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kumbakonam
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1800
                  </Card.Text>

                  <div
                    style={{ marginTop: "20px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={kanyaImg}
                  alt="Rameshwaram  to Kaniyakumari"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Kaniyakumari
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2500
                  </Card.Text>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={yercaudImg}
                  alt="Rameshwaram  to Yercaud"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to yercaud
                      </span>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1000
                  </Card.Text>

                  <div
                    style={{ marginTop: "20px" }}
                    className="  w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={theniImg}
                  alt="Rameshwaram  to Theni"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">Rameshwaram to Theni</span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1300
                  </Card.Text>

                  <div
                    style={{ marginTop: "20px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={chennaiImg}
                  alt="Rameshwaram  to Chennai"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Chennai
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3000
                  </Card.Text>

                  <div
                    style={{ marginTop: "36px" }}
                    className=" w-100 btn-group"
                  >
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ margin: "30px" }} lg={3} className="">
              <Card
                style={{
                  height: "550px",
                  width: "350px",
                  boxShadow: "10px 10px 5px #aaaaaa",
                  margin: "30px",
                }}
                className="cardPck  ms-5 "
              >
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={hogenakkalImg}
                  alt="Rameshwaram  to Hogenakkal"
                />
                <div>
                  <ul
                    style={{ listStyle: "none" }}
                    className="d-flex  justify-content-around me-4 mt-1 fs-5 "
                  >
                    <li>
                      <FontAwesomeIcon className=" text-dark " icon={faHotel} />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className=" text-dark "
                        icon={faBowlFood}
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faVanShuttle} />
                    </li>
                  </ul>
                </div>
                <Card.Body>
                  <Card.Title>
                    <p>
                      <span className=" fw-bold"> Location: </span>
                      <span className=" fw-lighter">
                        Rameshwaram to Hogenakkal
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1400
                  </Card.Text>

                  <div className="mt-3  w-100 btn-group">
                    <Button href="#" variant="success">
                      <FaWhatsapp /> <span>WhatsApp</span>
                    </Button>
                    <Button href="#" variant="light">
                      <FaPhone /> <span>Call Us</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default rameshwaram;