import React from 'react';
import BlogPost from './BlogPost';

function Section () {
    return(
        <div className="row">
          <h5>
            <a href="/" className="pink-text text-darken-2">
              Seccion >
            </a>{" "}
          </h5>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://wallpaperaccess.com/full/38582.jpg"
                  alt="not found"
                />
              }
              title="Aqui va el titulo de la nota del blog"
              date="Aqui va la fecha"
              post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Aqui va el autor"
            />
          </div>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://wallpaperaccess.com/full/38582.jpg"
                  alt="not found"
                />
              }
              title="Aqui va el titulo de la nota del blog"
              date="Aqui va la fecha"
              post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Aqui va el autor"
            />
          </div>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://wallpaperaccess.com/full/38582.jpg"
                  alt="not found"
                />
              }
              title="Aqui va el titulo de la nota del blog"
              date="Aqui va la fecha"
              post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Aqui va el autor"
            />
          </div>
        </div>
    )
}

export default Section;