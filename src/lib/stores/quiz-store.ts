import { questions } from "@/utils/constraints/constants/questions"
import { create } from "zustand"
// import { questions } from "@/data/questions"

interface QuizState {
    currentQuestion: number
    score: number
    answers: Record<number, number>
    showSolution: boolean
    isStarted: boolean
    isComplete: boolean
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

    setAnswer: (questionId, answerId) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: answerId },
            score: calculateScore(state.answers, questionId, answerId),
        })),

    startQuiz: () => set({ isStarted: true, currentQuestion: 0 }),

    nextQuestion: () => {
        const state = get()
        const nextQuestionNumber = state.currentQuestion + 1
        if (nextQuestionNumber > questions.length) {
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

const calculateScore = (answers: Record<number, number>, questionId: number, answerId: number) => {
    console.log(answers)
    const updatedAnswers = { ...answers, [questionId]: answerId }
    return Object.entries(updatedAnswers).reduce((score, [qId, aId]) => {
        const question = questions.find((q) => q.id === Number.parseInt(qId))
        const isCorrect = question?.options.find((o) => o.id === aId)?.is_correct
        return score + (isCorrect ? 1 : 0)
    }, 0)
}
