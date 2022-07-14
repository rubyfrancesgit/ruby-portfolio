import { useState } from 'react';

// Media
import ableMockups from '../assets/able-mockups.png';
import missionStatement from '../assets/mission-statement.png';
import moodboard from '../assets/moodboard.png';
import fontsColourScheme from '../assets/fonts-colour-scheme.png';
import ableLogos from '../assets/able-logos.png';
import ableSketches from '../assets/able-sketches.png';
import ableMockupPage from '../assets/able-mockup-page.svg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

function AbleSwap() {
  const arrowClick = (ids) => {
    document.getElementById(ids[0]).classList.add("hide");
    document.getElementById(ids[1]).classList.remove("hide");
  }

  return (
    <div className="modal__padding">
      <img className="modal__banner-img" src={ableMockups} alt="Mateielle website mockups on laptop and phone" />

        <div className="modal__top-info">
            <p className="modal__heading">Able Swap</p>
            <p className="modal__light-p">June 2021</p>

            <p className="modal__p modal__top-margin">Able Swap was a self-direct design project I created to help me learn Figma. The whole process was intuitive, as I'd not yet learnt about UX/UI. Through this project, by looking up Figma tutorials on YouTube, I began to get suggestions for UX content. One thing led to another, and a week later I was enrolled in Yoobee's Web & UX Diploma!
            <br />
            <br />
            I began with competitor analysis, exploring retail mobile apps like ASOS, Depop, and TradeMe. The next step was to write out what functionality Able Swap needed, and draw wireframes. Below is are slides of the design process, from mission statement throuhg to mockups.</p>
        </div>

        <div className="modal__slideshow-div" id="ableMissionStatement">
          <div className="modal__arrow" />

          <img className="modal__slideshow" src={missionStatement} alt="" />

          <img className="modal__arrow" src={rightArrow} alt="right arrow icon" onClick={() => arrowClick(["ableMissionStatement", "ableMoodboard"])} />
        </div>

        <div className="modal__slideshow-div hide" id="ableMoodboard">
          <img className="modal__arrow" src={leftArrow} alt="left arrow icon" onClick={() => arrowClick(["ableMoodboard", "ableMissionStatement"])} />

          <img className="modal__slideshow" src={moodboard} alt="" />
          
          <img className="modal__arrow" src={rightArrow} alt="right arrow icon" onClick={() => arrowClick(["ableMoodboard", "ableFontsColourScheme"])} />
        </div>

        <div className="modal__slideshow-div hide" id="ableFontsColourScheme">
          <img className="modal__arrow" src={leftArrow} alt="left arrow icon" onClick={() => arrowClick(["ableFontsColourScheme", "ableMoodboard"])}/>

          <img className="modal__slideshow" src={fontsColourScheme} alt="" />

          <img className="modal__arrow" src={rightArrow} alt="right arrow icon" onClick={() => arrowClick(["ableFontsColourScheme", "ableLogos"])} />
        </div>

        <div className="modal__slideshow-div hide" id="ableLogos">
          <img className="modal__arrow" src={leftArrow} alt="left arrow icon" onClick={() => arrowClick(["ableLogos", "ableFontsColourScheme"])} />

          <img className="modal__slideshow" src={ableLogos} alt="" />

          <img className="modal__arrow" src={rightArrow} alt="right arrow icon" onClick={() => arrowClick(["ableLogos", "ableSketches"])} />
        </div>

        <div className="modal__slideshow-div hide" id="ableSketches">
          <img className="modal__arrow" src={leftArrow} alt="left arrow icon" onClick={() => arrowClick(["ableSketches", "ableLogos"])} />

          <img className="modal__slideshow" src={ableSketches} alt="" />

          <img className="modal__arrow" src={rightArrow} alt="right arrow icon" onClick={() => arrowClick(["ableSketches", "ableMockupPage"])} />
        </div>

        <div className="modal__slideshow-div hide" id="ableMockupPage">
          <img className="modal__arrow" src={leftArrow} alt="left arrow icon" onClick={() => arrowClick(["ableMockupPage", "ableSketches"])} />
          
          <img className="modal__slideshow" src={ableMockupPage} alt="" />

          <div className="modal__arrow" />
        </div>
    </div>
  )
}

export default AbleSwap