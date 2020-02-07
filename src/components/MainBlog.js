import React from "react";

const Style = {
    marginTop: '50px',
    marginBottom: '50px'
  };

function MainBlog(props) {
  return (
    <div className="row z-depth-2" style={Style}>
      <div className="col s6 m6">
      {props.image}
      </div>
      <div className="col s6 m6">
        <h4> { props.title } </h4>
        <p className="blue-grey-text darken-4">{props.date}</p>
        <p className="pink-text darken-4"> { props.author } </p>
        <p> {props.post} </p>
        <a className="btn pink darken-3" href="/">See more</a>
      </div>
    </div>
  );
}

export default MainBlog;
