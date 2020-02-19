import React, { Fragment } from "react";
import '../index.scss';

const formatTitle = (title) => {
  if (title.length > 24) {
    return `${title.slice(0, 25)}...`;
  }
  else return title;
}

export const Piece = (props) => {
  const { piece } = props;
  return (
    <a
      className='piece'
      href={piece.objectURL}
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
        <div className='piece-card'>
          <img
            src={piece.primaryImageSmall}
            alt={piece.objectName}
            className='piece-image'
          />
          <p className='text piece-title'>
            {formatTitle(piece.title)}
          </p>
          <p className='text piece-link'>
            {piece.objectURL}
          </p>
        </div>
      </Fragment>
    </a>
  )
}