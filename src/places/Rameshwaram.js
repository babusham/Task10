import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rameshwaram = () => {
  return (
    <div id="rameshwaram">
      <br />
      <br />
      <br />
      <Container>
        <h3>02.Rameshwaram</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-2">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Rameshwaram.jpeg')}
                className="img-fluid"
                alt="Rameshwaram"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"The Bridge on the Indian Ocean"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rameshwaram is located on a beautiful
                    island in the South Indian state of Tamil Nadu. It is
                    separated by a small Pamban channel from Sri Lanka. According
                    to Hindu mythology, this is the place where Lord Rama created
                    a bridge across the sea to Sri Lanka.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Renowned for its magnificent prakaras
                    with massive sculptured pillars on either side. The
                    Ramanathaswamy Temple houses the longest corridor in the
                    world. Agniteertham is famous for its sacred waters and
                    Pilgrims perform poojas in honour of their ancestors at this
                    seashore. The five-faced Hanuman Temple holds the floating
                    stone which was used to build the bridge between India and Sri
                    Lanka. Rameshwaram has the first sea bridge connecting the
                    town of Mandapam with Pamban Island, and Rameswaram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <br />
      <h3 className="text-center">Must Visit Place In Rameswaram</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/rameshwaram1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Dhanushkodi Temple</Card.Title>
                <Card.Text>
                  Dhanushkodi was until a few years ago a wonderful temple on
                  the southern tip of India. However, due to a..
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/rameshwaram2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Lakshmana Temple </Card.Title>
                <Card.Text>
                  Lakshmana Tirtham had been constructed in the loving memory of
                  Lord Lakshman, brother of Lord Rama. In order...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col  d-flex align-items-stretch">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/rameshwaram3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Rameshwaram Temple</Card.Title>
                <Card.Text>
                  A perfect blend of mind- boggling architecture and spiritual
                  significance. Rameshwaram Temple, also...
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
                src={require('../images/rameshwaram4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Villoondi Tirtham</Card.Title>
                <Card.Text>
                  Villoondi Tirtham is a beach which is also considered a sacred
                  natural water body and a favourite amongst tourists...
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

export default Rameshwaram;