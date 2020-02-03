// export const setCurrentUser = user => {
//     return {
//         type: 'SET_CURRENT_USER',
//         payload: user
//     }
// };

// below codes using "()" after user, so no "return" needed

export const setCurrentUser = user => ({
   type: 'SET_CURRENT_USER',
   payload: user
});
