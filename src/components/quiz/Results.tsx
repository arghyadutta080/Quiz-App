import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { Share2 } from "lucide-react";

const Results = () => {
  const { score, numberOfQuestions, correctAnsMarks, resetQuiz } =
    useQuizStore();

  return (
    <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <div className="mx-auto w-24 h-24 mb-4">
          <iframe
            className=" w-full h-32 pb-4"
            src="https://lottie.host/embed/52670f42-306b-4684-8ae3-8ecab38f9120/UD3RPRPBEg.lottie"
          ></iframe>
        </div>
        <CardTitle className="text-2xl my-2">Congratulations!</CardTitle>
        <p className="text-muted-foreground">
          You are doing better than 0% students
        </p>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        <div className="bg-purple-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">
            {(score * 100) / (numberOfQuestions * correctAnsMarks)}%
          </div>
          <div className="text-sm text-purple-600">Accuracy</div>
        </div>
        <div className="bg-teal-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600">100</div>
          <div className="text-sm text-teal-600">Speed</div>
        </div>
        <div className="bg-red-100 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-600">{score}</div>
          <div className="text-sm text-red-600">Total Score</div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button variant="outline" className="w-full">
          Detailed Solution
        </Button>
        <Button variant="outline" className="w-full">
          <Share2 className="w-4 h-4 mr-2" />
          Share Result
        </Button>
        <Button onClick={resetQuiz} className="w-full">
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Results;
