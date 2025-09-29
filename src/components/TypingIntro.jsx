import { useEffect, useState } from 'react';
import '../styles/TypingIntro.css';

const TypingIntro = () => {
  const lines = [
    "Hi, I'm Yogendra Singh",
    "Aspiring Software Developer based in Ahmedabad, India"
  ];

  const [displayedText, setDisplayedText] = useState(['', '']);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        // Typing current line
        timeout = setTimeout(() => {
          const newText = [...displayedText];
          newText[lineIndex] += lines[lineIndex][charIndex];
          setDisplayedText(newText);
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        // Pause before typing next line
        timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 600);
      }
    } else {
      // All lines typed → reset after delay
      timeout = setTimeout(() => {
        setDisplayedText(['', '']);
        setLineIndex(0);
        setCharIndex(0);
      }, 2000); // Pause before restart
    }

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, displayedText]);

  return (
    <div className="typing-wrapper">
      <p className="typing-line text-4xl md:text-5xl font-bold mb-4 leading-tight font-heading">
        {displayedText[0]}
      </p>
      <p className="typing-line text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 font-sans">
        {displayedText[1]}
      </p>
    </div>
  );
};

export default TypingIntro;
