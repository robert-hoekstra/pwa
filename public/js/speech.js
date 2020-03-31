if ('speechSynthesis' in window) {
    // Synthesis support. Make your web apps talk!
    var msg = new SpeechSynthesisUtterance('Ik ben booky');

    window.speechSynthesis.speak(msg);
   }
