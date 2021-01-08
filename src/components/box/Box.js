import React from "react";
import Carousel from "react-elastic-carousel";
import "./Box.css";
import { connect } from "react-redux";
import cover from "./cover.jpg"
const breaker = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 1025,
    itemsToShow: 3,
  },
];

const Box = (props) => {
  // console.log(props.data[0].thumbnail);
  // console.log(typeof props.data);
  const result = props.data;
  // console.log(typeof arr);
  if(result.length==0){
    alert("enter some valid recipe")
  }
  return (
    <>
      {result.length ? (
       
        <div>
          
          <Carousel breakPoints={breaker}>
            {result.map((item) => {
              var backgroundstyle = {};
              if(item.thumbnail.length == 0){
                backgroundstyle = {
                    backgroundImage: `url(${cover})`,
                    backgroundSize: "cover",
                  }
                }
              else {
                backgroundstyle  = {
                    backgroundImage: `url(${item.thumbnail})`,
                    backgroundSize: "cover",
                  }
                };

              const ingredient = item.ingredients.toString();
              return (
                <div className="box" style={backgroundstyle }>
                  <div className="content">
                    <div className="title">{item.title}</div>
                    <div>
                      {" "}
                      <span className="ingredients">Ingredients: </span>{" "}
                      {ingredient}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="box-wrapper">
          
          <Carousel breakPoints={breaker}>
            <div
              className="box"
              style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="box"
              style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="box"
              style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
              }}
            ></div>
          </Carousel>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps, null)(Box);
