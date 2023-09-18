import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProjects: [],
    projectDetail: [],
    filteredProjects: [],

};

export const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        getAllProjects: (state, action) => {
            const allProjects = action.payload;
            state.allProjects = allProjects;
        },

        getProjectByName: (state, action) => {
            if (action.payload !== "") {
                state.filteredProjects = action.payload;
            } else {
                state.allProjects;
            }
        },
        getProjectDetail: (state, action) => {
            const projectDetail = action.payload
            state.projectDetail = projectDetail;
        }

    }
});

export const {
    getAllProjects,
    getProjectByName,
    getProjectDetail,
} = projectSlice.actions;


export default projectSlice.reducer;