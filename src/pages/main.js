import React, { Component } from "react";
import Header from "../components/header/Header";
import Box from "../components/box/Box";
import Searchbar from "../components/Search/search";
import "./main.css";
import Search from "../components/Search/search";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  render() {
    return (
      
        <div>
          <Header></Header> 
          <div className="content-wrapper">
            <Box></Box>
            <div className="searchwrap">
            <div className="search1">
              <Search></Search>
            </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Main;
