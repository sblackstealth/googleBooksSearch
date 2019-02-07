import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import BookList from './bookList';


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchQuery:'',
            bookList:[]
        }
   
      }
    //   updating search query as user types
    
    handleInput = (event) => {
        this.setState({
          searchQuery: event.target.value
        });
      };

//    generating axios call to api based on user input
      makeQuery = (e) => {
        
        console.log('searchFormQuery:',this.state.searchQuery)
        if (this.state.searchQuery) {
            axios({
                baseURL:`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&maxresult=40`,
                method: "GET"
                }
                )
            .then(res => {
                console.log(res)
                if (res.data.items !== undefined) {
                this.props.handleChange(res.data.items)
                } else {
                window.alert("no results found")
                }
                console.log("dataFromSf", res.data)
                console.log("booklistFromSf:", this.state.bookList)
            })
        
        } else {
        window.alert('Please type a search query')

        }
        
    }

render() {
    
    console.log("searchFormState:", this.state)
    return (
            <div>
                
          <input placeholder="enter query here" value={this.state.searchQuery} className="SearchQuery" onChange={this.handleInput}></input>
          <button onClick={this.makeQuery}>Search</button>

      </div>
    );
  }
}

export default SearchForm;