import { create } from "zustand"
import { Question, QuizState } from "../types"
import { calculateCorrectAnsCount, calculateScore } from "@/utils/functions"

export const useQuizStore = create<QuizState>((set, get) => ({
    currentQuestion: 0,
    correctAnsMarks: 1,
    negativeMarks: 0,
    score: 0,
    answers: {},
    showSolution: false,
    isStarted: false,
    isComplete: false,
    questions: [],
    correctAnsCount: 0,
    numberOfQuestions: 0,
    allowSuffle: true,

    setQuestions: (questionSet: Question[], correctPoints: number, negativePoints: number, suffling: boolean) => {
        const state = get()
        if (state.questions.length != questionSet.length) {
            set({ allowSuffle: suffling })

            const finalQuestions = state.allowSuffle
                ? [...questionSet].sort(() => Math.random() - 0.5)  // suffling the questions
                : questionSet;

            set({
                questions: finalQuestions,
                numberOfQuestions: questionSet.length,
                correctAnsMarks: correctPoints,
                negativeMarks: negativePoints,
            })
        }
    },

    setAnswer: (questionId, answerId) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: answerId },
            score: calculateScore(state.answers, state.questions, questionId, answerId, state.correctAnsMarks, state.negativeMarks),
            correctAnsCount: calculateCorrectAnsCount(state.answers, state.questions),
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


