import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProjects: [],
    projectDetail: null,
    filteredProjects: [],
};

export const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        getAllProjects: (state, action) => {
            state.allProjects = action.payload;
        },
        getProjectByName: (state, action) => {
            if (action.payload !== "") {
                state.filteredProjects = action.payload;
            } else {
                state.filteredProjects = state.allProjects;
            }
        },
        getProjectDetail: (state, action) => {
            state.projectDetail = action.payload;
        },
    },
});

export const {
    getAllProjects,
    getProjectByName,
    getProjectDetail,
} = projectSlice.actions;

export default projectSlice.reducer;
