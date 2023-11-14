import { createSlice } from '@reduxjs/toolkit';



const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 500,
    username: 'Jacob',
  },
  reducers: {
    deposit: {
      reducer(state, action) {
        state.balance += action.payload.value;
      },
      prepare(value) {
        return {
          payload: {
            value,
            id: Date.now(),
          },
        };
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});
export const accountReduser = accountSlice.reducer;

export const { deposit, withdraw } = accountSlice.actions;

// export const deposit = createAction('account/deposit');

// export const withdraw = createAction('account/withdraw');


// const initialState = {
//   balance: 500,
//   username: 'Jacob',
// };

// export const accountReduser = createReduser(initialState, builder =>
// builder
//   .addCase(deposit, (state, action) => {
//     state.balance += action.payload;
//   })
//   .addCase(withdraw, (state, action) => {
//     state.balance -= action.payload;
//   }),
// );
