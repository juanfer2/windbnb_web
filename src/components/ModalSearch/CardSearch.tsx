import { Button } from '@chakra-ui/react';
import React from 'react';

function CardSearch() {
  return (
    <>
      <div className='card-search'>
        <div className="card-container">
          <div className="items location">
            <h4>LOCATION</h4>
            <h1>Helsinki, Finland</h1>
          </div>

          <div className="items guests">
            <h4>GUEST</h4>
            <input type="text" placeholder="Add guests" />
          </div>
        </div>
      </div>

      <div className="actions">
        <Button background="#EB5757E5" color="white">
          Search
        </Button>
      </div>
    </>
  );
}

export default CardSearch;
