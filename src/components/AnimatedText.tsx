import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalLength = text.length;
  const words = text.split(' ');
  let globalIndex = 0;

  return (
    <p
      ref={ref}
      className={`relative inline-block ${className ?? ''}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split('').map((char) => {
          const start = globalIndex / totalLength;
          const end = start + 1 / totalLength;
          globalIndex += 1;
          return (
            <CharSpan
              key={globalIndex}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Reserve a timing slot for the space so the reveal still flows
        // smoothly across word boundaries, even though the space itself
        // renders as a real (breakable) character below.
        if (wordIndex < words.length - 1) globalIndex += 1;

        return (
          <span key={wordIndex}>
            {/* Keeps every letter of this word glued together - the browser
                can only wrap the line at the space after this span, never
                in the middle of the word. */}
            <span className="inline-block whitespace-nowrap">{chars}</span>
            {wordIndex < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}

function CharSpan({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const isSpace = char === ' ';

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{isSpace ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
        aria-hidden="true"
      >
        {isSpace ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}
