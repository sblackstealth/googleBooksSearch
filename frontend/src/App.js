import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      titleQuery: '',
      authorQuery: '',
      publisherQuery: '',
      urlBase: 'https://www.googleapis.com/books/v1/volumes?q=',
      bookArray: [],
    }
  }
  handleInput = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    });

  };
  makeQuery = () => {
    if (this.state.titleQuery.value && this.state.authorQuery.value && this.state.publisherQuery.value) {
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inauthor:${this.state.authorQuery}+inpublisher:${this.state.publisherQuery}&maxResults=40`)
        .then(res => {
          this.setState({
            bookArray: res.data.items
          })

        })


    }
    else if (this.state.titleQuery && this.state.authorQuery) {
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inauthor:${this.state.authorQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else if (this.state.titleQuery && this.state.publisherQuery) {
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inpublisher:${this.state.publisherQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else if (this.state.authorQuery && this.state.publisherQuery) {
      axios.get(`${this.state.urlBase}inauthor:${this.state.authorQuery}+inpublisher:${this.state.publisherQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else if (this.state.titleQuery) {
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else if (this.state.authorQuery) {
      axios.get(`${this.state.urlBase}inauthor:${this.state.authorQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else if (this.state.publisherQuery) {
      axios.get(`${this.state.urlBase}inpublisher:${this.state.publisherQuery}&maxResults=40`)
        .then(res => {
          if (res.data.items !== undefined) {
            this.setState({
              bookArray: res.data.items
            })
          } else {
            window.alert("no results found")
          }
          console.log("data", res.data)
          console.log("bookArray:", this.state.bookArray)
        })
    } else {
      window.alert('Please type a search query')

    }
    this.setState({
      titleQuery: '',
      authorQuery: '',
      publisherQuery: '',
    })



  }


  renderTitleOptions = () => {


    return this.state.bookArray.map(book => {
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

  render() {
    console.log("State:", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div><img className="googleLogo" alt='not available' src="http://www.francescomptonlibrary.com/uploads/5/2/1/5/52157523/7851018.jpg?257" />
            <h3>Book Search</h3></div>
          <div>
            <ul id='bookL' className='bookList'>
              {this.renderTitleOptions()}
            </ul>
          </div>
          <input placeholder="enter title here" value={this.state.titleQuery} className="titleQuery" onChange={this.handleInput}></input>
          <input placeholder="enter author here" value={this.state.authorQuery} className="authorQuery" onChange={this.handleInput}></input>
          <input placeholder="enter publisher here" value={this.state.publisherQuery} className="publisherQuery" onChange={this.handleInput}></input>
          <button onClick={this.makeQuery}>Search</button>
        </header>

      </div>
    );
  }
}

export default App;
