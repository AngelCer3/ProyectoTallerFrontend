import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    servicioId: "",
    servicios: []
}

export const servicioSlice = createSlice({
    name: "Servicios",
    initialState,
    reducers: {
        obtenerServicio: (state , action) => {
            state.servicios = action.payload
        },
        obtenerServicioPorMoto: (state, action)=>{
            state.servicios = action.payload
        },
        crearServicio:(state, action) =>{
            state.servicioId = action.payload
        },
        crearServicioClienteMoto: (state, action) =>{
            state.servicioId = action.payload;
        },
        crearServicioCliente: (state, action) => {
            state.servicioId = action.payload
        },
        obtenerServicioProximo: (state, action) => {
            state.servicios = action.payload
        },
        actualizarServicio: (state, action) => {
            state.servicioId = action.payload
        },
        eliminarServicio: (state,action) => {
            state.servicioId = action.payload
        }
    }
})

export const {obtenerServicio, obtenerServicioPorMoto, crearServicio, crearServicioClienteMoto, crearServicioCliente,obtenerServicioProximo,actualizarServicio,eliminarServicio} = servicioSlice.actions