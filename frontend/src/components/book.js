import React, { Component } from 'react';
import BookList from './bookList'

class Book extends Component {
    constructor() {
        super()
        this.state={
            bookList:BookList.state.bookList,
            book:{},

        }
     
    }

    renderBook = () => {


        return this.state.bookList.map(book => {
          return (
            <li className='listItem'>
              <img className='listItemImage' alt="not available" src={book.volumeInfo.imageLinks.thumbnail} />
              title: {book.volumeInfo.title}  <br />
              author: {book.volumeInfo.authors}  <br />
              publisher: {book.volumeInfo.publisher} <br />
              <a className="itemLink" href={book.volumeInfo.infoLink}>additional info </a> <br />
            </li>)
    
        })
    
    
      }
}
export default Book