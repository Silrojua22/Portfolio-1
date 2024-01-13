import axios from "axios";

import {
    getAllProjects,
    getProjectDetail,
} from "./projectSlice.js"


export const getProjects = () => async (dispatch) => {
    try {
        const response = await axios.get("/project");
        const allProjects = response.data;
        console.log(allProjects);
        dispatch(getAllProjects(allProjects)); 12121
    } catch (error) {
        console.log(error);
    }
};


export const fetchDetailProject = (id) => async (dispatch) => {
    try {

        const response = await axios.get(`/project/${id}`);
        const detailProject = response.data;
        dispatch(getProjectDetail(detailProject));
    } catch (error) {
        console.log(error);
    }
};