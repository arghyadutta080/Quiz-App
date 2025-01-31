"use client";

import React, { useEffect, useState } from "react";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { CountDown, Question, Results, StartScreen } from "../quiz";

const QuizScreenNavigator = () => {
  const { isStarted, isComplete, currentQuestion, nextQuestion } =
    useQuizStore();
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    if (isStarted && currentQuestion === 0) {
      setShowCountdown(true);
      const timer = setTimeout(() => {
        setShowCountdown(false);
        nextQuestion();
      }, 4000); // 3 seconds for countdown + 1 second for "GO"
      return () => clearTimeout(timer);
    }
  }, [isStarted, currentQuestion, nextQuestion]);

  if (!isStarted) {
    return <StartScreen />;
  }

  if (showCountdown) {
    return <CountDown />;
  }

  if (isComplete) {
    return <Results />;
  }

  if (currentQuestion === 0) {
    return null; // This should not happen, but just in case
  }
  return (
    <div className="container mx-auto p-4">
      <Question />
    </div>
  );
};

export default QuizScreenNavigator;
