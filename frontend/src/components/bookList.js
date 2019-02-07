import React, { Component } from 'react';
// class BookList extends Component {
//     constructor(props) {
//         super(props)
//         this.state={
//             bookList:props.bookArray
//         }
//         console.log("1booklist from booklist component:", this.state.bookList)
//         debugger
//     }
    //takes the info from the api response and generates list with books
    const BookList = (props) => {
        // console.log("booklist from booklist component:", this.state.bookList)
        return props.bookArray.map(book => {
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
    



//  render() {
//     return <div>
//     <ul id='bookL' className='bookList'>
//     {this.renderBook()}
//     </ul>
//   </div>
// }
// }

export default BookList;