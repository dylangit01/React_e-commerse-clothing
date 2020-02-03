import {UserActionTypes} from "./user.types";

// export const setCurrentUser = user => {
//     return {
//         type: UserActionTypes,
//         payload: user
//     }
// };

// below codes using "()" after user, so no "return" needed

export const setCurrentUser = user => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user
});
