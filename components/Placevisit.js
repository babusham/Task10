import React from 'react';
import placevisit from '../data/placeVisitCompData';

const PlaceVisit = () => {
  return (
    <div className="mt-3">
      {placevisit.map(place => (
        <div key={place.image} style={{ marginTop: '20px' }}>
          <div className="text-center">
            <br />
            <h3>{place.location}</h3>
            <h3>{place.title}</h3>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-start',
            }}
          >
            {place.id % 2 === 1 && (
              <div className="me-3">
                <img
                  style={{
                    marginTop: '40px',
                    width: '180px',
                    height: '250px',
                    fontSize: '0.9rem',
                    
                  }}
                  src={place.image}
                  alt=""
                />
              </div>
            )}
            <div style={{ width: '998px', marginTop: '40px' }}>
              <h6 className="fw-bolder">{place.name}</h6>
              <p
                style={{
                  textIndent: '4rem',
                  textAlign: 'justify',
                  fontSize: '0.9rem',
                  wordWrap: 'break-word',
                }}
              >
                {place.cardText1}
              </p>
              <p
                style={{
                  textIndent: '4rem',
                  textAlign: 'justify',
                  fontSize: '0.9rem',
                  wordWrap: 'break-word',
                }}
              >
                {place.cardText2}
              </p>
            </div>
            {place.id % 2 === 0 && (
              <div className="mt-5" style={{ marginLeft: '30px' }}>
                <img
                  style={{
                    width: '180px',
                    height: '250px',
                    fontSize: '0.9rem',
                  }}
                  src={place.image}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceVisit;