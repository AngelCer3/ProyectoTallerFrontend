import { startObtenerMotos } from "@/store/slices/moto/thunks";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const dispatch: AppDispatch = useDispatch();

  const { motos } = useSelector((state: RootState) => state.moto);

  useEffect(() => {
    dispatch(startObtenerMotos());
  }, []);

  return (
    <div>
      <div className="mt-20 container mx-auto flex flex-col">
        <h1 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-orange-700">
          Motos
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
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Modelo
              </th>
              <th scope="col" className="px-6 py-3">
                Cilindrada
              </th>
              <th scope="col" className="px-6 py-3">
                Placa
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Actualizar
              </th>
            </tr>
          </thead>
          <tbody>
            {motos.map((moto) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     <Link href={`./motos/${moto._id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                      Ver
                    </button>
                    </Link>
                  </th>
                  <td className="px-6 py-4">{moto.marca}</td>
                  <td className="px-6 py-4">{moto.modelo}</td>
                  <td className="px-6 py-4">{moto.cilindrada}</td>
                  <td className="px-6 py-4">{moto.placa}</td>
                  <td className="px-6 py-4">{moto.color}</td>
                  <td className="px-6 py-4">{moto.tipo}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                     <Link href={`./motos/actualizar/${moto._id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                      Actualizar
                    </button>
                    </Link>
                  </th>
                  \
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
