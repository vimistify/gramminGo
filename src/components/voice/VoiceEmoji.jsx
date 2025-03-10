import React, { useRef, useEffect, useState } from "react";
import "./VoiceEmoji.css";

const VoiceEmoji = ({ onVoiceInput }) => {
  const recognitionRef = useRef(null);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US"; // Adjust language as needed

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onVoiceInput(transcript);
      };

      recognition.onerror = (error) => {
        console.error("Speech recognition error:", error);
      };

      recognitionRef.current = recognition;
    } else {
      console.warn("Speech recognition is not supported in this browser.");
    }
  }, [onVoiceInput]);

  const startRecording = () => {
    if (recognitionRef.current && !recording) {
      recognitionRef.current.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && recording) {
      recognitionRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div
      className={`voice-emoji ${recording ? "recording" : ""}`}
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      onTouchStart={startRecording}
      onTouchEnd={stopRecording}
    >
      <p>🎤</p>
      <p style={{ fontSize: 12, color: "white" }}>Press & hold to speak</p>
    </div>
  );
};

export default VoiceEmoji;
