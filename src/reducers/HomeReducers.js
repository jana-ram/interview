const initialState = {
    payload : "",
    type : "",
    error : ""
};

export default function homeReducers(state = initialState, action) {
    switch(action.type){
        case 'HomeLandingPage' :
            return{
                payload: action.payload,
                type: 'HomeLandingPage',
                error : ""
            }
        default :
            return initialState;
    }
}