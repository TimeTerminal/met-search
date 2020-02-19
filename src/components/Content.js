import React, { useCallback, useState } from "react";
import '../index.scss';
import { getRandomFilter, requestCollection } from '../helpers';
import { Piece } from "./Piece";
import { debounce } from 'lodash';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    const filter = getRandomFilter();
    this.searchCollection(filter);
  }

  searchCollection(filter) {
    console.log('hi ============');
    this.setState({
      filter,
      isLoading: true
    });

    // requestCollection(filter).then(data =>
    //   this.setState({
    //     collection: data,
    //     isLoading: false
    //   })
    // )
  }

  handleSearchChange(query) {
    console.log('hi ============', query);
    this.setState({
      filter: query
    })

    this.useDebouncer(this.searchCollection, 650);
  }

  useDebouncer(func, delay = 0) {
    const { filter } = this.state;
    const newFunc = () => { };
    return newFunc;
  }

  clearSearch() {
    this.setState({
      filter: ''
    })
  }

  render() {
    // console.log('this.state :', this.state);
    const { collection, isLoading } = this.state;
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
              placeholder={this.state.filter}
              onChange={(e) => this.handleSearchChange(e.target.value)}
            />
            {this.state.filter !== '' &&
              <button
                name='clear'
                className='clear-button'
                onClick={(e) => this.clearSearch(e)}
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
}