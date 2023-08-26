import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Chennai = () => {
  return (
    <div id="chennai">
      {/* single card */}
      <Container>
        <h3>01.Chennai</h3>
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Chennai.jpeg')}
                className="img-fluid"
                alt="Chennai"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"The Detroit of India"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Formerly known as Madras, Chennai is
                    the capital city of the state of Tamil Nadu, in the southern
                    part of India. Located on the Coromandel coast of Bay of
                    Bengal, Chennai is as dynamic as it is immersed in tradition.
                    This 'capital of the south', is one among the four
                    metropolitan siblings of India, having a rich cultural history
                    which it perfectly balances with its metropolis lifestyle.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amid its chaos of traffic and
                    sweltering humid climate, Chennai is worth visiting for its
                    temples steeped in south-Indian culture, British-era museums
                    and monuments, culinary delights and Marina Beach (Second
                    largest urban beach in the world). Chennai's skyline is famous
                    for its towering skyscrapers, but the heart of Chennai has an
                    old-world charm to it that refuses to be overshadowed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Chennai</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/chennai1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Marina Beach</Card.Title>
                <Card.Text>
                  Situated in the city of Chennai in Tamilnadu, Marina Beach is a
                  natural beach along the bay of Bengal...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/chennai2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>MGR Film City </Card.Title>
                <Card.Text>
                  Having been established in the year 1994, a considerably new
                  structure, the MGR Film city is managed...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/chennai3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Marundeeswarar Temple</Card.Title>
                <Card.Text>
                  The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near
                  Chennai has the temple deity Shiva...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            {' '}
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/chennai4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Breezy Beach</Card.Title>
                <Card.Text>
                  Breezy Beach lays in the remote and serene neighbourhood of
                  valmiki Nagar in chennai. Being smaller and less polluted...
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

export default Chennai;