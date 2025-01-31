import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl text-center">
        <CardHeader>
          <div className="mx-auto w-32 h-32 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-indigo-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
            Oops! 404
          </CardTitle>
          <p className="text-lg text-indigo-600">
            Looks like this question stumped us!
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            The page you&apos;re looking for seems to have vanished into thin
            air. Don&apos;t worry, even the brightest minds draw a blank
            sometimes!
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            asChild
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
