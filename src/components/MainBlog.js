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
        <h1>Hola</h1>
        <p>blog post</p>
      </div>
    </div>
  );
}

export default MainBlog;
