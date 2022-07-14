import { useState } from 'react';

// Media
import stayNzMockups from '../assets/stayNz-mockups.svg';
import sass from '../assets/sass.svg';

function StayNz() {
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
      <img className="modal__banner-img" src={stayNzMockups} alt="Earthenwares website mockups on laptop and phone" />

      <div className="modal__top-info">
          <div className="modal__top-info-div">
            <div className="modal__title-div">
                <p className="modal__heading">Stay NZ</p>
                <p className="modal__light-p">November - December 2021</p>
            </div>

            <a className="modal__btn" href="https://github.com/rubyfrancesgit/Accommodation-Summative/tree/master" target="_blank">GitHub Repository</a>
          </div>
          
          <p className="modal__p">The project scenario for this assignment was to create a single page web application for Tourism New Zealand as part of their new campaign aimed at visitors staying for short periods and booking their own accommodation. The application needed to help visitors search through accommodation options by location, dates, and number of guests, and calculate accommodation costs.

          <br />
          <br />
          Single page application. I used jQuery to help manipulate the DOM, object arrays to store data on each accommodation option. When visitors to the site use filters to search for accommodation options, the relevant stays are appended to the page.</p>

          <div className="modal__toolbelt-container">
              <p className="modal__heading">Built with...</p>
              <div className="modal__icon-div">
                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextStayNz"])} onMouseOut={() => hideHoverText("htmlHoverTextStayNz")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="htmlHoverTextStayNz" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextStayNz"])} onMouseOut={() => hideHoverText("htmlHoverTextStayNz")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverTextStayNz"])} onMouseOut={() => hideHoverText("cssHoverTextStayNz")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="cssHoverTextStayNz" onMouseOver={() => showHoverText(["CSS", "cssHoverTextStayNz"])} onMouseOut={() => hideHoverText("cssHoverTextStayNz")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextStayNz"])} onMouseOut={() => hideHoverText("javascriptHoverTextStayNz")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="Javascript icon" >
                            <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="javascriptHoverTextStayNz" onMouseOver={() => showHoverText(["JavaScript", "javascriptHoverTextStayNz"])} onMouseOut={() => hideHoverText("javascriptHoverTextStayNz")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon modal__sass" src={sass} onMouseOver={() => showHoverText(["Sass", "sassHoverTextStayNz"])} onMouseOut={() => hideHoverText("sassHoverTextStayNz")} alt="Sass icon" />

                    <p className="modal__hover-text hide" id="sassHoverTextStayNz" onMouseOver={() => showHoverText(["Sass", "sassHoverTextStayNz"])} onMouseOut={() => hideHoverText("sassHoverTextStayNz")} >{hoverText}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default StayNz