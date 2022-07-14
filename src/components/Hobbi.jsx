import { useState } from 'react';

// Media
import hobbiMockups from '../assets/hobbi-mockups.png';
import nodeJS from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import sass from '../assets/sass.svg';
import mongoDb from '../assets/mongodb.svg';
import firebase from '../assets/firebase.svg';

function Hobbi() {
    const [hoverText, setHoverText] = useState("");

    const showHoverText = (value) => {
        console.log(value);
        setHoverText(value[0]);
        
        document.getElementById(value[1]).classList.remove("hide");
        console.log(document.getElementById(value[1]).classList);
    }

    const hideHoverText = (value) => {
        document.getElementById(value).classList.add("hide");
        console.log(document.getElementById(value).classList);
    }

  return (
    <div className="modal__padding">
      <img className="modal__banner-img" src={hobbiMockups} alt="Mateielle website mockups on laptop and phone" />

      <div className="modal__top-info">
          <div className="modal__top-info-div">
            <div className="modal__title-div">
                <p className="modal__heading">Hello Hobbi</p>
                <p className="modal__light-p">January – July 2022</p>
            </div>

            <a className="modal__btn" href="https://github.com/rubyfrancesgit/hello-hobbi-mern" target="_blank">GitHub Repository</a>
          </div>
          
          

          <p className="modal__p">Hello Hobbi is a personal project built with HTML, CSS, JavaScript, React, Redux, Mongo, Express, Node and Axios. The idea is to create a platform where people can learn and tech hobbies hands on and in-person. Like and AirBnb for hobbies.
          <br />
          <br />
          I implemented dynamic routing using React Router, managed the applications state using Redux, and manipulated the DOM using useState hooks. I'm in the process of creating full CRUD functionality.
          <br />
          <br />
          I also attempted to build an earlier version of Hobbi with Firebase - check out the GitHub repository <a className="modal__underline" href="https://github.com/rubyfrancesgit/hello-hobbi" target="_blank">here</a>. I created user authentication, stored data and images from the "host a hobby" form, and retrieved the data. The one area that I'm still working on is displaying the photos from the database.</p>

          <div className="modal__toolbelt-container">
              <p className="modal__heading">Built with...</p>
              <div className="modal__icon-div">
                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextHobbi"])} onMouseOut={() => hideHoverText("htmlHoverTextHobbi")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="htmlHoverTextHobbi" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextHobbi"])} onMouseOut={() => hideHoverText("htmlHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverTextHobbi"])} onMouseOut={() => hideHoverText("cssHoverTextHobbi")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="cssHoverTextHobbi" onMouseOver={() => showHoverText(["CSS", "cssHoverTextHobbi"])} onMouseOut={() => hideHoverText("cssHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextHobbi"])} onMouseOut={() => hideHoverText("javascriptHoverTextHobbi")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="Javascript icon" >
                            <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="javascriptHoverTextHobbi" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextHobbi"])} onMouseOut={() => hideHoverText("javascriptHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={nodeJS} onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextHobbi"])} onMouseOut={() => hideHoverText("nodejsHoverTextHobbi")} alt="Node Javascript icon" />

                    <p className="modal__hover-text hide" id="nodejsHoverTextHobbi" onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextHobbi"])} onMouseOut={() => hideHoverText("nodejsHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={react} onMouseOver={() => showHoverText(["React", "reactHoverTextHobbi"])} onMouseOut={() => hideHoverText("reactHoverTextHobbi")} alt="React icon" />

                    <p className="modal__hover-text hide" id="reactHoverTextHobbi" onMouseOver={() => showHoverText(["React", "reactHoverTextHobbi"])} onMouseOut={() => hideHoverText("reactHoverTextHobbi")}>{hoverText}</p>
                </div>
                
                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={redux} onMouseOver={() => showHoverText(["Redux", "reduxHoverTextHobbi"])} onMouseOut={() => hideHoverText("reduxHoverTextHobbi")} alt="Redux icon" />

                    <p className="tool-belt__hover-text hide" id="reduxHoverTextHobbi" onMouseOver={() => showHoverText(["Redux", "reduxHoverTextHobbi"])} onMouseOut={() => hideHoverText("reduxHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__mongo" src={mongoDb} onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextHobbi"])} onMouseOut={() => hideHoverText("mongoHoverTextHobbi")} alt="MongoDB icon" />

                    <p className="modal__hover-text hide" id="mongoHoverTextHobbi" onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextHobbi"])} onMouseOut={() => hideHoverText("mongoHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__sass" src={sass} onMouseOver={() => showHoverText(["Sass", "sassHoverTextHobbi"])} onMouseOut={() => hideHoverText("sassHoverTextHobbi")} alt="Sass icon" />

                    <p className="modal__hover-text hide" id="sassHoverTextHobbi" onMouseOver={() => showHoverText(["Sass", "sassHoverTextHobbi"])} onMouseOut={() => hideHoverText("sassHoverTextHobbi")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={firebase} onMouseOver={() => showHoverText(["Firebase", "firebaseHoverTextHobbi"])} onMouseOut={() => hideHoverText("firebaseHoverTextHobbi")} alt="MongoDB icon" />

                    <p className="modal__hover-text hide" id="firebaseHoverTextHobbi" onMouseOver={() => showHoverText(["Firebase", "firebaseHoverTextHobbi"])} onMouseOut={() => hideHoverText("firebaseHoverTextHobbi")} >{hoverText}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hobbi