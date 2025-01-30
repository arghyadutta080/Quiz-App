"use client";

import { useQuizStore } from "@/lib/stores/quiz-store";
import React, { useEffect } from "react";
import { CountDown, Results, StartScreen } from "../quiz";

const QuizWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isStarted, isComplete, currentQuestion, nextQuestion } =
    useQuizStore();

  useEffect(() => {
    if (isStarted && currentQuestion === 0) {
      // If the quiz has started but we're still on question 0, move to the first question
      nextQuestion();
    }
  }, [isStarted, currentQuestion, nextQuestion]);

  if (!isStarted) {
    return <StartScreen />;
  }

  if (isComplete) {
    return <Results />;
  }

  if (currentQuestion === 0) {
    return <CountDown />;
  }
  return <QuizWrapper>{children}</QuizWrapper>;
};

export default QuizWrapper;
