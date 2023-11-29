import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    clienteId: "",
    clientes: [],
    cliente: []
}

export const clienteSlice = createSlice({
    name: "cliente",
    initialState,
    reducers: {
        obtenerClientes: (state , action) => {
            state.clientes = action.payload
        },
        registrarCliente: () => {
           
        },
        actualizarCliente: (state, action) => {
            state.clienteId = action.payload
        },
        eliminarClienteCompleto: (state, action) => {
            state.clientes = action.payload
        }
    }
})

export const {obtenerClientes, registrarCliente, actualizarCliente, eliminarClienteCompleto} = clienteSlice.actions