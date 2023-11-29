import { tallerApi } from "@/api/tallerApi";
import { AppDispatch } from "../../store";
import { obtenerServicio, obtenerServicioPorMoto, crearServicio, crearServicioClienteMoto, crearServicioCliente, obtenerServicioProximo, actualizarServicio, eliminarServicio } from "./servicioSlice";
import Swal from "sweetalert2";
import { Dispatch } from "react";



export const startObtenerServicio = () =>{
    return async (dispatch: AppDispatch) => {
        try {
            const respuesta = await tallerApi.get("servicios/");

            console.log(respuesta)
            return dispatch(obtenerServicio(respuesta.data.servicios))
        } catch (error) {
            console.log(error)
        }
    }
}
export const startObtenerServicioPorMoto = (id:any) =>{
    return async (dispatch: AppDispatch) => {
        try {
            const respuesta = await tallerApi.get(`servicios/moto/${id}`);

            return dispatch(obtenerServicioPorMoto(respuesta.data.servicioMoto))
        } catch (error) {
            console.log(error)
        }
    }
}

export const startCrearServicio = (datosServicio: any)=> {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.post("servicios/completo", datosServicio);
            if(respuesta.data.ok){
                Swal.fire({
                    icon: 'success',
                    text: respuesta.data.servicio
                });
            }
            dispatch(crearServicio(respuesta.data.servicio));
        }catch(error){
            console.log(error);
        }
    }
}

export const startCrearServicioClienteMoto = (datosServicio: any)=> {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.post("servicios/clientemoto/", datosServicio);
            if(respuesta.data.ok){
                Swal.fire({
                    icon: 'success',
                    text: respuesta.data.servicio
                });
            }
            dispatch(crearServicioClienteMoto(respuesta.data.servicio));
        }catch(error){
            console.log(error);
        }
    }
}
export const startCrearServicioCliente = (datosServicio: any)=> {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.post("servicios/cliente/", datosServicio);
            if(respuesta.data.ok){
                Swal.fire({
                    icon: 'success',
                    text: respuesta.data.servicio
                });
            }
            dispatch(crearServicioCliente(respuesta.data.servicio));
        }catch(error){
            console.log(error);
        }
    }
}
export const startProximoServicio = () => {
    return async (dispatch: AppDispatch) => {
        try{
            const resp = await tallerApi.get("servicios/proximos/");
            const body = resp.data;
            if(body.ok){
                dispatch(obtenerServicioProximo(body.data));
            }
        }catch (error){
            console.log(error)
        }
    };
}

export const startActualizarServicio = (id: any, datosServicio: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.put(`servicios/${id}`,datosServicio);
            if(respuesta.data.ok){
                dispatch(actualizarServicio(respuesta.data.servicio));
                Swal.fire({
                    icon: "success",
                    title: "Servicio actualizado con exito",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/servicios/${id}`
                })
            }
        }catch (error){
            console.log(error)
        }
    }
}
export const startEliminarServicio = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.delete(`servicios/${id}`);
            if(respuesta.data.ok){
                dispatch(eliminarServicio(respuesta.data.servicio));
                Swal.fire({
                    icon: "success",
                    title: "Servicio eliminado",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/servicios/`
                })
            }
        }catch (error){
            console.log(error)
        }
    }
}