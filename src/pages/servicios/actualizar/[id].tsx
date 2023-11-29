import { tallerApi } from "@/api/tallerApi";
import { pdfGenerator } from "@/helpers/pdfGenerator";
import { useForm } from "@/hooks/useForm";
import { startActualizarServicio } from "@/store/slices/servicio/thunks";
import { AppDispatch } from "@/store/store";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface Props{
  servicio: any
}

export default function servicio({servicio}: Props) {
  const {servicio: datos} = servicio
  const dispatch: AppDispatch = useDispatch();
  const [datosServicio, handleInputChangeServicio] = useForm({
    fecha: datos.fecha,
    concepto: datos.concepto,
    presupuesto: datos.presupuesto,
    anticipo: datos.anticipo,
    kilometraje: datos.kilometraje,
    combustible: datos.combustible,
    observaciones: datos.observaciones,
    proximo: datos.proximo,
  });

  const handleActualizarServicio = () => {
    dispatch(startActualizarServicio(datos._id, datosServicio));
  };

  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="mx-auto mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
        <div>
            <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
              Servicio
            </h3>
            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                <div className="sm:col-span-4 justify-center">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                    htmlFor=""
                  >
                    Fecha
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fecha"
                    type="date"
                    onChange={handleInputChangeServicio}
                    value={datosServicio.fecha}
                  />
                </div>
                <div className="sm:col-span-4 justify-center">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                    htmlFor=""
                  >
                    Anticipo
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="anticipo"
                    type="text"
                    onChange={handleInputChangeServicio}
                    value={datosServicio.anticipo}
                    
                  />
                </div>
              </div>
              <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                <div className="sm:col-span-4 justify-center">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                    htmlFor=""
                  >
                    Kilometraje
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="kilometraje"
                    type="text"
                    onChange={handleInputChangeServicio}
                    value={datosServicio.kilometraje}
                   
                  />
                </div>
                <div className="sm:col-span-4 justify-center">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                    htmlFor=""
                  >
                    Combustible
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="combustible"
                    type="text"
                    value={datosServicio.combustible}
                    onChange={handleInputChangeServicio}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  {" "}
                  Concepto{" "}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="concepto"
                  type="text"
                  value={datosServicio.concepto}
                  onChange={handleInputChangeServicio}
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Presupuesto
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="presupuesto"
                  type="text"
                  value={datosServicio.presupuesto}
                  onChange={handleInputChangeServicio}
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                >
                  Observaciones
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="observaciones"
                  value={datosServicio.observaciones}
                  onChange={handleInputChangeServicio}
                />
              </div>
            </div>
            <div className="sm:col-span-4 justify-center">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
              >
                Proximo Servicio
              </label>
              <input
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="proximo"
                value={datosServicio.proximo}
                onChange={handleInputChangeServicio}
              />
            </div>
            <div className="sm:col-span-4 justify-center">
              <button className="bg-cyan-500 rounded text-white py-2 px-3 mt-3" onClick={handleActualizarServicio}>
                Actualizar Servicio
              </button>
            </div>
            <div className="sm:col-span-4 justify-center">
              <Link href="/servicios">
                <button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">
                  Regresar
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async() => {
  const response = await tallerApi.get("/servicios")


  return{
    paths: response.data.servicios.map((id: any) =>({
      params : {id: id._id}
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async({params}) =>{
  const {id} = params as {id: string}
  const servicio = await tallerApi.get(`servicios/${id}`); 

  const {data} = servicio;

  return {
    props: {
      servicio: data
    }
  }
}