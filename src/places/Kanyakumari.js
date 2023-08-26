import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kanyakumari = () => {
  return (
    <div id="kanyaKumari">
      <br />
      <br />
      <br />
      <Container>
        <h3>05.Kanyakumari</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Kanyakumari.jpeg')}
                className="img-fluid"
                alt="Kanyakumari"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"Cape Comorin or The Land's End"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanyakumari Tourism Bordered by the
                    three seas - Arabian, Indian and the Bay of Bengal,
                    Kanyakumari is the southernmost tip of the Indian Peninsula. A
                    small coastal town in the state of Tamil Nadu, Kanyakumari was
                    earlier known as Cape Comorin.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanyakumari offers the marvellous
                    confluence of the Bay of Bengal, the Arabian Sea and the
                    Indian ocean meeting together at a point. But, this is not a
                    miracle, the miracle lies in the beauty that the water of
                    three seas does not mix, you can clearly distinguish between
                    the turquoise blue, deep blue and sea green waters of the
                    three seas. To enjoy the best view of sunset and sunrise, you
                    can visit the Triveni Sangam point and the famous View tower.
                    The town has a mountainous terrain with elevated patches of
                    hills, coconut trees and lined with paddy fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Kanyakumari</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kanyakumari1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Kanyakumari Beach</Card.Title>
                <Card.Text>
                  Located in the southernmost part of India, Kanyakumari beach
                  with its beautiful hue- changing beaches..
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kanyakumari2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Vivekananda Memorial </Card.Title>
                <Card.Text>
                  The magnificent Vivekananda Rock Memorial is located on a
                  small island off Kanyakumari. It has the picturesque...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kanyakumari3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Thiruvalluvar Statue</Card.Title>
                <Card.Text>
                  Dedicated to the accomplished philosopher and poet
                  Thiruvalluvar, this beautiful statue finds itself...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kanyakumari4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Thirparappu Falls</Card.Title>
                <Card.Text>
                  Located at a distance of about 55 kilometers from Kanyakumari,
                  the cascading waters of the Thirparappu...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanyakumari;