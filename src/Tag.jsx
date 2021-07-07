import React from 'react';
import img1 from "./one.png"
import img2 from "./two.png"
import img3 from "./three.png"
import img4 from "./four.png"
import "./Tag.css";
function Tag() {
  return (
    <>
      <div className="all">
      <a  href="">
        <div className="one">
          <h3 className="one-one">One-On-One-Classes</h3>
          <p>Personalized classes for our<br></br>students for better learning<br></br>experience.</p>
          <img className="img-one" src={img1}></img>
        </div>
        </a>
        <a  href="">
        <div className="two">
          <h3 className="two-two">Offline Classes</h3>
          <p>We provide offline <br></br> classes in your city.</p>
          <img className="img-two" src={img2}></img>
        </div>
        </a>
        <a  href="">
        <div className="three">
          <h3 className="three-three">Live Classes</h3>
          <p>Daily live classes with<br></br> doubt session for you.</p>
          <img className="img-three" src={img3}></img>
        </div>
        </a>
        <a  href="">
        <div className="four">

          <h3 className="four-four" >Get Free Counselling</h3>
          <p>Free career counselling by<br></br> the experts. So hurry up and <br></br> get registerd.</p>
          <img className="img-four" src={img4}></img>
        </div>
        </a>

      </div>
    </>
  )
}
export default Tag;

