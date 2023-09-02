import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Badge, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-bootstrap/Carousel";
import { faHotel, faBowlFood, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import ootyImg from "../../pics/Ooty1.jpeg";
import kanyaImg from "../../pics/Kanyakumari2.jpeg";
import kodaikanalImg from "../../pics/Kodaikanal1.jpeg";
import maduraiImg from "../../pics/Madurai3.jpeg";
import yercaudImg from "../../pics/Yercaud1.jpeg";
import theniImg from "../../pics/Theni3.jpeg";
import hogenakkalImg from "../../pics/Hogenakkal2.jpeg";
import rameshwaramImg from "../../pics/Rameshwaram1.jpeg";
import chennaiImg from "../../pics/Chennai2.jpeg";

function kumbakonam() {
  return (
    <div className="container mt-5">
      <div>
        <h2>06. Kumbakonam To All District</h2>
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
                  alt="Kumbakonam to Ooty"
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
                        Kumbakonam to <br></br>Ooty
                      </span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2000
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
                  src={rameshwaramImg}
                  alt="Kumbakonam to Rameshwaram"
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
                        Kumbakonam to Rameshwaram
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
                  alt="Kumbakonam to Kodaikanal"
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
                        Kumbakonam to Kodaikanal
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
                  src={maduraiImg}
                  alt="Kumbakonam to Madurai"
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
                      <span className=" fw-lighter">Kumbakonam to Madurai</span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 1500
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
                  src={kanyaImg}
                  alt="Kumbakonam to Kaniyakumari"
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
                        Kumbakonam to Kanyakumari
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
                  alt="Kumbakonam to Yercaud"
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
                      <span className=" fw-lighter">Kumbakonam to yercaud</span>
                    </p>
                  </Card.Title>
                  
                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 2500
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
                  alt="Kumbakonam to Theni"
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
                      <span className=" fw-lighter">Kumbakonam to Theni</span>
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
                  alt="Kumbakonam to Chennai"
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
                      <span className=" fw-lighter">Kumbakonam to Chennai</span>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <span className="fw-bold">Price:</span> RS: 3500
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
                  src={hogenakkalImg}
                  alt="Kumbakonam to Hogenakkal"
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
                        Kumbakonam to Hogenakkal
                      </span>
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
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default kumbakonam;