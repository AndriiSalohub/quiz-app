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
    };
    updateNumberOfQuestions: (numberOfQuestions: number) => void;
    changeCategory: (category: ICategories) => void;
    changeLevel: (level: string) => void;
    changeType: (type: string) => void;
    startQuiz: () => void;
    updateScore: () => void;
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
                score: state.config.score++,
            },
        })),
}));
