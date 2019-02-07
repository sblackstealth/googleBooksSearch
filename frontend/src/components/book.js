import React from 'react'   
   const renderBook = (book) => {
       let bookObject={ imgage: book.volumeInfo.imageLinks.thumbnail,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        extraInfo: book.volumeInfo.infoLink 

       }
    


          return (
       <div>
           <img className='bookImage' alt='book cover' src={bookObject.imgage}/>
           Title:<h3 className='bookTitle'>{bookObject.title}</h3>
           Author:<h4 className='bookAuthor'>{bookObject.author}</h4>
           Publisher<h4 className='bookPublisher'>{bookObject.publisher}</h4>
           <a href={bookObject.extraInfo}> extra info</a>
       </div>       
       )
}
    


export default renderBook
