export const init = {
    subShow:false,
    signupbox:false,
    signboxshow:false,
    signboxtext:false
}

export function reducer(state,action) {
    switch (action.type) {
        case "subshow":
            return{
                ...state,
            subShow:action.subShow
            }
            break;
        case "signupbox":
            return {
                ...state,
                signupbox:action.signupbox,
                signboxtext:action.signboxtext
            }
            break;
        case "signboxshow" :
            return {
                ...state,
                signboxshow:action.signboxshow,
                signboxtext:action.signboxtext,
                signupbox:action.signupbox,
            }
            break;
        default:
            break;
    }
}