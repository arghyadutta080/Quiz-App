"use client";

import { fetchQuizResponse } from "@/api/quizResponse";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { useQuery } from "@tanstack/react-query";
import { Clock, HelpCircle } from "lucide-react";
import Image from "next/image";

const StartScreen = () => {
  const { startQuiz, setQuestions } = useQuizStore();

  const { data, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuizResponse,
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  });

  // if (isFetching || isLoading) {
  //   console.log("Fetching...");
  // }

  if (isError) {
    console.error(error);
  }

  if (
    isFetched &&
    data?.questions &&
    data?.correct_answer_marks &&
    data?.negative_marks &&
    data?.shuffle
  ) {
    setQuestions(
      data?.questions,
      parseInt(data?.correct_answer_marks),
      parseInt(data?.negative_marks),
      data?.shuffle
    );
    // console.log(questions)
  }

  return (
    <div className="container mx-auto w-full lg:w-2xl max-w-3xl p-4">
      <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Image
              src={`/assests/logo.png`}
              alt="Logo"
              height={100}
              width={100}
              className="h-20 rounded-md"
            />
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">🔥 1</span>
              <span className="flex items-center gap-1">🏆 1</span>
              <span className="flex items-center gap-1">🌟 2</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center space-y-2">
            <CardTitle className="text-2xl md:text-3xl text-indigo-800">
              Pre Exam Test
            </CardTitle>
            <CardTitle className="text-lg md:text-2xl text-indigo-800">
              Topic: {isLoading ? "Loading..." : data?.topic}
            </CardTitle>
            <CardTitle className="text-lg md:text-2xl text-indigo-800">
              Title: {isLoading ? "Loading..." : data?.title}
            </CardTitle>
            <div className="flex justify-center items-center gap-4 text-xl text-indigo-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {isLoading ? 0 : data?.duration} Minutes
              </div>
              <div className="flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                {isLoading ? 0 : data?.questions_count} Questions
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-base text-indigo-600">
              <div className="flex items-center gap-1">
                +{isLoading ? 0 : data?.correct_answer_marks} For each correct
                answer
              </div>
              <div className="flex items-center gap-1">
                -{isLoading ? 0 : data?.negative_marks} For each wrong answer
              </div>
            </div>
          </div>
          <Button
            className={`w-full ${
              isFetched
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-300 cursor-not-allowed"
            } bg-indigo-600 text-white`}
            onClick={startQuiz}
            disabled={!isFetched}
          >
            START
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartScreen;
