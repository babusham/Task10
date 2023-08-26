import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Ooty = () => {
  return (
    <div id="ooty">
      <br />
      <br />
      <br />
      <Container>
        <h3>04.Ooty</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Ooty.jpeg')}
                className="img-fluid"
                alt="Ooty"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"Queen of the Nilgiris"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst Nilgiri hills, Ooty,
                    also known as Udagamandalam, is a hill station in Tamil Nadu
                    which serves as a top-rated tourist destination. Once regarded
                    as the summer headquarters of the East India Company, the
                    Queen of the hills is a picturesque getaway.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Nilgiri mountain railway is the
                    steepest track in all of Asia. Remember the hit song 'Chaiyya
                    Chaiyya' where Shahrukh Khan and Malaika Arora matching steps
                    on top of a train? Remember the breathtaking locales as the
                    train chugged its way across lush greenery? Yes, that was the
                    Nilgiri Mountain Railways, and the Nilgiri Mountains all along
                    Dotted with tea gardens, serene waterfalls, winding country
                    lanes, and charming colonial architecture, Ooty is the perfect
                    respite everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <h3 className="text-center">Must Visit Place In Ooty</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/ooty1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Nilgiri Mountain Railway</Card.Title>
                <Card.Text>
                  Nilgiri Mountain Railway, also known as Toy Train in Ooty, is
                  one of the key attractions of the popular hill...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/ooty2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Ooty Botanical Garden </Card.Title>
                <Card.Text>
                  Ooty Botanical Gardens lie on the lower slopes of the
                  Doddabetta peak, the Government Botanical...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img style={{height:'43%'}}
                variant="top"
                src={require('../images/ooty3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Emerald Lake</Card.Title>
                <Card.Text>
                  Emerald Lake is situated in Emerald Village, around 20-22
                  kilometres from the main city of Ooty and...
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
                src={require('../images/ooty4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Dolphin's Nose</Card.Title>
                <Card.Text>
                  Located about 12 km away from Coonoor is the Dolphin's Nose
                  about 1,500 meters above sea level. The tip...
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

export default Ooty;