import { useState } from 'react';

// Media
import materielleMockups from '../assets/materielle-mockups.png';
import nodeJS from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import sass from '../assets/sass.svg';
import mongoDb from '../assets/mongodb.svg';

function Materielle() {
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
      <img className="modal__banner-img" src={materielleMockups} alt="Mateielle website mockups on laptop and phone" />

      <div className="modal__top-info">
          <div className="modal__top-info-div">
            <div className="modal__title-div">
                <p className="modal__heading">Materielle</p>
                <p className="modal__light-p">May – July 2022</p>
            </div>

            <a className="modal__btn" href="https://github.com/rubyfrancesgit/materielle" target="_blank">GitHub Repository</a>
          </div>
          
          

          <p className="modal__p">Materielle is a personal project built with HTML, CSS, JavaScript, React, Mongo, Express, Node and Axios. It is a platform designed to connect people who want to collaborate and make content.
          <br />
          <br />
          I implemented dynamic routing using React Router, managed the applications state using createContext and useContext React hooks, and manipulated the DOM using useState hooks. For future developments I'd like to add messaging to the application through Socket.io.</p>

          <div className="modal__toolbelt-container">
              <p className="modal__heading">Built with...</p>
              <div className="modal__icon-div">
                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextMaterielle"])} onMouseOut={() => hideHoverText("htmlHoverTextMaterielle")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="htmlHoverTextMaterielle" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextMaterielle"])} onMouseOut={() => hideHoverText("htmlHoverTextMaterielle")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverTextMaterielle"])} onMouseOut={() => hideHoverText("cssHoverTextMaterielle")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="cssHoverTextMaterielle" onMouseOver={() => showHoverText(["CSS", "cssHoverTextMaterielle"])} onMouseOut={() => hideHoverText("cssHoverTextMaterielle")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextMaterielle"])} onMouseOut={() => hideHoverText("javascriptHoverTextMaterielle")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="Javascript icon" >
                            <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="javascriptHoverTextMaterielle" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextMaterielle"])} onMouseOut={() => hideHoverText("javascriptHoverTextMaterielle")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={nodeJS} onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextMaterielle"])} onMouseOut={() => hideHoverText("nodejsHoverTextMaterielle")} alt="Node Javascript icon" />

                    <p className="modal__hover-text hide" id="nodejsHoverTextMaterielle" onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextMaterielle"])} onMouseOut={() => hideHoverText("nodejsHoverTextMaterielle")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={react} onMouseOver={() => showHoverText(["React", "reactHoverTextMaterielle"])} onMouseOut={() => hideHoverText("reactHoverTextMaterielle")} alt="React icon" />

                    <p className="modal__hover-text hide" id="reactHoverTextMaterielle" onMouseOver={() => showHoverText(["React", "reactHoverTextMaterielle"])} onMouseOut={() => hideHoverText("reactHoverTextMaterielle")}>{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__mongo" src={mongoDb} onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextMaterielle"])} onMouseOut={() => hideHoverText("mongoHoverTextMaterielle")} alt="MongoDB icon" />

                    <p className="modal__hover-text hide" id="mongoHoverTextMaterielle" onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextMaterielle"])} onMouseOut={() => hideHoverText("mongoHoverTextMaterielle")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__sassMaterielle" src={sass} onMouseOver={() => showHoverText(["Sass", "sassHoverTextMaterielle"])} onMouseOut={() => hideHoverText("sassHoverTextMaterielle")} alt="Sass icon" />

                    <p className="modal__hover-text hide" id="sassHoverTextMaterielle" onMouseOver={() => showHoverText(["Sass", "sassHoverTextMaterielle"])} onMouseOut={() => hideHoverText("sassHoverTextMaterielle")} >{hoverText}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Materielle