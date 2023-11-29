import { AppDispatch, RootState } from "@/store/store";
import { startProximoServicio } from "@/store/slices/servicio/thunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {

  const dispatch: AppDispatch = useDispatch();

  const { servicios } = useSelector((state: RootState) => state.servicio);

  useEffect(() => {

    dispatch(startProximoServicio());
  }, []);
  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-orange-700">
          {" "}
          Proximos Servicios
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
                Proximo Servicio
              </th>
              <th scope="col" className="px-6 py-3">
                Moto
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((service) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Ver
                    </button>
                  </th>
                  <td className="px-6 py-4">{service.proximo}</td>
                  <td className="px-6 py-4">{service.moto.modelo}</td>
                  <td className="px-6 py-4">{service.moto.cliente.nombres} {service.moto.cliente.apellidos}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
