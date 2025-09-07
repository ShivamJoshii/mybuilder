"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  soundEnabled = true,
  autoStart = false,
}: {
  words: {
    text: string;
    className?: string;
    pause?: number;
  }[];
  className?: string;
  cursorClassName?: string;
  soundEnabled?: boolean;
  autoStart?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(autoStart);

  const playTypewriterSound = () => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  const startTyping = () => {
    setHasStarted(true);
    setIsTyping(true);
  };

  const typeNextCharacter = async () => {
    if (currentWordIndex >= words.length) {
      setIsTyping(false);
      return;
    }

    const currentWord = words[currentWordIndex];
    
    if (currentCharIndex < currentWord.text.length) {
      // Type the next character
      playTypewriterSound();
      setCurrentCharIndex(prev => prev + 1);
      await new Promise(resolve => setTimeout(resolve, 100)); // Character typing speed
    } else {
      // Word is complete, move to next word
      if (currentWord.pause) {
        await new Promise(resolve => setTimeout(resolve, currentWord.pause));
      } else {
        // Default pause between words
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      setCurrentWordIndex(prev => prev + 1);
      setCurrentCharIndex(0);
    }
  };

  useEffect(() => {
    if (hasStarted && isTyping && currentWordIndex < words.length) {
      typeNextCharacter();
    }
  }, [hasStarted, isTyping, currentWordIndex, currentCharIndex, words]);

  const renderWords = () => {
    return (
      <div className={cn("text-base sm:text-xl lg:text-2xl leading-relaxed", className)}>
        {words.map((word, idx) => {
          const isCurrentWord = idx === currentWordIndex;
          const isPastWord = idx < currentWordIndex;
          
          return (
            <span key={`word-${idx}`} className="inline-block mr-2">
              {isPastWord ? (
                // Already typed words
                <span className={cn("text-dark", word.className)}>
                  {word.text}
                </span>
              ) : isCurrentWord && hasStarted ? (
                // Currently typing word - show characters up to currentCharIndex
                <span className={cn("text-dark", word.className)}>
                  {word.text.slice(0, currentCharIndex)}
                  <span className={cn("inline-block w-1 h-6 bg-primary ml-1 animate-pulse", cursorClassName)} />
                </span>
              ) : (
                // Future words (hidden until it's their turn)
                <span className="opacity-0">
                  {word.text}
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  if (!hasStarted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Ready to discover how we can transform your clinic?
          </p>
          <button
            onClick={startTyping}
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start the Story
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={scope} className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {renderWords()}
      </div>
    </div>
  );
};
