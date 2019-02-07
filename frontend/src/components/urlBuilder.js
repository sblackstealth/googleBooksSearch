import React, { Component } from 'react';
import SearchForm from './searchForm';
import BookList from './bookList';
import axios from 'axios';

class Url extends Component {
    constructor() {
        super()
        this.state={
            Query:SearchForm.state.searchQuery,
            bookList:BookList.bookList
        }
    
    }

    makeQuery = () => {
        console.log('query:',this.state.Query)
        if (this.state.Query) {
            axios.get(`'https://www.googleapis.com/books/v1/volumes?q='${this.state.Query}&maxResults=40`)
            .then(res => {
                if (res.data.items !== undefined) {
                this.setState({
                    bookList: res.data.items
                })
                } else {
                window.alert("no results found")
                }
                console.log("data", res.data)
                console.log("booklist:", this.state.bookList)
            })
        
        } else {
        window.alert('Please type a search query')

        }
        
    }
    
}

export default Url;
