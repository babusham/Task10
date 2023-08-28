import React from 'react';
import placesVisitData from '../data/placeVisitData';
import { Container } from 'react-bootstrap';
import Placevisit from '../components/Placevisit';

const Placetovisit = () => {
  return (
    <div>
      {placesVisitData.map((place, index) => {
        return (
          <div key={place.id} id={place.id}>
            <Container>
              <h3 style={{ marginTop: '150px' }}>{place.title}</h3>
              <div className="card mb-3 border-0">
                <div className="row g-0">
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
                        {place.text1}
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
                        {place.text2}
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
                        {place.text3}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <img
                      src={place.image}
                      className="img-fluid"
                      alt={place.title}
                      style={{ maxWidth: '100%', height: '100%' }}
                    />
                    <p style={{ textAlign: 'center', marginTop: '5px' }}>
                      {place.title}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <p
                style={{
                  textIndent: '50px',
                  textAlign: 'justify',
                  fontSize: '0.9rem',
                  fontWeight: '400',
                }}
                className="card-text"
              >
                {place.text4}
              </p>
              <br />
              <Placevisit />
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Placetovisit;