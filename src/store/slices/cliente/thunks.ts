import { tallerApi } from "@/api/tallerApi";
import { AppDispatch } from "../../store";
import {actualizarCliente, eliminarClienteCompleto, obtenerClientes ,registrarCliente} from "./clienteSlice";
import Swal from "sweetalert2";

export const startObtenerClientes = () =>{
    return async (dispatch: AppDispatch) => {
        try {
            const respuesta = await tallerApi.get("clientes/");

            return dispatch(obtenerClientes(respuesta.data.clientes))
        } catch (error) {
            console.log(error)
        }
    }
}
export const startRegistrarCliente = (cliente: any) =>{
    return async (dispatch: AppDispatch) => {
        try {
            const respuesta = await tallerApi.post("clientes/", cliente);

            if(respuesta.data.ok){
                Swal.fire({
                    title: "Cliente guardado con exito",
                    text: respuesta.data.msg
                });
            }
            dispatch(registrarCliente);
        } catch (error) {
            console.log(error)
        }
    }
}

export const startActualizarCliente = (id: any, datosCliente: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.put(`clientes/${id}`, datosCliente);
            if(respuesta.data.ok){
                dispatch(actualizarCliente(respuesta.data.cliente));
                Swal.fire({
                    icon: "success",
                    title: "Cliente actualizado con exito",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/clientes/${id}`
                })
            }
        }catch (error){
            console.log(error);
        }
    }
}
export const startEliminarClienteCompleto = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.delete(`clientes/${id}`);
            if(respuesta.data.ok){
                dispatch(eliminarClienteCompleto(respuesta.data.cliente));
                Swal.fire({
                    icon: "success",
                    title: "Cliente Eliminado con exito",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/clientes/`
                })
            }
        }catch (error){
            console.log(error);
        }
    }
}
