import { tallerApi } from "@/api/tallerApi";
import { AppDispatch, RootState } from "@/store/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import { startActualizarMoto } from "@/store/slices/moto/thunks";

interface Props {
  moto: any;
}

export default function Moto({ moto }: Props) {
  const { moto: datos } = moto;
  const dispatch: AppDispatch = useDispatch();

  const [datosMoto, handleInputChangeMoto] = useForm({
    marca: datos.marca,
    modelo: datos.modelo,
    cilindrada: datos.cilindrada,
    placa: datos.placa,
    color: datos.color,
    tipo: datos.tipo,
  });
  const handleActualizarMoto = () => {
    dispatch(startActualizarMoto(datos._id, datosMoto));
  };
  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
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
                onChange={handleInputChangeMoto}
                value={datosMoto.marca}
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
                onChange={handleInputChangeMoto}
                value={datosMoto.modelo}
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
                value={datosMoto.cilindrada}
                onChange={handleInputChangeMoto}
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
                type="placa"
                value={datosMoto.placa}
                onChange={handleInputChangeMoto}
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
              value={datosMoto.color}
              onChange={handleInputChangeMoto}
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
              value={datosMoto.tipo}
              onChange={handleInputChangeMoto}
            />
          </div>
          <div className="sm:col-span-4 justify-center">
            <button
              className="bg-cyan-500 rounded text-white py-2 px-3 mt-3"
              onClick={handleActualizarMoto}
            >
              Actualizar Moto
            </button>
          </div>
          <div className="sm:col-span-4 justify-center">
            <Link href="/motos">
              <button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">
                Regresar
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-x auto mt-5"></div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await tallerApi.get("/motos");

  return {
    paths: response.data.motos.map((id: any) => ({
      params: { id: id._id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const moto = await tallerApi.get(`motos/${id}`);

  const { data } = moto;

  return {
    props: {
      moto: data,
    },
  };
};
