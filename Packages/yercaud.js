import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Badge, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import rameshwaramImg from "../../pics/Rameshwaram1.jpeg";
import kodaikanalImg from "../../pics/Kodaikanal1.jpeg";
import chennaiImg from "../../pics/Chennai1.jpeg";
import kanyaImg from "../../pics/Kanyakumari2.jpeg";
import kumbakonamImg from "../../pics/Kumbakonam3.jpeg";
import maduraiImg from "../../pics/Madurai3.jpeg";
import ootyImg from "../../pics/Ooty1.jpeg";
import theniImg from "../../pics/Theni3.jpeg";
import hogenakkalImg from "../../pics/Hogenakkal2.jpeg";
import { faHotel, faBowlFood, faVanShuttle } from "@fortawesome/free-solid-svg-icons";

function yercaud() {
  return (
    <div className="container mt-5">
      <div>
        <h2>08. Yercaud To All District</h2>
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
                  src={maduraiImg}
                  alt="Yercaud to Maduari"
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
                        Yercaud to <br></br> Madurai
                      </span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1800
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
                  src={rameshwaramImg}
                  alt="Yercaud to Rameshwaram"
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
                        Yercaud to Rameshwaram
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2000
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

            {/* 3rd box */}
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
                  src={kodaikanalImg}
                  alt="Yercaud to Kodaikanal"
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
                      <span className=" fw-lighter">Yercaud to Kodaikanal</span>
                    </p>
                  </Card.Title>
                
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1800
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
                  src={kumbakonamImg}
                  alt="Yercaud to Kumbakonam"
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
                      <span className=" fw-lighter">Yercaud to Kumbakonam</span>
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
                  src={kanyaImg}
                  alt="Yercaud to Kaniyakumari"
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
                        Yercaud to Kanyakumari
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3000
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
                  alt="Yercaud to Ooty"
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
                        Yercaud to <br></br>Ooty
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
                  src={theniImg}
                  alt="Yercaud to Theni"
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
                        Yercaud to <br></br> Theni
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2500
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
                  src={chennaiImg}
                  alt="Yercaud to Chennai"
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
                        Yercaud to <br></br>Chennai
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3000
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
                  src={hogenakkalImg}
                  alt="Yercaud to Hogenakkal"
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
                      <span className=" fw-lighter">Yercaud to Hogenakkal</span>
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
      </Carousel>
    </div>
  );
}

export default yercaud;