import React, { Component } from "react";
import "./Header.css";
import plate from "./plate.png"

class Header extends Component {
  render() {
    return (
      <header className="header">  
        <span className='recipe'>Recipe</span> 
        <img id="plate" src={plate}/>
        <span className='search'>Search</span>
        <div className="gillion">
          Gillion 
          <span className="foodie">
             foodie
          </span>
          <div className="cooking">
            COOKING BLOG
          </div>
        </div>        
      </header>
    );
  }
}

export default Header;
