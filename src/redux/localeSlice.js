import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang(state, action) {
  state.lang = action.payload;
    }
  },
});

export const localeReduser = localeSlice.reducer;

export const { changeLang } = localeSlice.actions;


// const initialState = {
//   lang: 'en',
// };

// export const localeReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export const changeLang = newLang => {
//   return {
//     type: 'locale/changeLang',
//     payload: newLang,
//   };
// };