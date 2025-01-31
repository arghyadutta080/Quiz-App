import { Question } from "./quizApiResponse"

export interface QuizState {
    currentQuestion: number
    correctAnsMarks: number
    negativeMarks: number
    score: number
    answers: Record<number, number>
    questions: Question[]
    numberOfQuestions: number
    showSolution: boolean
    isStarted: boolean
    isComplete: boolean
    allowSuffle: boolean
    setQuestions: (questions: Question[], correctPoints: number, negativePoints: number, suffling: boolean) => void
    setAnswer: (questionId: number, answerId: number) => void
    startQuiz: () => void
    nextQuestion: () => void
    completeQuiz: () => void
    resetQuiz: () => void
    toggleSolution: () => void
}