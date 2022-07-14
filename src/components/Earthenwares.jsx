import { useState } from 'react';

// Media
import earthenwaresMockups from '../assets/earthenwares-mockups.svg';
import nodeJS from '../assets/nodejs.svg';
import sass from '../assets/sass.svg';
import mongoDb from '../assets/mongodb.svg';

function Earthenwares() {
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
      <img className="modal__banner-img" src={earthenwaresMockups} alt="Earthenwares website mockups on laptop and phone" />

      <div className="modal__top-info">
          <div className="modal__top-info-div">
            <div className="modal__title-div">
                <p className="modal__heading">Earthenwares</p>
                <p className="modal__light-p">April 2022</p>
            </div>

            <a className="modal__btn" href="https://github.com/rubyfrancesgit/Earthenwares" target="_blank">GitHub Repository</a>
          </div>
          
          <p className="modal__p">Earthenwares is a CRUD application created in collaboration with Justine Derrick and Daniel Kingston. Earthenwares is an online marketplace created for our (fictional) client, the Wellington Potters Association. We worked using the Agile methodology, taking turns in the prositions of Scrum Master and Product Owner. I was Git Master throughout the entire project. Justine took the lead on UX, Daniel was our everything man, and I was the lead on the backend, and we all contributed to building the frontend. Our talents were well matched, and the project was a success!
          <br />
          <br />
          We used jQuery to help manipulate the DOM. We used AJAX functions to call custom RESTful API with full CRUD functionality.
          <br />
          <br />
          We also undertook extensive UX and design research for this project: competitor analysis, user surveys, card sorting, user personas, user flows, UML diagram, low/mid/hi-fidelity wireframes, user testing wireframes and developing iterations of the design.</p>

          <div className="modal__toolbelt-container">
              <p className="modal__heading">Built with...</p>
              <div className="modal__icon-div">
                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("htmlHoverText")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="htmlHoverTextEarthenwares" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("htmlHoverTextEarthenwares")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("cssHoverTextEarthenwares")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="cssHoverTextEarthenwares" onMouseOver={() => showHoverText(["CSS", "cssHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("cssHoverTextEarthenwares")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("javascriptHoverTextEarthenwares")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="Javascript icon" >
                            <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="javascriptHoverTextEarthenwares" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("javascriptHoverTextEarthenwares")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={nodeJS} onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("nodejsHoverTextEarthenwares")} alt="Node Javascript icon" />

                    <p className="modal__hover-text hide" id="nodejsHoverTextEarthenwares" onMouseOver={() => showHoverText(["Node JS", "nodejsHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("nodejsHoverTextEarthenwares")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__mongo" src={mongoDb} onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("mongoHoverTextEarthenwares")} alt="MongoDB icon" />

                    <p className="modal__hover-text hide" id="mongoHoverTextEarthenwares" onMouseOver={() => showHoverText(["MongoDB", "mongoHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("mongoHoverTextEarthenwares")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__sass" src={sass} onMouseOver={() => showHoverText(["Sass", "sassHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("sassHoverTextEarthenwares")} alt="Sass icon" />

                    <p className="modal__hover-text hide" id="sassHoverTextEarthenwares" onMouseOver={() => showHoverText(["Sass", "sassHoverTextEarthenwares"])} onMouseOut={() => hideHoverText("sassHoverTextEarthenwares")} >{hoverText}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Earthenwares