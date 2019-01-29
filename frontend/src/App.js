import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      titleQuery:'',
      authorQuery: '',
      publisherQuery:'',
      urlBase:'https://www.googleapis.com/books/v1/volumes?q=',
      bookArray:[],
    }
  }
  handleInput = (event) => {
    this.setState({
      [event.target.className]:event.target.value
    });
    console.log(event.target.value)
    console.log(event.target.className)
    console.log(this.state)
  
   };
  makeQuery=()=>{
    if(this.state.titleQuery.value&&this.state.authorQuery.value&&this.state.publisherQuery.value){
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inauthor:${this.state.authorQuery}+inpublisher:${this.state.publisherQuery}`)
      .then(res=>{ 
        this.setState({
          bookArray: res.data.items
      })
        
      })
          
          
      }
    else if(this.state.titleQuery&&this.state.authorQuery){
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inauthor:${this.state.authorQuery}`)
      .then(res=>{
        this.setState({
                 bookArray: res.data.items
             })
      })
      }else if(this.state.titleQuery&&this.state.publisherQuery){
      axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}+inpublisher:${this.state.publisherQuery}`)
      .then(res=>{
        this.setState({
                 bookArray: res.data.items
             })
      })
  }else if(this.state.authorQuery&&this.state.publisherQuery){
      axios.get(`${this.state.urlBase}inauthor:${this.state.authorQuery}+inpublisher:${this.state.publisherQuery}`)
      .then(res=>{
        this.setState({
                 bookArray: res.data.items
             })
      })
  }else if(this.state.titleQuery){
    axios.get(`${this.state.urlBase}intitle:${this.state.titleQuery}`)
    .then(res=>{
      this.setState({
               bookArray: res.data.items
           })
         
      console.log ("data",res.data)
      console.log("bookArray:",this.state.bookArray)


      
    })
}else if(this.state.authorQuery){
      axios.get(`${this.state.urlBase}inauthor:${this.state.authorQuery}`)
      .then(res=>{
        this.setState({
                 bookArray: res.data.items
             })
      })
  }else if(this.state.publisherQuery){
      axios.get(`${this.state.urlBase}inpublisher:${this.state.publisherQuery}`)
      .then(res=>{
        this.setState({
                 bookArray: res.data.items
             })
        console.log ("data:",res.data)
      })
  }else{
    console.alert('Please type a search query')
  
  }
  this.renderTitleOptions()
}
// linkToInfo=(event)=>{
// <Link>this.info.value </Link>
// }
  
renderTitleOptions = () => {
  
     return this.state.bookArray.map(book => {
        return (
        <li className='listItem'>
          <img className='listItemImage' alt="not available" src={book.volumeInfo.imageLinks.thumbnail} onclick={}/>
          title: {book.volumeInfo.title}  <br/>
          author: {book.volumeInfo.authors}  <br/>
          publisher: {book.volumeInfo.publisher} <br/>
         <a>{book.volumeInfo.infoLink} </a> 
         info:
         </li>)
        
    })
    

   }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div><img alt='not available' src="http://www.francescomptonlibrary.com/uploads/5/2/1/5/52157523/7851018.jpg?257"/>
        <h3>Book Search</h3></div>
        <div>
          <ul id='bookL' className='bookList'>
          {this.renderTitleOptions()}
          </ul>
        </div>
          <input placeholder="enter title here" className="titleQuery" onChange={this.handleInput}></input>
        <input placeholder="enter author here" className="authorQuery" onChange={this.handleInput}></input>
        <input placeholder="enter publisher here" className="publisherQuery" onChange={this.handleInput}></input>
        <button onClick={this.makeQuery}>Search</button>
        </header>
     
      </div>
    );
  }
}

export default App;
