import { create } from "zustand";

export interface ICategories {
    id: number;
    name: string;
}

interface IQuizState {
    config: {
        numberOfQuestions: number;
        category: ICategories;
        type: string;
        level: string;
        score: number;
        status: boolean;
        currentQuestion: number;
        quizEnd: boolean;
    };
    updateNumberOfQuestions: (numberOfQuestions: number) => void;
    changeCategory: (category: ICategories) => void;
    changeLevel: (level: string) => void;
    changeType: (type: string) => void;
    startQuiz: () => void;
    updateScore: () => void;
    updateCurrentQuestion: () => void;
    endQuiz: () => void;
    restartTest: () => void;
}

export const useQuizStore = create<IQuizState>()((set) => ({
    config: {
        numberOfQuestions: 10,
        category: {
            name: "",
            id: 0,
        },
        type: "",
        level: "",
        score: 0,
        status: false,
        currentQuestion: 1,
        quizEnd: false,
    },
    updateNumberOfQuestions: (numberOfQuestions) =>
        set((state) => ({
            config: {
                ...state.config,
                numberOfQuestions: numberOfQuestions,
            },
        })),
    changeCategory: (category) =>
        set((state) => ({
            config: {
                ...state.config,
                category,
            },
        })),
    changeLevel: (level) =>
        set((state) => ({
            config: {
                ...state.config,
                level,
            },
        })),
    changeType: (type) =>
        set((state) => ({
            config: {
                ...state.config,
                type,
            },
        })),
    startQuiz: () =>
        set((state) => ({
            config: {
                ...state.config,
                status: true,
            },
        })),
    updateScore: () =>
        set((state) => ({
            config: {
                ...state.config,
                score: (state.config.score += 1),
            },
        })),
    updateCurrentQuestion: () =>
        set((state) => ({
            config: {
                ...state.config,
                currentQuestion: (state.config.currentQuestion += 1),
            },
        })),
    endQuiz: () =>
        set((state) => ({
            config: {
                ...state.config,
                quizEnd: true,
            },
        })),
    restartTest: () =>
        set((state) => ({
            config: {
                numberOfQuestions: 10,
                category: {
                    name: "",
                    id: 0,
                },
                type: "",
                level: "",
                score: 0,
                status: false,
                currentQuestion: 1,
                quizEnd: false,
            },
        })),
}));
