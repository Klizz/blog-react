import React from "react";



function BlogPost(props) {
  return (
        <div class="card">
          <div class="card-image">
            {props.image}
            <span class="card-title">{props.title}</span>
          </div>
          <div class="card-content">
            <p className="blue-grey-text darken-4">{props.date}</p>
            <p className="grey-text darken-4">{props.author}</p>
            <p>{props.post}</p>
            <a className="pink-text darken-4" href="/">See more</a>
          </div>
        </div>
  );
}

export default BlogPost;
