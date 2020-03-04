import React, { Component } from "react";
import Header from "./components/Header"
import Search from "./components/Search"
import Wrapper from "./components/Wrapper"
import Button from "./components/Button"
import API from "./utils/API";


class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  getbooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, bookSearch: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Search></Search>
        <Button
          booksearch={this.call} 
        ></Button>
      </Wrapper>
    )
  }
}


export default App;