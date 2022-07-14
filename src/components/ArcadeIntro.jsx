import { useState } from 'react'

// Media
import bigStar from '../assets/big-star.svg';
import smallStar from '../assets/small-star.svg';
import bigStarYellow from '../assets/big-star-yellow.svg';
import smallStarYellow from '../assets/small-star-yellow.svg';
import orangeFruitchi from '../assets/orange-fruitchi.svg';

// Components 
import Eightball from '../components/Eightball';
import EmojiMadlibs from '../components/EmojiMadlibs';
import ApiDip from '../components/ApiDip';
import FruitchiPets from './FruitchiPets';

function ArcadeIntro() {
  const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");
  const [madLibsModalClasses, setMadLibsModalClasses] = useState("modal hide");
  const [eightBallModalClasses, setEightBallModalClasses] = useState("modal hide");
  const [fruitchiModalClasses, setFruitchiModalClasses] = useState("modal hide");

  function launch8BallModal() {
    setModalBackgroundClasses("modal-background");
    setEightBallModalClasses("modal");
  } 

  function launchMadLibsModal() {
    setModalBackgroundClasses("modal-background");
    setMadLibsModalClasses("modal");
  } 

  function launchFruitchiModal() {
    setModalBackgroundClasses("modal-background");
    setFruitchiModalClasses("modal");
  } 

  function closeModal() {
    setModalBackgroundClasses("modal-background hide");
    setMadLibsModalClasses("modal hide");
    setEightBallModalClasses("modal hide");
    setFruitchiModalClasses("modal hide");
  }

  const showHoverInfo = (id) => {
    document.getElementById(id).classList.remove("hide");
    console.log('hover');
  }

  const hideHoverInfo = (id) => {
      document.getElementById(id).classList.add("hide");
      console.log('hover');
  }
  
  return (
    <>
      <center className={eightBallModalClasses}>
          <Eightball />
      </center>

      <center className={madLibsModalClasses}>
          <EmojiMadlibs />
      </center>

      <center className={fruitchiModalClasses}>
          <FruitchiPets />
      </center>

      <center className={modalBackgroundClasses} onClick={closeModal}>
      </center>

      <div className="arcade">
        <div className="arcade__intro">
          <h2 className="arcade__heading">Arcade</h2>
          <p className="arcade__p">
          Founder and president of the Coding Games Club at Yoobee! I wanted to create a space where students could have fun with their code and get creative: somewhere to explore code without parameters (coding joke haha).
          <br />
          <br />
          When I first started learning Javascript, I coded games in my spare time to help me understand its logic and structure. These little games became the building blocks for my coding foundation!
          </p>

          <div className="arcade__top-right-star-div">
            <img className="arcade__big-star-tr arcade__twinkle" src={bigStar} alt="star icon" />
            <img className="arcade__small-star-one-tr arcade__twinkle" src={smallStar} alt="star icon" />
            <img className="arcade__small-star-two-tr arcade__twinkle" src={smallStar} alt="star icon" />
          </div>

          <div className="arcade__top-right-star-div-yellow">
            <img className="arcade__big-star-tr arcade__twinkle" src={bigStarYellow} alt="star icon" />
            <img className="arcade__small-star-one-tr arcade__twinkle" src={smallStarYellow} alt="star icon" />
            <img className="arcade__small-star-two-tr arcade__twinkle" src={smallStarYellow} alt="star icon" />
          </div>
        </div>

        <div className="arcade__container">
          <div className="arcade__card arcade__card-o-p" onMouseOver={() => showHoverInfo("fruitchiPetsInfo")}  onMouseOut={() => hideHoverInfo("fruitchiPetsInfo")}>
              <img className="arcade__img" src={orangeFruitchi} alt="cartoon orange character" />

              <div className="arcade__hover-info hide" id="fruitchiPetsInfo">
                  <p className="arcade__title">Fruitchi pets</p>
                  <button className="arcade__play-btn" onClick={launchFruitchiModal}>Play</button>
              </div>
          </div>

          <div className="arcade__card arcade__card-b-g" onMouseOver={() => showHoverInfo("8BallInfo")}  onMouseOut={() => hideHoverInfo("8BallInfo")} >
              <p className="arcade__big-emoji">🎱</p>

              <div className="arcade__hover-info hide" id="8BallInfo">
                  <p className="arcade__title">Magic 8 ball</p>
                  <button className="arcade__play-btn" onClick={launch8BallModal}>Play</button>
              </div>
          </div>

          <div className="arcade__card arcade__card-p-b" onMouseOver={() => showHoverInfo("emojiMadLibsInfo")} onMouseOut={() => hideHoverInfo("emojiMadLibsInfo")}>
              <p className="arcade__big-emoji">🐸</p>

              <div className="arcade__hover-info hide" id="emojiMadLibsInfo">
                  <p className="arcade__title">Emoji mad libs</p>
                  <button className="arcade__play-btn" onClick={launchMadLibsModal}>Play</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArcadeIntro
