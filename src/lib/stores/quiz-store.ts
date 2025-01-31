import { create } from "zustand"
import { Question } from "../types/quiz"

interface QuizState {
    currentQuestion: number
    score: number
    answers: Record<number, number>
    questions: Question[]
    numberOfQuestions: number
    showSolution: boolean
    isStarted: boolean
    isComplete: boolean
    setQuestions: (questions: Question[]) => void
    setAnswer: (questionId: number, answerId: number) => void
    startQuiz: () => void
    nextQuestion: () => void
    completeQuiz: () => void
    resetQuiz: () => void
    toggleSolution: () => void
}

export const useQuizStore = create<QuizState>((set, get) => ({
    currentQuestion: 0,
    score: 0,
    answers: {},
    showSolution: false,
    isStarted: false,
    isComplete: false,
    questions: [],
    numberOfQuestions: 0,

    setQuestions: (questionSet: Question[]) => {
        const state = get()
        // console.log(state.questions)
        if (state.questions.length != questionSet.length) {
            set({
                questions: questionSet,
                numberOfQuestions: questionSet.length
            })
        }
    },

    setAnswer: (questionId, answerId) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: answerId },
            score: calculateScore(state.answers, state.questions, questionId, answerId),
        })),

    startQuiz: () => set({ isStarted: true, currentQuestion: 0 }),

    nextQuestion: () => {
        const state = get()
        const nextQuestionNumber = state.currentQuestion + 1
        if (nextQuestionNumber > state.questions.length) {
            set({ isComplete: true })
        } else {
            set({
                currentQuestion: nextQuestionNumber,
                showSolution: false,
            })
        }
    },

    completeQuiz: () => set({ isComplete: true }),

    resetQuiz: () =>
        set({
            currentQuestion: 0,
            score: 0,
            answers: {},
            showSolution: false,
            isStarted: false,
            isComplete: false,
        }),

    toggleSolution: () => set((state) => ({ showSolution: !state.showSolution })),
}))

const calculateScore = (answers: Record<number, number>, questions: Question[], questionId: number, answerId: number) => {
    const updatedAnswers = { ...answers, [questionId]: answerId }
    return Object.entries(updatedAnswers).reduce((score, [qId, aId]) => {
        const question = questions.find((q) => q.id === Number.parseInt(qId))
        const isCorrect = question?.options.find((o) => o.id === aId)?.is_correct
        return score + (isCorrect ? 1 : 0)
    }, 0)
}
