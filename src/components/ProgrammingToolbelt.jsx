import React,  { useState } from 'react';

// media
import nodeJS from '../assets/nodejs.svg';
import firebase from '../assets/firebase.svg';
import sass from '../assets/sass.svg';
import bootstrap from '../assets/bootstrap.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import mongoDb from '../assets/mongodb.svg';
import gulp from '../assets/gulp.svg';

function ProgrammingToolbelt() {
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
    <div className="tool-belt">
        <p className="tool-belt__heading">My current programming tool belt includes...</p>

        <div className="tool-belt__container">
            <div className="tool-belt__icon-div">
                <div className="tool-belt__div">
                    <div className="tool-belt__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverText"])} onMouseOut={() => hideHoverText("htmlHoverText")}>
                        <svg className="tool-belt__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="tool-belt__hover-text hide" id="htmlHoverText" onMouseOver={() => showHoverText(["HTML", "htmlHoverText"])} onMouseOut={() => hideHoverText("htmlHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <div className="tool-belt__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverText"])} onMouseOut={() => hideHoverText("cssHoverText")}>
                        <svg className="tool-belt__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="tool-belt__hover-text hide" id="cssHoverText" onMouseOver={() => showHoverText(["CSS", "cssHoverText"])} onMouseOut={() => hideHoverText("cssHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <div className="tool-belt__svg" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverText"])} onMouseOut={() => hideHoverText("javascriptHoverText")}>
                        <svg className="tool-belt__rotate" viewBox="0 0 452 520" alt="Javascript icon" >
                            <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </div>

                    <p className="tool-belt__hover-text hide" id="javascriptHoverText" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverText"])} onMouseOut={() => hideHoverText("javascriptHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={nodeJS} onMouseOver={() => showHoverText(["Node JS", "nodejsHoverText"])} onMouseOut={() => hideHoverText("nodejsHoverText")} alt="Node Javascript icon" />

                    <p className="tool-belt__hover-text hide" id="nodejsHoverText" onMouseOver={() => showHoverText(["Node JS", "nodejsHoverText"])} onMouseOut={() => hideHoverText("nodejsHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={react} onMouseOver={() => showHoverText(["React", "reactHoverText"])} onMouseOut={() => hideHoverText("reactHoverText")} alt="React icon" />

                    <p className="tool-belt__hover-text hide" id="reactHoverText" onMouseOver={() => showHoverText(["React", "reactHoverText"])} onMouseOut={() => hideHoverText("reactHoverText")}>{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={redux} onMouseOver={() => showHoverText(["Redux", "reduxHoverText"])} onMouseOut={() => hideHoverText("reduxHoverText")} alt="Redux icon" />

                    <p className="tool-belt__hover-text hide" id="reduxHoverText" onMouseOver={() => showHoverText(["Redux", "reduxHoverText"])} onMouseOut={() => hideHoverText("reduxHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon tool-belt__mongo" src={mongoDb} onMouseOver={() => showHoverText(["MongoDB", "mongoHoverText"])} onMouseOut={() => hideHoverText("mongoHoverText")} alt="MongoDB icon" />

                    <p className="tool-belt__hover-text hide" id="mongoHoverText" onMouseOver={() => showHoverText(["MongoDB", "mongoHoverText"])} onMouseOut={() => hideHoverText("mongoHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon tool-belt__sass" src={sass} onMouseOver={() => showHoverText(["Sass", "sassHoverText"])} onMouseOut={() => hideHoverText("sassHoverText")} alt="Sass icon" />

                    <p className="tool-belt__hover-text hide" id="sassHoverText" onMouseOver={() => showHoverText(["Sass", "sassHoverText"])} onMouseOut={() => hideHoverText("sassHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={firebase} onMouseOver={() => showHoverText(["Firebase", "firebaseHoverText"])} onMouseOut={() => hideHoverText("firebaseHoverText")} alt="MongoDB icon" />

                    <p className="tool-belt__hover-text hide" id="firebaseHoverText" onMouseOver={() => showHoverText(["Firebase", "firebaseHoverText"])} onMouseOut={() => hideHoverText("firebaseHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon tool-belt__gulp" src={gulp} onMouseOver={() => showHoverText(["Gulp", "gulpHoverText"])} onMouseOut={() => hideHoverText("gulpHoverText")} alt="Gulp icon" />

                    <p className="tool-belt__hover-text hide" id="gulpHoverText" onMouseOver={() => showHoverText(["Gulp", "gulpHoverText"])} onMouseOut={() => hideHoverText("gulpHoverText")} >{hoverText}</p>
                </div>

                <div className="tool-belt__div">
                    <img className="tool-belt__icon" src={bootstrap} onMouseOver={() => showHoverText(["Bootstrap", "bootstrapHoverText"])} onMouseOut={() => hideHoverText("bootstrapHoverText")} alt="MongoDB icon" />

                    <p className="tool-belt__hover-text hide" id="bootstrapHoverText" onMouseOver={() => showHoverText(["Bootstrap", "bootstrapHoverText"])} onMouseOut={() => hideHoverText("bootstrapHoverText")} >{hoverText}</p>
                </div>

                
                

                {/* <img className="tool-belt__icon" src={react} alt="React icon" /> */}

                {/* <img className="tool-belt__icon" src={redux} alt="Redux icon" /> */}

                {/* <img className="tool-belt__icon" src={mongoDb} alt="Mongo Db icon" /> */}

                {/* <img className="tool-belt__icon" src={sass} alt="Sass icon" /> */}

                {/* <img className="tool-belt__icon tool-belt__gulp" src={gulp} alt="Gulp icon" /> */}

                {/* <img className="tool-belt__icon" src={bootstrap} alt="Bootstrap icon" />

                <img className="tool-belt__icon" src={firebase} alt="Firebase icon" /> */}
            </div>
        </div>
    </div>
  )
}

export default ProgrammingToolbelt
