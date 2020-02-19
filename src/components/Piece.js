import React, { Fragment } from "react";
import '../index.scss';

export const Piece = (props) => {
  const { piece } = props;
  // console.log('piece :', piece);
  return (
    <a
      className='piece'
      href={piece.primaryImage}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Fragment>
        <div className='piece-info'>
          <p className='text piece-title'>
            {piece.title}
          </p>
          <p className='text piece-artist'>
            {`${piece.artistPrefix}${piece.artistPrefix && ' '}${piece.artistDisplayName}`}
          </p>
          <p className='text piece-date'>
            {piece.objectDate}
          </p>
          <p className='text piece-dimensions'>
            {piece.dimensions}
          </p>
        </div>
        <img
          src={piece.primaryImageSmall}
          alt={piece.objectName}
          className='piece-image'
        />
      </Fragment>
    </a>
  )
}