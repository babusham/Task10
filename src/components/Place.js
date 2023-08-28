import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import places from '../data/placesData';

const Place = () => {
  return (
    <div>
      {places.map((place, index) => {
        return (
          <div key={place.id} id={place.id}>
            <Container>
              <br />
              <h3>{place.title}</h3>
              <div className="card mb-3 border-0">
                <div className="row g-0">
                  <div className="col-md-6 d-flex align-items-start">
                    <img
                      src={place.image}
                      className="img-fluid"
                      alt={place.title}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{place.cardTitle}</h5>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontSize: '0.9rem',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.cardText1}
                      </p>
                      <p
                        style={{
                          textIndent: '50px',
                          textAlign: 'justify',
                          fontSize: '0.9rem',
                          fontWeight: '400',
                        }}
                        className="card-text"
                      >
                        {place.cardText2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </Container>
            <h3 className="text-center mb-5">
              Must Visit Place In {place.title.slice(3)}
            </h3>
            <Container>
              <div className="row cards row align-items-center">
                {[1, 2, 3, 4].map(num => (
                  <div className="col" key={num}>
                    <Card style={{ width: '290px', }}>
                      <Card.Img variant="top" src={place[`cardImage${num}`]}/>
                      <Card.Body>
                        <Card.Title style={{fontSize: '1rem'}}>{place[`Title${num}`]}</Card.Title>
                        <Card.Text style={{fontSize: '0.85rem'}}>{place[`Text${num}`]}</Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                    </Card>
                    <br />
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        );
       })}
    </div>
  );
};

export default Place;