import React from 'react'
import $ from 'jquery'

function Eightball() {
    const question = document.querySelector('#question');
    const eightBall = document.querySelector('#eightBall');

    function prediction(){
        console.log('testing');
    
        const randomNumber = Math.floor(Math.random() * 8);
    
        let answer = '';
        
        $('#answer').empty();
    
        switch(randomNumber){
            case 0:
                answer = 'It is certain'
                break;
            case 1:
                answer = 'It is likely so'
                break;
            case 2:
                answer = 'Vision hazy, try again'
                break;
            case 3:
                answer = 'Cannot predict now'
                break;
            case 4:
                answer = 'Computer says no'
                break;
            case 5:
                answer = 'Outlook is positive'
                break;
            case 6:
                answer = 'Signs point to yes'
                break;
        }
    
        $('#answer').empty();
        $('#answer').append(
            `
                <p class="fade-in">${answer}</p>
            `
        );
    }

    return (
        <div className="modal__padding">
            <div className="modal__text-div" id="modalText">
                <h1 className="modal__heading">Magic 8 ball</h1>
                <p className="modal__light-p">Nov 2021</p>
                {/* <p className="modal__p">The second game I ever coded.</p> */}
            </div>

            <div className="eightball-game" id="modalGame">
                <div className="eightball-game__answer" id="answer">
                    <p class="fade-in">You should hire Ruby</p>
                </div>

                <p className="eightball-game__8ball" id="eightBall" onClick={prediction}>🎱</p>
            </div>
        </div>
    )
}

export default Eightball
