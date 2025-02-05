import { Question } from "@/lib/types"

export const calculateScore = ( answers: Record<number, number>, questions: Question[], questionId: number, answerId: number, correctAnsMarks: number, negativeMarks: number) => {
    const updatedAnswers = { ...answers, [questionId]: answerId }
    return Object.entries(updatedAnswers).reduce((score, [qId, aId]) => {
        const question = questions.find((q) => q.id === Number.parseInt(qId))
        const isCorrect = question?.options.find((o) => o.id === aId)?.is_correct
        return (isCorrect ? score + correctAnsMarks : score - negativeMarks)
    }, 0)
}

export const calculateCorrectAnsCount = (answers: Record<number, number>, questions: Question[]) => {
    return Object.entries(answers).reduce((count, [qId, aId]) => {
        const question = questions.find((q) => q.id === Number.parseInt(qId))
        const isCorrect = question?.options.find((o) => o.id === aId)?.is_correct
        return isCorrect ? count + 1 : count
    }, 0)
}