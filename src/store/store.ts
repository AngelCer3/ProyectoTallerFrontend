import { configureStore } from "@reduxjs/toolkit";
import { clienteSlice } from "./slices/cliente/clienteSlice";
import { motoSlice } from "./slices/moto/motoSlice";
import { servicioSlice } from "./slices/servicio/servicioSlice";

export const store = configureStore({
    reducer: {
        cliente: clienteSlice.reducer,
        moto: motoSlice.reducer,
        servicio: servicioSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch