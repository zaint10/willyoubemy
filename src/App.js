import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isAnswerYes, setIsAnswerYes] = useState(false);
  const [noButtonTextIndex, setNoButtonTextIndex] = useState(0);
  const [yesButtonFontSize, setYesButtonFontSize] = useState(16);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const noButtonAlternates = [
    "No0",
    "Are you sure?",
    "Absolutely NOT?",
    "Really sure?",
    "Please maan jao ?",
    "Seriously reconsider",
    "No means no!",
    "Last time sure?",
    "Absolutely not, no way, Zain!",
    "Definitely sure?",
    "Last chance?",
    "You might regret it",
    "Think again?",
    "Surely not?",
    "Never in a million years?",
    "Absolutely positive?",
    "Nope, nope, nope?",
    "100% certain?",
    "You are breaking my heart?",
    "Not on your life!",
    "Negative",
    "Fat chance!",
    "Not if pigs could fly!",
  ];

  const handleNoButtonClick = () => {
    setNoButtonTextIndex((prev) => {
      if (prev === noButtonAlternates.length - 1){
        return 0
      }

      return prev + 1;
    });
    setYesButtonFontSize(yesButtonFontSize + 20);
  };

  const handleYesButtonClick = () => {
    setIsAnswerYes(true);
    setIsSongPlaying(true);
  };

  useEffect(() => {
    const audioElement = document.getElementById('valentineSong');
    if (audioElement) {
      if (isSongPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }

    return () => {
      audioElement.pause();
    }
  }, [isSongPlaying]);

  return (
    <div className="App">
      <audio id="valentineSong" src="/assets/song.mp3" />
      {!isAnswerYes ? (
        <div className="container">
        
        <img 
        width={150}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dleHY0ZnhueWhzOXB6Z2tjbXpqMmIydDFkOGczOHRvZ3YzMmNrbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ie4CIIvQS0bk3zwZlM/giphy.gif" alt="Valentine's Day" />
        <h1>Will you be my Valentine?</h1>
        <div className='btn-container'>
          
        <button style={{ fontSize: yesButtonFontSize }} className='btn btn-yes' onClick={handleYesButtonClick}>
          Yes
        </button>
        <button onClick={handleNoButtonClick} className='btn btn-no'>
          {noButtonAlternates[noButtonTextIndex]}
        </button>
        </div>
        
      </div>
      ) : (<div className="container">
        <img 
        width={150}
        src="https://i.pinimg.com/originals/00/72/a9/0072a9d486565be41a322bbfb0fdefb3.gif" alt="Valentine's Day" />
        <h1>Yayyy</h1>
      </div>)}
      
    </div>
  );
}

export default App;
