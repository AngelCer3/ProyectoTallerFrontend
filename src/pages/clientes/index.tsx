import { startEliminarClienteCompleto, startObtenerClientes } from "@/store/slices/cliente/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { clientes } = useSelector((state: RootState) => state.cliente);

  useEffect(() => {
    dispatch(startObtenerClientes());
  }, []);
  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-orange-700">
          {" "}
          Clientes
        </h1>
      </div>
      <div className="relative overflow-x auto mt-5">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-red-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ver
              </th>
              <th scope="col" className="px-6 py-3">
                Nombres
              </th>
              <th scope="col" className="px-6 py-3">
                Apellidos
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
              <th scope="col" className="px-6 py-3">
                WhatsApp
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
            </tr>
          </thead>
          <tbody>
            {
            clientes.map((cliente) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    <Link href={`./clientes/${cliente._id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                      Ver
                    </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{cliente.nombres}</td>
                  <td className="px-6 py-4">{cliente.apellidos}</td>
                  <td className="px-6 py-4">{cliente.telefono}</td>
                  <td className="px-6 py-4">{cliente.email}</td>
                  <td className="px-6 py-4">{cliente.direccion}</td>
                  <td className="px-6 py-4">{cliente.whatsapp}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    <Link href={`./clientes/actualizar/${cliente._id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                      Actualizar
                    </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
