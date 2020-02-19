import React, { useEffect, useState } from "react";
import '../index.scss';
import { getRandomFilter, requestCollection } from '../helpers';
import { Piece } from "./Piece";
import useDidMountEffect from '../hooks/useDidMount';
import useDebouncer from '../hooks/useDebouncer';

const Content = () => {
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [collection, setCollection] = useState([]);

  // Initially set filter to one of the existing "queries"
  useEffect(() => {
    const filter = getRandomFilter();
    setFilter(filter);
  }, []);

  const searchCollection = () => {
    setIsLoading(true);
    setCollection([]);

    return new Promise(resolve => {
      resolve(requestCollection(filter));
    })
  }

  const searchWithDebouncer = useDebouncer(searchCollection, 650);

  useDidMountEffect(async () => {
    if (filter === '') {
      setCollection([]);
    } else {
      const response = await searchWithDebouncer(filter);
      setCollection(response);
      setIsLoading(false);
    }
  }, [searchWithDebouncer, filter]
  );

  return (
    <div className="top-container">
      <section className='container header-container'>
        <h1 className='header'>The Metropolitan Museum of Art Collection</h1>
      </section>

      <section className='container form-container'>
        <form className='form'>
          <input
            name='search'
            type='search'
            className='search'
            placeholder={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filter !== '' &&
            <button
              name='clear'
              className='clear-button'
              onClick={() => setFilter('')}
            >
              X
          </button>
          }
        </form>
      </section>
      <section className='container images-container'>
        {isLoading && <p>Loading Results...</p>}
        {collection && collection.length !== 0 && collection.map(piece =>
          <Piece piece={piece} key={`${piece.title}-${piece.objectID}`} />
        )
        }
      </section>
    </div>
  )
}

export default Content;