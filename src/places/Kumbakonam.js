import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kumbakonam = () => {
  return (
    <div id="kumbakonam">
      <br />
      <br />
      <br />
      <Container>
        <h3>06.Kumbakonam</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Kumbakonam.jpeg')}
                className="img-fluid"
                alt="Kumbakonam"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"The Cambridge of India"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kumbakonam Tourism Sandwiched between
                    two great rivers of southern India, Cauvery and Arsala,
                    Kumbakonam is a gorgeous temple town in the heart of the
                    Thanjavur district of Tamil Nadu. The town is a place for the
                    lovers of history and those seeking to understand India's
                    cultural roots and Hinduism.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The town is also known for its grand
                    festival called Mahamaham festival which is celebrated every
                    twelve years at the Mahamaham Tank. The town is one of the
                    oldest in Indian history, and known for its famed temples,
                    Chola heritage and also for its marvelous educational
                    institutes. The town is one of the oldest in Indian history,
                    and known for its famed temples, Chola heritage and also for
                    its marvelous educational institutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Kumbakonam</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kumbakonam1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Sarangapani Temple</Card.Title>
                <Card.Text>
                  Sarangapani Temple, an ancient temple dedicated to Lord
                  Vishnu, is located in the town of Kumbakonam...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kumbakonam2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Nageswaran Temple</Card.Title>
                <Card.Text>
                  Constructed as a chariot, the Nageswaran temple is an
                  important Shaivite temple. A piece of genius Chola...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img style={{height: '44%'}}
                variant="top"
                src={require('../images/kumbakonam3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Adi Kumbeshwara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kumbakonam4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Airavatesvara Temple</Card.Title>
                <Card.Text>
                  Located in the town of Darasuram near Kumbakonam in Tamil
                  Nadu, Airavatesvara Temple is a revered...
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

export default Kumbakonam;