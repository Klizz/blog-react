import React from "react";
import BlogPost from "./components/BlogPost";
import MainBlog from "./components/MainBlog";
import "./materialize/css/materialize.css";



function App() {
  return (
    <div>
      < MainBlog
      image={
        <img
        src="https://www.freedigitalphotos.net/images/img/homepage/339504.jpg"
        alt="Not found"
        />
      }
      title=""
      post=""
       />
      <div className="row z-depth-2">
        <div class="col s12 m4">
          <BlogPost
            image={
              <img
                src="https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg"
                alt="not found"
              />
            }
            title="Talking cat asks owner 'Are you coming?' in viral TikTok video"
            date="6 feb 2020"
            post="A TikTok video purporting to show a cat asking its owner, “Are you coming?” has gone viral, and admittedly it’s hard to believe."
            author="Jane Smith"
          />
        </div>
        <div class="col s12 m4">
          <BlogPost
            image={
              <img
                src="https://i.pcmag.com/imagery/reviews/07LLQWrr7cxOWl7ebgWvNe7-17.fit_lpad.size_624x364.jpg"
                alt="not found"
              />
            }
            title="Gaming Laptops, Monitors, And Desktops Discounted In Big PC Sale"
            date="6 feb 2020"
            post="If you've been looking for a new gaming laptop, PC, or monitor, then Best Buy's latest sale will serve you well."
            author="Ana E. Collins"
          />
        </div>
        <div class="col s12 m4">
          <BlogPost
            image={
              <img
                src="https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2019/12/glacial-lakes/glacial-lakes-gokyo-village-nepal.adapt.1900.1.jpg"
                alt="not found"
              />
            }
            title="This Year’s Travel Essentials— Winter/Spring Edition"
            date="6 feb 2020"
            post="With the holiday season behind us and President’s Day weekend just around the corner, it is time to plan a few last winter getaways, as well as some terrific spring adventures."
            author="Jane Smith"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
