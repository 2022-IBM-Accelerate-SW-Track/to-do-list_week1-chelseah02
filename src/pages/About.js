import React, { Component } from 'react';
import chelseaPic from "../images/Me.jpg";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src={chelseaPic}
                width='100px'
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <h1 className="name_title">Chelsea Heredia</h1>
              <p className="brief_description">
                I am a junior at the University of Texas at Dallas, where I will be graduating with a
                B.S. in Computer Science in May 2024.
              </p>
              <p className="brief_description">
                I am participating in the Software Development Track in IBM Accelerate Summer 2022.
              </p>

              <p className="brief_description">
                I enjoy listening to music, playing volleyball, watching movies, and spending time with my family
                and friends.
              </p>

              <p className="brief_description">
                Looking forward to a great summer!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}