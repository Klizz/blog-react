import React from "react";
import BlogPost from "./components/BlogPost";
import MainBlog from "./components/MainBlog";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import "./materialize/css/materialize.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <MainBlog
          image={
            <img
              src="https://ichef.bbci.co.uk/news/660/cpsprodpb/C3E5/production/_110794105_a4324281-d473-4819-bac8-a3bcdb8b433f.jpg"
              alt="Not found"
              width="100%"
            />
          }
          title="Seven female scientists you may not have heard of - but should know all about"
          post="Teach First has launched the STEMinism camapign, calling to close gender gaps in science and maths careers.
          It says no female scientists were mentioned in the GCSE science curriculum, while just two - 
          DNA pioneer Rosalind Franklin and paleoanthropologist Mary Leakey - were referred to in three double science GCSE specifications from 
          the major exam boards. In comparison, more than 40 male scientists or their discoveries were mentioned."
        />

        <div className="row">
          <h5>Tech</h5>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/hXV89ejsheSd8rRfuBNdgA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjM1O2g9NDAw/https://media.zenfs.com/en-us/zacks.com/aee1201586f6167d42ab250e80a0dcea"
                  alt="not found"
                />
              }
              title="Enjoying the view? How computers can help evaluate landscapes"
              date="6 feb 2020"
              post="Geographers from Staffordshire University are stepping into the virtual world of computer games to develop exciting new ways of assessing landscapes."
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
                  src="https://www.howtogeek.com/wp-content/uploads/2019/08/img_5d435dcc84a32.jpg"
                  alt="not found"
                />
              }
              title="The best computer mice"
              date="6 feb 2020"
              post="An effective computer mouse can seriously help improve your computing experience, and the best of the bunch remains the Logitech MX Master, thanks to its mix of excellent feature-set and ergonomic design."
              author="Jane Smith"
            />
          </div>
        </div>

        <div className="row">
          <h5>Internet</h5>
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
                  src="https://upload.wikimedia.org/wikipedia/en/e/ee/Harambe_with_boy.jpg"
                  alt="not found"
                />
              }
              title="17 of the most viral images of all time that have helped define the 21st century so far"
              date="6 feb 2020"
              post="Cincinnati zookeepers shot and killed Harambe the gorilla in 2016 after a toddler got into his enclosure, and Harambe became a meme. 
              The incident sparked heated debates over whether his death could've been prevented, and the internet's dark humor."
              author="Ana E. Collins"
            />
          </div>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://scx1.b-cdn.net/csz/news/800/2020/googletakeou.jpg"
                  alt="not found"
                />
              }
              title="Google says glitch sent people's videos to strangers"
              date="6 feb 2020"
              post="Google on Tuesday said that a software glitch resulted in some Photo app smartphone videos being given to the wrong people."
              author="Jane Smith"
            />
          </div>
        </div>

        <div className="row">
          <h5>Science</h5>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://cdn.heraldodemexico.com.mx/wp-content/uploads/2020/02/06202100/astronauta-nasa-640x400.jpg"
                  alt="not found"
                />
              }
              title="Nasa astronaut sets new female space record"
              date="6 feb 2020"
              post="Nasa astronaut Christina Koch has completed the longest-ever single spaceflight by a woman."
              author="Jane Smith"
            />
          </div>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://ichef.bbci.co.uk/news/660/cpsprodpb/9556/production/_110803283_gettyimages-1154576333.jpg"
                  alt="not found"
                />
              }
              title="Fireflies face extinction risk - and tourists are partly to blame"
              date="6 feb 2020"
              post="Firefly tourism is on the rise globally but scientists are warning it may contribute to risk of the insect's extinction."
              author="Ana E. Collins"
            />
          </div>
          <div class="col s12 m4">
            <BlogPost
              image={
                <img
                  src="https://ichef.bbci.co.uk/news/660/cpsprodpb/10E14/production/_110804196_index.jpg"
                  alt="not found"
                />
              }
              title="London start-up launches first big batch of satellites"
              date="6 feb 2020"
              post="The UK-based OneWeb company has sent 34 satellites into orbit on a single Soyuz rocket from Baikonur in Kazakhstan."
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
