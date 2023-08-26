import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kodaikanal = () => {
  return (
    <div id="kodaikanal">
      <br />
      <br />
      <br />
      <Container>
        <h3>03.Kodaikanal</h3>
        {/* single card */}

        <div className="card mb-3 border-0">
          <div className="row g-2">
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={require('../images/Kodaikanal.jpeg')}
                className="img-fluid"
                alt="Kodaikanal"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div style={{textAlign:'justify', fontSize: '0.9rem'}}>
                  <h5 className="card-title">"The Princess of Hill Stations"</h5>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kodaikanal Tourism Located in the
                    state of Tamil Nadu, Kodaikanal is one of the most famous
                    honeymoon destinations in India. A Lakeside resort town of
                    Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
                    manicured cliffs and waterfall that come together to create
                    the ideal setting for a perfect getaway. Kodaikanal means 'the
                    gift of the forests'.
                  </p>
                  <p className="card-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst the rolling slopes of
                    the Palani Hills, Kodaikanal stands at an altitude of 7200
                    feet above sea level, and once you visit this hill station,
                    you will find that every bit of what you have imagined it to
                    be is real. Kodaikanal is a place you can go to take a break
                    from the rigours of daily city life, and this hill station
                    lets you sit back and connect with nature as you head out on
                    biking or trekking trails or take a stroll through the vast
                    forests surrounding the town.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <br />
      <h3 className="text-center">Must Visit Place In Kodaikanal</h3>
      <br />
      {/* responsive card */}
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kodaikanal1.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Green Valley View</Card.Title>
                <Card.Text>
                  Formerly known as Suicide point, the Green Valley View offers
                  a breathtaking view of the plains, deep...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kodaikanal2.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Kodai Lake </Card.Title>
                <Card.Text>
                  Kodaikanal Lake is a manmade lake in the Kodaikanal city which
                  is also known as Kodai Lake. Vera...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
          <Card style={{ width: '15rem', height: '23rem', fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={require('../images/kodaikanal3.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Bear Shola Falls</Card.Title>
                <Card.Text>
                  Located at a mere distance of 2 kilometres
                  from the Kodaikanal Lake, the Bear Shola Falls is a popular...
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
                src={require('../images/kodaikanal4.jpeg')}
              />
              <Card.Body>
                <Card.Title style={{fontSize:'1.1rem'}}>Pillar Rocks</Card.Title>
                <Card.Text>
                  Situated in the 'Princess of Hill stations', Kodaikanal, the
                  Pillar Rocks have become a lovely picnic...
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

export default Kodaikanal;