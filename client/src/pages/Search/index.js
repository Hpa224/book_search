import React, { Component } from "react";
import axios from "axios"

class Search extends Component {
  state = {
    query:"",
    books:[]
  };

  books = (res) => {
    this.setState({books: res.items})
  }
  
  search = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
  
    axios
      .get(url)
      .then(res => {
          console.log(res.data)
          this.displayBooks(res.data);
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
}

  render () {
    return (
      <div id="booksearch">
      <input
          className="form-control form-control-lg"
          type="text"
          name="searchQuery"
          onChange={this.handleInputChange}
      />
      <button id="search-button" type="submit" onClick={this.search}>
          Go
  </button>
  </div>
    )
  }
}



export default Search


