import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/searchForm';
import BookList from './components/bookList';




class App extends Component {
  constructor() {
    super()
    this.state = {
      searchQuery: '',
      bookArray: [],
    }
  }
  // updating state at parent level
  handleChange = (bookArray) => {
    this.setState({
      bookArray
    });
    
  };
  // calling function to populate list with response from api
  fillBookList=()=>{
    if ([this.state.bookArray]){
      console.log('bookarray:',this.state.bookArray)
    }
  }


  render() {
    console.log("appState:", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div><img className="googleLogo" alt='not available' src="http://www.francescomptonlibrary.com/uploads/5/2/1/5/52157523/7851018.jpg?257" />
            <h3>Book Search</h3></div>
            
          <div>
            
            <BookList bookArray={this.state.bookArray}/>
              
          
          </div>
          <SearchForm handleChange={this.handleChange}/>
          </header>
      </div>
      
      
    );
  }
}

export default App;
