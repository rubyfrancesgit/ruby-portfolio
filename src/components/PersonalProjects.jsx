import { useState } from 'react';

// Media
import materielleSquare from "../assets/materielle-square.png";
import hobbiSquare from "../assets/hobbi-square.png";
import ableSwapSquare from "../assets/able-swap-square.png";

// Components
import Materielle from './Materielle';
import Hobbi from './Hobbi';
import AbleSwap from './AbleSwap';

function PersonalProjects() {
  const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");
  const [materielleModalClasses, setMaterielleModalClasses] = useState("modal hide");
  const [hobbiModalClasses, setHobbiModalClasses] = useState("modal hide");
  const [ableSwapModalClasses, setAbleSwapModalClasses] = useState("modal hide");

  const projectInfoHover = (id) => {
    document.getElementById(id).classList.remove("hide");
  } 

  const hideProjectInfoHover = (id) => {
    document.getElementById(id).classList.add("hide");
  } 

  function launchMaterielleModal() {
    setModalBackgroundClasses("modal-background");
    setMaterielleModalClasses("modal");
    console.log("launch materielle modal");
  }

  function launchHobbiModal() {
    setModalBackgroundClasses("modal-background");
    setHobbiModalClasses("modal");
    console.log("launch hobbi modal");
  }

  function launchAbleSwapModal() {
    setModalBackgroundClasses("modal-background");
    setAbleSwapModalClasses("modal");
    console.log("launch able modal");
  }
  
  function closeModal() {
    setModalBackgroundClasses("modal-background hide");
    setMaterielleModalClasses("modal hide");
    setHobbiModalClasses("modal hide");
    setAbleSwapModalClasses("modal hide");
  }

  return (
    <>
      <center className={materielleModalClasses}>
          <Materielle />
      </center>

      <center className={hobbiModalClasses}>
          <Hobbi />
      </center>

      <center className={ableSwapModalClasses}>
          <AbleSwap />
      </center>

      <center className={modalBackgroundClasses} onClick={closeModal}>
      </center>
      
      <div className="personal-projects">
        <div className="personal-projects__container">
          <div className="personal-projects__text-div">
            <h2 className="personal-projects__heading">Personal projects</h2>
            <p className="personal-projects__p">A showcase of my technical capabilities & conceptual creativeness! These projects are my exploration of the limitless potential for connection & creativitity that coding enables us to have.</p>
          </div>

          <div className="personal-projects__projects-container">
              <div className="personal-projects__project-div personal-projects__project-div-b-g" onMouseOver={() => projectInfoHover("materielleInfo")} onMouseOut={() => hideProjectInfoHover("materielleInfo")}>
                <div className="personal-projects__hover-info hide" id="materielleInfo">
                  <p className="personal-projects__title">Materielle</p>
                  <p className="personal-projects__info-p">MERN stack, Sass</p>
                  <button className="personal-projects__info-btn" onClick={launchMaterielleModal}>Check it out</button>
                </div>

                <img className="personal-projects__img" src={materielleSquare} alt="iPhone mockup of Materielle project" />
              </div>

              <div className="personal-projects__project-div personal-projects__project-div-p-b" onMouseOver={() => projectInfoHover("hobbiInfo")} onMouseOut={() => hideProjectInfoHover("hobbiInfo")}>
                <img className="personal-projects__img" src={hobbiSquare} alt="Website mockup of Hello Hobbi project" />
                <div className="personal-projects__hover-info hide" id="hobbiInfo">
                  <p className="personal-projects__title">Hello Hobbi</p>
                  <p className="personal-projects__info-p">MERN stack, Redux, Sass</p>
                  <button className="personal-projects__info-btn" onClick={launchHobbiModal}>Check it out</button>
                </div>
              </div>

              <div className="personal-projects__project-div personal-projects__project-div-o-p" onMouseOver={() => projectInfoHover("ableSwapInfo")} onMouseOut={() => hideProjectInfoHover("ableSwapInfo")}>
                <img className="personal-projects__img" src={ableSwapSquare} alt="iPhone mockup of Materielle project" />

                <div className="personal-projects__hover-info hide" id="ableSwapInfo">
                  <p className="personal-projects__title">Able Swap</p>
                  <p className="personal-projects__info-p">UX/UI</p>
                  <button className="personal-projects__info-btn" onClick={launchAbleSwapModal}>Check it out</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalProjects
