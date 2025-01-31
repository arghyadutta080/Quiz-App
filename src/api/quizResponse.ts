import { QuizApiResponse } from "@/lib/types/quizApiResponse";

export const fetchQuizResponse = async (): Promise<QuizApiResponse> => {
    const url = '/api/proxy';
    const response = await fetch(url)
    console.log(response)
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return response.json()
}