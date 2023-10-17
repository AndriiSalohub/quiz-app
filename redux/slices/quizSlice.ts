import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICategories {
    id: number;
    name: string;
}

interface IState {
    numberOfQuestions: number;
    category: ICategories;
    type: string;
    level: string;
    score: number;
    status: boolean;
}

const initialState: IState = {
    numberOfQuestions: 10,
    category: {
        id: 9,
        name: "General Knowledge",
    },
    type: "boolean",
    level: "medium",
    score: 0,
    status: false,
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        updateNumberOfQuestions: (state, action: PayloadAction<number>) => {
            state.numberOfQuestions = action.payload;
        },
        updateCategory: (state, action: PayloadAction<ICategories>) => {
            state.category = action.payload;
        },
        updateType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
        updateLevel: (state, action: PayloadAction<string>) => {
            state.level = action.payload;
        },
        updateScore: (state) => {
            state.numberOfQuestions += 1;
        },
    },
});

export const {
    updateNumberOfQuestions,
    updateCategory,
    updateType,
    updateLevel,
    updateScore,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
