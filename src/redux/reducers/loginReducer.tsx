import * as Types from "../actions/allTypes"
​
let initialState = {
    load:true,
    loginList:[],
}
​
const loginReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case Types.SUCCESS_USER_LOGIN:
            return {
                load:false,
                loginList: payload.loginList,
            };
            case Types.FAILED_USER_LOGIN:
                return{
                    ...state,
                loginList: [],
                };
                default:
                    return state;
    }
}
​
export default loginReducer;