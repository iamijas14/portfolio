import { ResumeInfo, projectInfoPart1, projectInfoPart2 } from './data';

const initialState = {
    userName: "Ijas Mohammed",
    projectInfoPart1: projectInfoPart1,
    projectInfoPart2: projectInfoPart2,
    ResumeInfo: ResumeInfo

}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        default: return state
    }
  };

export default reducer;