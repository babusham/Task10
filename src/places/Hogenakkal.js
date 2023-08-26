import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hogenakkal = () => {
  return (
    <div id="hogenakkal">
      <br />
      <br />
      <br />
      <Container>
        <h3>10.Hogenakkal</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Hogenakkal.jpeg')}
                className="img-fluid"
                alt="Hogenakkal"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">
                    "The one that will take your breath away"
                  </h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hogenakkal Tourism Hogenakkal is a
                    waterfall located in Dharmapuri district of Tamil Nadu where
                    the Kaveri river splits into multiple streams of waterfalls.
                    Located at a distance of 180 km from Bangalore, Hogenakkal has
                    water throughout the year. The carbonite rocks, the coracle
                    (basket boat) rides, freshwater fish, oil massages by locals
                    make it a perfect one day trip or a weekend getaway from
                    Bangalore.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sometimes referred to as the "Niagara
                    Falls of India," it is also known for the medicinal baths.
                    Also known at Marikottayam, Hoge actually means smoke and Kal
                    means rock. Recently, the place has been found to be littered
                    with plastic bags and garbage and the fish market outside the
                    waterfall might stink. Weekends can be crowded. Keep all these
                    points in mind before visiting..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <br />
      <h3 className="text-center">Must Visit Place In Hogenakkal</h3>
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/hogenakkal1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Theerthamalai Temple</Card.Title>
                <Card.Text>
                  Theerthamalai is a popular pilgrim centre close to Hogenakkal.
                  One of its most popular destinations is the...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/hogenakkal2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Hogenakkal Falls </Card.Title>
                <Card.Text>
                  Hogenakkal Falls is a scintillating waterfall that is located
                  on river Kaveri in the Dharmapuri district of...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/hogenakkal3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Pennagram Village</Card.Title>
                <Card.Text>
                  The village is located about 20 km away from Hogenakkal and is
                  famous for its weekly fair that it holds every...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '15rem', height: '21rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/hokenakkal4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Mettur Dam</Card.Title>
                <Card.Text>
                  Mettur Dam, situated 30 miles from Salem in a small Mettur
                  Village, is one of the largest dams in India. Built...
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

export default Hogenakkal;