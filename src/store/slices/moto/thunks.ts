import { tallerApi } from "@/api/tallerApi";
import { AppDispatch } from "../../store";
import { actualizarMoto, eliminarMoto, obtenerMotos, obtenerMotosPorCliente, registrarMoto } from "./motoSlice";
import Swal from "sweetalert2";


export const startObtenerMotos = () =>{
    return async (dispatch: AppDispatch) => {
        try {
            const respuesta = await tallerApi.get("motos/");

            return dispatch(obtenerMotos(respuesta.data.motos))
        } catch (error) {
            console.log(error)
        }
    }
}
export const startObtenerMotosPorCliente = (id:any) => {
    return async(dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.get(`/motos/motos/${id}`);

            return dispatch(obtenerMotosPorCliente(respuesta.data.motos))
        }catch (error){
            console.log(error)
        }
    }
}

export const startRegistrarMoto = (moto: any)=> {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.post("motos/", moto);
            if(respuesta.data.ok){
                Swal.fire({
                    icon: 'success',
                    text: respuesta.data.msg
                });
            }
            dispatch(registrarMoto);
        }catch(error){
            console.log(error);
        }
    }
}
export const startActualizarMoto = (id: any, datosMoto: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.put(`motos/${id}`,datosMoto);
            if(respuesta.data.ok){
                dispatch(actualizarMoto(respuesta.data.motos));
                Swal.fire({
                    icon: "success",
                    title: "Moto actualizado con exito",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/motos/${id}`
                })
            }
        }catch (error){
            console.log(error)
        }
    }
}
export const startEliminarMoto = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            const respuesta = await tallerApi.delete(`motos/${id}`);
            if(respuesta.data.ok){
                dispatch(eliminarMoto(respuesta.data.motos));
                Swal.fire({
                    icon: "success",
                    title: "Moto Elimina con exito",
                    text: respuesta.data.msg,
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = `/motos/`
                })
            }
        }catch (error){
            console.log(error)
        }
    }
}