"use client";

import { useEffect } from "react";
import {
  Alert,
  AlertDescription,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  RadioGroup,
  RadioGroupItem,
  Label,
} from "@/components/ui";
import { CheckCircle2, XCircle } from "lucide-react";
import type { Question as QuestionType } from "@/lib/types/quiz";
import { useQuizStore } from "@/lib/stores/quiz-store";

const Question = () => {
  const {
    answers,
    setAnswer,
    showSolution,
    toggleSolution,
    nextQuestion,
    currentQuestion,
    questions,
  } = useQuizStore();

  // console.log(questions);

  const question: QuestionType = questions[currentQuestion - 1];

  useEffect(() => {
    // Reset the answer when the question changes
    setAnswer(question?.id, -1);
  }, [question?.id, setAnswer]);

  const selectedAnswer = answers[question?.id];
  const hasAnswered = selectedAnswer !== undefined && selectedAnswer !== -1;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-lg font-medium">
        {question?.description}
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) =>
            setAnswer(question.id, Number.parseInt(value))
          }
          className="space-y-3"
        >
          {question?.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const showCorrect = hasAnswered && option.is_correct;
            const showIncorrect =
              hasAnswered && isSelected && !option.is_correct;

            return (
              <div
                key={option.id}
                className={`
                  flex items-center space-x-2 rounded-lg border p-4 transition-colors
                  ${showCorrect ? "bg-green-100 border-green-500" : ""}
                  ${showIncorrect ? "bg-red-100 border-red-500" : ""}
                `}
              >
                <RadioGroupItem
                  value={option.id.toString()}
                  id={option.id.toString()}
                  disabled={hasAnswered}
                />
                <Label htmlFor={option.id.toString()} className="flex-1">
                  {option.description}
                </Label>
                {showCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
                {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        {hasAnswered && (
          <Button variant="outline" onClick={toggleSolution} className="w-full">
            {showSolution ? "Hide" : "Show"} Solution
          </Button>
        )}
        {showSolution && (
          <Alert>
            <AlertDescription className="whitespace-pre-wrap">
              {question.detailed_solution}
            </AlertDescription>
          </Alert>
        )}
        {hasAnswered && currentQuestion < questions.length ? (
          <Button onClick={nextQuestion} className="w-full">
            Next Question
          </Button>
        ) : (
          hasAnswered && (
            <Button onClick={nextQuestion} className="w-full">
              Finish Quiz
            </Button>
          )
        )}
      </CardFooter>
    </Card>
  );
};

export default Question;
