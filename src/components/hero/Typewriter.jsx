import React, { useEffect, useState } from 'react';

/**
 * Types each phrase out, holds, deletes, then moves to the next. Loops forever.
 * Respects prefers-reduced-motion by rendering the first phrase statically.
 */
const Typewriter = ({ phrases, typeMs = 46, deleteMs = 22, holdMs = 3200, startDelay = 900 }) => {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('idle'); // idle | typing | holding | deleting

  useEffect(() => {
    if (reduce) return undefined;
    const current = phrases[index % phrases.length];
    let t;

    if (phase === 'idle') {
      t = setTimeout(() => setPhase('typing'), startDelay);
    } else if (phase === 'typing') {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs + Math.random() * 14);
      } else {
        setPhase('holding');
      }
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), holdMs);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(t);
  }, [phase, text, index, phrases, typeMs, deleteMs, holdMs, startDelay, reduce]);

  return (
    <span className="tw" aria-live="polite" aria-atomic="true">
      {reduce ? phrases[0] : text}
      <span className={`tw_cursor ${phase === 'holding' ? 'tw_cursor--blink' : ''}`} aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
