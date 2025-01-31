export interface QuizApiResponse {
    id: number;
    name?: string | null;
    title?: string;
    description?: string;
    difficulty_level?: string | null;
    topic?: string;
    time?: string;
    is_published?: boolean;
    created_at?: string;
    updated_at?: string;
    duration?: number;
    end_time?: string;
    negative_marks?: string;
    correct_answer_marks?: string;
    shuffle?: boolean;
    show_answers?: boolean;
    lock_solutions?: boolean;
    is_form?: boolean;
    show_mastery_option?: boolean;
    reading_material?: string | null;
    quiz_type?: string | null;
    is_custom?: boolean;
    banner_id?: number | null;
    exam_id?: number | null;
    show_unanswered?: boolean;
    ends_at?: string;
    lives?: number | null;
    live_count?: string;
    coin_count?: number;
    questions_count?: number;
    daily_date?: string;
    max_mistake_count?: number;
    reading_materials?: unknown[];
    questions?: Question[];
}

export interface Question {
    id: number;
    description: string;
    detailed_solution: string;
    difficulty_level?: string | null;
    topic?: string;
    is_published?: boolean;
    created_at?: string;
    updated_at?: string;
    type?: string;
    is_mandatory?: boolean;
    show_in_feed?: boolean;
    pyq_label?: string;
    topic_id?: number;
    reading_material_id?: number;
    fixed_at?: string | null;
    fix_summary?: string | null;
    created_by?: string | null;
    updated_by?: string | null;
    quiz_level?: string | null;
    question_from?: string;
    language?: string | null;
    photo_url?: string | null;
    photo_solution_url?: string | null;
    is_saved?: boolean;
    tag?: string;
    options: Option[];
    reading_material?: ReadingMaterial | null;
}

export interface Option {
    id: number;
    description: string;
    is_correct: boolean;
    question_id?: number;
    created_at?: string;
    updated_at?: string;
    unanswered?: boolean;
    photo_url?: string | null;
}

export interface ReadingMaterial {
    id?: number;
    keywords?: string;
    content?: string | null;
    created_at?: string;
    updated_at?: string;
    content_sections?: string[];
    practice_material?: PracticeMaterial;
}

export interface PracticeMaterial {
    content?: string[];
    keywords?: string[];
}
