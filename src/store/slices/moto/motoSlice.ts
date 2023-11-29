import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    motoId: "",
    motos: [],
    motoCliente: []
}

export const motoSlice = createSlice({
    name: "moto",
    initialState,
    reducers: {
        obtenerMotos: (state , action) => {
            state.motos = action.payload
        },
        obtenerMotosPorCliente: (state, action) => {
            state.motoCliente = action.payload
        },
        registrarMoto: () => {

        },
        actualizarMoto: (state,action) => {
            state.motoId = action.payload
        },
        eliminarMoto: (state,action) => {
            state.motoId = action.payload
        }
    }
})



export const {obtenerMotos, obtenerMotosPorCliente,registrarMoto,actualizarMoto,eliminarMoto} = motoSlice.actions