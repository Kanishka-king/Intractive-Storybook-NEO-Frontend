import React, { useState } from 'react';
import speech from './speech'; // Assuming you have a speech module

const Modal = ({ show, item, onClose }) => {
  const [isListening, setIsListening] = useState(false);

  // Function to start text-to-speech
  const startListening = () => {
    if (item.volumeInfo.description) {
      speech.speak(item.volumeInfo.description);
      setIsListening(true);
    }
  };

  // Function to stop text-to-speech
  const stopListening = () => {
    speech.stop(); // Assuming your speech module has a stop method
    setIsListening(false);
  };

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <div>
            {isListening ? (
              <button className='kkk' onClick={stopListening}>Stop Listening</button>
            ) : (
              <button className='kkk' onClick={startListening}>Listen to the Book</button>
            )}
          </div>
          <textarea className="description">{item.volumeInfo.description}</textarea>
        </div>
      </div>
    </>
  );
};

export default Modal;
