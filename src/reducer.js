import { ResumeInfo, projectInfo } from './data';

const initialState = {
    userName: "Ijas Mohammed",
    projectInfo: projectInfo,
    ResumeInfo: ResumeInfo

}

const reducer = (state= initialState, action) => {

    switch(action.type) {
        default: return state
    }
  };

export default reducer;