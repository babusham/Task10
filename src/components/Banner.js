import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import '../../src/slider.css';

const Banner = () => {
  return (
    <Container class="mx-auto">
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../images/banner1.jpg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../images/banner2.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../images/banner3.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../images/banner4.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="image-wrapper">
                <img
                  className="d-block w-100"
                  src={require('../images/banner5.jpeg')}
                  alt="First slide"
                />
                /
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;