import React, { useState } from "react";
import "./Agent.css";
import VoiceEmoji from "../Voice/VoiceEmoji";

const Agent = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [grammarText, setGrammarText] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeResult, setActiveResult] = useState(null);

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  // Function to update the input text from voice
  const handleVoiceInput = (transcript) => {
    setInputText(transcript);
  };

  // Function to call OpenAI API for text correction (spelling & word usage)
  const handleCorrect = async () => {
    setLoading(true);
    const prompt = `Correct the following text for any spelling mistakes and inappropriate word usage while considering the context. The text may be in Hindi, English, or Hinglish:\n\n"${inputText}"`;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
          }),
        }
      );

      const data = await response.json();
      const result = data.choices[0].message.content.trim();
      setCorrectedText(result);
      setActiveResult("correct");
    } catch (error) {
      console.error("Error correcting text:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to call OpenAI API for Hinglish-to-English translation
  const handleTranslate = async () => {
    setLoading(true);
    const prompt = `Translate the following Hinglish text to proper English:\n\n"${inputText}"`;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
          }),
        }
      );

      const data = await response.json();
      const result = data.choices[0].message.content.trim();
      setTranslatedText(result);
      setActiveResult("translate");
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to check and correct grammar
  const handleGrammar = async () => {
    setLoading(true);
    const prompt = `Check the grammar of the following text and correct it if necessary while preserving its original meaning. The text may be in Hindi, English, or Hinglish:\n\n"${inputText}"`;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.2,
          }),
        }
      );

      const data = await response.json();
      const result = data.choices[0].message.content.trim();
      setGrammarText(result);
      setActiveResult("grammar");
    } catch (error) {
      console.error("Error checking grammar:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create an array of result objects
  const results = [
    { type: "correct", title: "Corrected Text", content: correctedText },
    { type: "translate", title: "Translated Text", content: translatedText },
    { type: "grammar", title: "Grammar Corrected Text", content: grammarText },
  ];

  // If a result was activated, sort so that it appears first
  const sortedResults = activeResult
    ? [
        results.find((r) => r.type === activeResult),
        ...results.filter((r) => r.type !== activeResult),
      ]
    : results;

  return (
    <div className="container">
      <h1 className="title">Text & Grammar Correction with Translator</h1>
      {/* The floating voice emoji always visible at the bottom right */}
      <VoiceEmoji onVoiceInput={handleVoiceInput} />
      <p style={{ textAlign: "center", margin: 10 }}>OR</p>
      <textarea
        className="input-text"
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="5"
      />

      <div className="button-group">
        <button className="button" onClick={handleCorrect} disabled={loading}>
          Correct Text
        </button>
        <button
          className="button secondary"
          onClick={handleTranslate}
          disabled={loading}
        >
          Translate to English
        </button>
        <button className="button" onClick={handleGrammar} disabled={loading}>
          Check Grammar
        </button>
      </div>

      {loading && <p className="loading">Processing...</p>}
      {sortedResults.map((result) =>
        result.content ? (
          <div key={result.type} className="result fade-in">
            <h2>{result.title}</h2>
            <p>{result.content}</p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Agent;
