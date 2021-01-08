import React, { Component } from "react";
import { connect } from "react-redux";
import "./search.css";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe1: "",
      recipe2: "",
    };
  }
  searchChange1 = (event) => {
    this.setState({
      recipe1: event.target.value,
    });
  };
  searchChange2 = (event) => {
    this.setState({
      recipe2: event.target.value,
    });
  };
  Submit = (event) => {
    event.preventDefault();
    this.props.get_data(this.state);
  };

  handlestate = () => {};

  render() {
    console.log(this.state);
    return (
      <div className="search" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
        <form onSubmit={this.Submit}>
          <div className="inputbar">
            <div className="searchbar">
            <input
              className="search2"
              type="text"
              placeholder="recipe1"
              value={this.state.recipe1}
              onChange={this.searchChange1}
            ></input>

            <input
              className="search2"
              placeholder="recipe2"
              type="text"
              value={this.state.recipe2}
              onChange={this.searchChange2}
            ></input>
            </div>

            <button
              className="button"
              type="submit"
              onClick={this.handlestate}
            >
              search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_data: (data) => {
      if((data.recipe1=="")||(data.recipe2=="")){
        alert("enter some recipe")
        console.log("enters if part")
      }
      else {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://localhost:4000/recipe/${data.recipe1}/${data.recipe2}`;
        axios({
          method: "get",
          url: url
        }).then(function (response) {
          dispatch({ type: "GET_DATA", payload: response.data });
        });
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
