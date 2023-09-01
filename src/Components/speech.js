// speech.js

// Check if the Web Speech API is available in the browser
const isSpeechSynthesisSupported = 'speechSynthesis' in window;

const speech = {
  // Check if text-to-speech is supported in the browser
  isSupported: isSpeechSynthesisSupported,

  // Function to speak the provided text
  speak: (text) => {
    if (isSpeechSynthesisSupported) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  },

  // Function to stop speech synthesis
  stop: () => {
    if (isSpeechSynthesisSupported) {
      window.speechSynthesis.cancel();
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  },
};

export default speech;
