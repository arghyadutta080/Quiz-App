import { Question, QuizState } from "@/lib/types"

type setType = {
    (partial: QuizState | Partial<QuizState> | ((state: QuizState) => QuizState | Partial<QuizState>), replace?: false): void;
    (state: QuizState | ((state: QuizState) => QuizState), replace: true): void;
}

export const calculateScore = (set: setType, answers: Record<number, number>, questions: Question[], questionId: number, answerId: number, correctAnsMarks: number, negativeMarks: number) => {
    const updatedAnswers = { ...answers, [questionId]: answerId }
    return Object.entries(updatedAnswers).reduce((score, [qId, aId]) => {
        const question = questions.find((q) => q.id === Number.parseInt(qId))
        const isCorrect = question?.options.find((o) => o.id === aId)?.is_correct
        if (isCorrect) {
            set((state) => ({ correctAnsCount: state.correctAnsCount + 1 }))
        }
        return (isCorrect ? score + correctAnsMarks : score - negativeMarks)
    }, 0)
}