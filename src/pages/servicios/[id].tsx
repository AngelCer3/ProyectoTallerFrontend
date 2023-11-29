import { tallerApi } from "@/api/tallerApi";
import { pdfGenerator } from "@/helpers/pdfGenerator";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props{
  servicio: any
}

export default function servicio({servicio}: Props) {
  const {servicio: datos} = servicio
  const {_id:id, fecha,anticipo,kilometraje, combustible, presupuesto, concepto, observaciones, proximo} = datos
  const {nombres, apellidos, email, telefono, whatsapp, direccion} = datos.moto.cliente
  const {marca, modelo, cilindrada, tipo, placa, color} = datos.moto

  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
        <form action="">
          <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
            Cliente
          </h1>
          <div className="mb-4">
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Nombres
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  value={nombres}
                  readOnly
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Apellidos
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="apellido"
                  type="text"
                  value={apellidos}
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Telefono
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telefono"
                  type="text"
                  value={telefono}
                  readOnly
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  readOnly
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                {" "}
                Direccion{" "}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="direccion"
                type="text"
                value={direccion}
                readOnly
              />
            </div>
            <div className="sm:col-span-4 justify-center">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                WhatsApp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="whatsapp"
                type="text"
                value={whatsapp}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
      {/* Parte Motos*/}
      <div className="mx-auto mt-4 p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
        <form action="">
          <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
            Moto
          </h3>
          <div className="mb-4">
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Marca
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="marca"
                  type="text"
                  value={marca}
                  readOnly
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Modelo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="modelo"
                  type="text"
                  value={modelo}
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-flow-row sm:grid-flow-col gap-3">
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Cilindrada
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cilindrada"
                  type="text"
                  value={cilindrada}
                  readOnly
                />
              </div>
              <div className="sm:col-span-4 justify-center">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                  htmlFor=""
                >
                  Placa
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="placa"
                  type="text"
                  value={placa}
                  readOnly
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                {" "}
                Color{" "}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="text"
                value={color}
                readOnly
              />
            </div>
            <div className="sm:col-span-4 justify-center">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                htmlFor=""
              >
                Tipo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tipo"
                type="text"
                value={tipo}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
      {/* Parte Servicio */}
      <div className="mx-auto mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
        <div>
          <form action="">
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
                    type="text"
                    value={fecha}
                    readOnly
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
                    value={anticipo}
                    readOnly
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
                    value={kilometraje}
                    readOnly
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
                    value={combustible}
                    readOnly
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
                  value={concepto}
                  readOnly
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
                  value={presupuesto}
                  readOnly
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
                  id="observacion"
                  value={observaciones}
                  readOnly
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
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="proximo"
                value={proximo}
                readOnly
              />
            </div>

            <button onClick={() => pdfGenerator({id, nombres, apellidos, email, telefono, whatsapp, direccion,marca, modelo, cilindrada, tipo, placa, color, fecha,anticipo, kilometraje, combustible, presupuesto, concepto, observaciones})} className="bg-rose-500 rounded text-white py-2 px-3 mt-3">
              Imprimir Comprobante
            </button>
          </form>
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