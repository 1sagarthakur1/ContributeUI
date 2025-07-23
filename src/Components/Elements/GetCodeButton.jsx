import React, { useEffect, useState } from 'react';
import './elementStyle.css'; // we'll put CSS here

export default function GetCodeButton({ onGetCodeClick }) {
  const [glow, setGlow] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const resetTimer = () => {
      setGlow(false); // stop glowing
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => setGlow(true), 7000);
      setTimer(newTimer);
    };

    const handleActivity = () => resetTimer();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    resetTimer(); // initialize

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <button className={`get-code-btn ${glow ? 'glow' : ''}`} onClick={onGetCodeClick}>
      Get Code
    </button>
  );
}
