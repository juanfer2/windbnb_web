import React from 'react';
import './Card.scss';
// import ImageCard from '@assets/images/nature-image.jpg';
import { MdStarRate } from 'react-icons/md';
import Badge from '@components/Badges';

export interface CardI {
  imageUrl?: string;
  superHost?: boolean;
  description: string;
  title: string;
  starts: number;
}

function Card({ imageUrl, superHost, description, title, starts }: CardI) {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt="card" />
        </div>
      )}

      <div className="card-info">
        {superHost && <Badge>SUPER HOST</Badge>}

        <span className="description">{description}</span>

        <div className="rate">
          <MdStarRate className="rate-icon" size={16} />
          {starts}
        </div>
      </div>

      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

Card.defaultProps = {
  imageUrl: null,
  superHost: null
};

export default Card;
