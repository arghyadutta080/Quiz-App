import { Question } from "@/lib/types/quiz";


export const questions: Question[] = [
    {
        id: 1,
        description: "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is:",
        detailed_solution:
            "To determine the mRNA sequence from the given DNA sequence, we follow the principles of transcription. The mRNA sequence will be complementary to the DNA template strand, with U replacing T. Therefore, the correct sequence is 5' AAAU 3'.",
        options: [
            {
                id: 1,
                description: "5'UUUU3'",
                is_correct: false,
            },
            {
                id: 2,
                description: "3'UUUU5'",
                is_correct: false,
            },
            {
                id: 3,
                description: "5'AAAU3'",
                is_correct: true,
            },
            {
                id: 4,
                description: "3'AAAU5'",
                is_correct: false,
            },
        ],
    },
    {
        id: 2,
        description:
            "Avery, MacLeod and Mc Carty used the S(virulent) and R (avirulent) strains of streptococcus pneumoniae. They concluded that:",
        detailed_solution:
            "Through their groundbreaking experiments, Avery, MacLeod, and McCarty demonstrated that DNA was the transforming principle. They isolated DNA, RNA, and proteins from virulent bacteria and found that only DNA could transform non-virulent bacteria into virulent ones.",
        options: [
            {
                id: 1,
                description: "DNA was transforming agent",
                is_correct: true,
            },
            {
                id: 2,
                description: "RNA was transforming agent",
                is_correct: false,
            },
            {
                id: 3,
                description: "Protein was transforming agent",
                is_correct: false,
            },
            {
                id: 4,
                description: "All are correct",
                is_correct: false,
            },
        ],
    },
    // Add more questions as needed
]

