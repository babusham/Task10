import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Madurai = () => {
  return (
    <div id="madurai">
      <br />
      <br />
      <br />
      <Container>
        <h3>07.Madurai</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Madurai.jpeg')}
                className="img-fluid"
                alt="Madurai"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"The Lotus City"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madurai Tourism Madurai, the cultural
                    capital of Tamil Nadu, is one of the oldest continuously
                    inhabited cities of India. Ruled by Pandya kings for the
                    longest time in its history, it is called as the 'Lotus City'
                    as it was planned and built in the shape of a lotus. Madurai
                    is known for Meenakshi Amman Temple, dedicated to the goddess
                    Meenakshi with a sanctum for her consort, Sundareshwarar.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are many other ancient temples
                    in Madurai, including Thiruparankundram. It is one of the
                    important old temples dedicated to Lord Muruga(Karthikeya) and
                    is located on a hillock approximately 8 km from the city.
                    Having trade ties with ancient Rome, the place holds a great
                    cultural heritage. With bustling bazaars and fantastic street
                    food, Madurai has heritage walks conducted throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Madurai</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img style={{height: '40%'}}
                variant="top"
                src={require('../images/madurai1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Vaigai Dam</Card.Title>
                <Card.Text>
                  Vaigai Dam, a magnificent human-made structure, is constructed
                  over River Vaigai near Andipatti, Then....
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/madurai2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Meghamalai</Card.Title>
                <Card.Text>
                  Often known as the "High Wavy Mountains", Meghamalai is a
                  petit yet beautiful place located in the...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img style={{height: '40%'}}
                variant="top"
                src={require('../images/madurai3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Samanar Hills</Card.Title>
                <Card.Text>
                  Located in Keelakuyilkudi village near Madurai, Samanar Hills
                  or Samanar Malai is a beautiful hill rock...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            {' '}
            <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/madurai4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Thirumalai Nayakar</Card.Title>
                <Card.Text>
                  Thirumalai Nayakar Palace was erected in 1636 AD in the city
                  of Madurai, by King Thirumalai Nayak...
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

export default Madurai;