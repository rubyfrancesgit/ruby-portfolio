import { useState } from 'react';

// Media
import theTaxLadyMockups from '../assets/theTaxLady-mockups.png';
import phpLogo from '../assets/php-logo.svg';
import wordpressLogo from '../assets/wordpress-blue.svg';

function TheTaxLady() {
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
      <img className="modal__banner-img" src={theTaxLadyMockups} alt="Mateielle website mockups on laptop and phone" />

      <div className="modal__top-info">
          <div className="modal__top-info-div">
            <div className="modal__title-div">
                <p className="modal__heading">The Tax Lady</p>
                <p className="modal__light-p">June 2022</p>
            </div>

            <a className="modal__btn" href="https://ruby.doyle.yoobeestudent.net/thetaxlady/" target="_blank">Visit website</a>
          </div>
          
          <p className="modal__p">The Tax Lady is a CMS website I created using WordPress and PHP. The client is boutique accounting agnecy (not an actual client, just for the purposes of this school prpject). The site was designed so the client could update it ongoing - every colour, image, post type and page on the website are customisable through the WordPress CMS.
          <br />
          <br />
            I also redesigned their UI, completing an iterative UX process. This involved competitor research, typography & colour research, user testing style tiles and mockups, iterating designs based on feedback, and designing wih accessibility in mind. I used the Contrast plugin to check whether colour combinations on the website provided enough contrast for visually impaired users.</p>

          <div className="modal__toolbelt-container">
              <p className="modal__heading">Built with...</p>
              <div className="modal__icon-div">
                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("htmlHoverTextTheTaxLady")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="HTML icon">
                            <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>
                            <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="htmlHoverTextTheTaxLady" onMouseOver={() => showHoverText(["HTML", "htmlHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("htmlHoverTextTheTaxLady")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <div className="modal__svg" onMouseOver={() => showHoverText(["CSS", "cssHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("cssHoverTextTheTaxLady")}>
                        <svg className="modal__rotate" viewBox="0 0 452 520" alt="CSS icon">
                            <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
                            <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
                            <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
                            <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
                        </svg>
                    </div>

                    <p className="modal__hover-text hide" id="cssHoverTextTheTaxLady" onMouseOver={() => showHoverText(["CSS", "cssHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("cssHoverTextTheTaxLady")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={wordpressLogo} onMouseOver={() => showHoverText(["Wordpress", "wordpressHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("wordpressHoverTextTheTaxLady")} alt="Node Javascript icon" />

                    <p className="modal__hover-text hide" id="wordpressHoverTextTheTaxLady" onMouseOver={() => showHoverText(["Wordpress", "wordpressHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("wordpressHoverTextTheTaxLady")} >{hoverText}</p>
                </div>

                <div className="modal__toolbelt-div">
                    <img className="modal__icon" src={phpLogo} onMouseOver={() => showHoverText(["PHP", "phpHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("phpHoverTextTheTaxLady")} alt="Node Javascript icon" />

                    <p className="modal__hover-text hide" id="phpHoverTextTheTaxLady" onMouseOver={() => showHoverText(["PHP", "phpHoverTextTheTaxLady"])} onMouseOut={() => hideHoverText("phpHoverTextTheTaxLady")} >{hoverText}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TheTaxLady