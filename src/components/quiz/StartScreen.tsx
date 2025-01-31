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

const StartScreen = () => {
  const { startQuiz, setQuestions } = useQuizStore();

  const { data, isLoading, isError, isFetched, isFetching } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuizResponse,
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  });

  // if (isFetching || isLoading) {
  //   console.log("Fetching...");
  // }

  if (isFetched && data?.questions) {
    setQuestions(data.questions);
    // console.log(questions)
  }


  return (
    <div className="container mx-auto max-w-md p-4">
      <Card className="bg-indigo-900 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            {/* <img src="/placeholder.svg" alt="Logo" className="h-8" /> */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">🔥 1</span>
              <span className="flex items-center gap-1">🏆 1</span>
              <span className="flex items-center gap-1">🌟 2</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <CardTitle className="text-2xl">Pre Exam Test</CardTitle>
            <CardTitle className="text-base">Topic: {data && data.topic}</CardTitle>
            <CardTitle className="text-base">Title: {data && data.title}</CardTitle>
            <div className="flex justify-center items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                01:30 Hours
              </div>
              <div className="flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                75 Questions
              </div>
            </div>
          </div>
          <Button
            className="w-full bg-teal-500 hover:bg-teal-600"
            onClick={startQuiz}
          >
            START
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartScreen;
