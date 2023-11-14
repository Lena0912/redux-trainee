
import { configureStore } from '@reduxjs/toolkit';
import { accountReduser } from './accountSlice';
import { localeReduser } from './localeSlice';


export const store = configureStore({
    reducer: {
        account: accountReduser,
        locale: localeReduser,
    }
})


