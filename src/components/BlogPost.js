import React from "react";

function BlogPost(props) {
  return (
        <div class="card">
          <div class="card-image">
            {props.image}
            <span class="card-title">{props.title}</span>
          </div>
          <div class="card-content">
            <p>{props.date}</p>
            <p>{props.post}</p>
            <p>{props.author}</p>
          </div>
        </div>
  );
}

export default BlogPost;
