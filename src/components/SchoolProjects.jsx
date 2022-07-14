import { useState } from 'react';

// Media
import earthenwaresSquare from "../assets/earthenwares-square.png";
import peruseSquare from "../assets/peruse-square.png";
import stayNzSquare from "../assets/stay-nz-square.png";
import theTaxLadySquare from "../assets/theTaxLady-square.png";
import Earthenwares from './Earthenwares';
import Peruse from './Peruse';
import StayNz from './StayNz';
import TheTaxLady from './TheTaxLady';

function SchoolProjects() {
  const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");
  const [earthenwaresModalClasses, setEarthenwaresModalClasses] = useState("modal hide");
  const [theTaxLadyModalClasses, setTheTaxLadyModalClasses] = useState("modal hide");
  const [peruseModalClasses, setPeruseModalClasses] = useState("modal hide");
  const [stayNzModalClasses, setStayNzModalClasses] = useState("modal hide");

  function launchEarthenwaresModal() {
    setModalBackgroundClasses("modal-background");
    setEarthenwaresModalClasses("modal");
    console.log("launch able modal");
  }

  function launchTheTaxLadyModal() {
    setModalBackgroundClasses("modal-background");
    setTheTaxLadyModalClasses("modal");
    console.log("launch tax lady modal");
  }

  function launchPeruseModal() {
    setModalBackgroundClasses("modal-background");
    setPeruseModalClasses("modal");
    console.log("launch peruse modal");
  }

  function launchStayNzModal() {
    setModalBackgroundClasses("modal-background");
    setStayNzModalClasses("modal");
    console.log("launch StayNz modal");
  }
  
  function closeModal() {
    setModalBackgroundClasses("modal-background hide");
    setTheTaxLadyModalClasses("modal hide");
    setEarthenwaresModalClasses("modal hide");
    setStayNzModalClasses("modal hide");
    setPeruseModalClasses("modal hide");
  }

  const projectInfoHover = (id) => {
    console.log('hover in');
    document.getElementById(id).classList.remove("hide");
  } 

  const hideProjectInfoHover = (id) => {
    console.log('hover out');
    document.getElementById(id).classList.add("hide");
  } 

  return (
    <>
      <center className={earthenwaresModalClasses}>
          <Earthenwares />
      </center>

      <center className={theTaxLadyModalClasses}>
          <TheTaxLady />
      </center>

      <center className={peruseModalClasses}>
          <Peruse />
      </center>

      <center className={stayNzModalClasses}>
          <StayNz />
      </center>

      <center className={modalBackgroundClasses} id="modalBackground" onClick={closeModal}>
      </center>

      <div className="school-projects">
        <div className="school-projects__text-div">
          <h2 className="school-projects__heading">School projects</h2>
          <p className="school-projects__intro-p">These projects are a benchmark for how far I’ve come in my personal learning. The syllabus didn't include React or Redux, so these projects work with vanilla JavaScript & jQuery.</p>
        </div>

        <div className="school-projects__projects-container">

          <div className="school-projects__project-div school-projects__project-div-p-b" onMouseOver={() => projectInfoHover("earthenwaresInfo")} onMouseOut={() => hideProjectInfoHover("earthenwaresInfo")}>
            <div className="school-projects__hover-info hide" id="earthenwaresInfo">
              <p className="school-projects__title">Earthenwares</p>
              <p className="school-projects__info-p">UX design, HTML, CSS, Sass, JavaScript, Node, MongoDB, Express</p>
              <button className="school-projects__btn" onClick={launchEarthenwaresModal}>Check it out</button>
            </div>

            <img className="school-projects__img" src={earthenwaresSquare} alt="iPhone mockup of Earthenwares project" />
          </div>

          <div className="school-projects__project-div school-projects__project-div-b-g" onMouseOver={() => projectInfoHover("theTaxLadyInfo")} onMouseOut={() => hideProjectInfoHover("theTaxLadyInfo")}>
            <img className="school-projects__img" src={theTaxLadySquare} alt="website mockup of The Tax Lady website" />

            <div className="school-projects__hover-info hide" id="theTaxLadyInfo">
              <p className="school-projects__title">The Tax Lady</p>
              <p className="school-projects__info-p">UX design, WordPress CMS, PHP, HTML, CSS</p>
              <button className="school-projects__btn" onClick={launchTheTaxLadyModal}>Check it out</button>
            </div>
          </div>

          <div className="school-projects__project-div school-projects__project-div-o-p" onMouseOver={() => projectInfoHover("peruseInfo")} onMouseOut={() => hideProjectInfoHover("peruseInfo")}>
            <img className="school-projects__img" src={peruseSquare} alt="iPhone mockup of Stay NZ project" />

            <div className="school-projects__hover-info hide" id="peruseInfo">
              <p className="school-projects__title">Peruse</p>
              <p className="school-projects__info-p">HTML, CSS, Sass, JavaScript, Node, MongoDB, Express</p>
              <button className="school-projects__btn" onClick={launchPeruseModal}>Check it out</button>
            </div>
          </div>

          <div className="school-projects__project-div school-projects__project-div-b-g" onMouseOver={() => projectInfoHover("stayNzInfo")} onMouseOut={() => hideProjectInfoHover("stayNzInfo")}>
            <div className="school-projects__hover-info hide" id="stayNzInfo">
              <p className="school-projects__title">Stay NZ</p>
              <p className="school-projects__info-p">Stay nz info</p>
              <button className="school-projects__btn" onClick={launchStayNzModal}>Check it out</button>
            </div>

            <img className="school-projects__img" src={stayNzSquare} alt="iPhone mockup of Stay NZ website" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolProjects;
