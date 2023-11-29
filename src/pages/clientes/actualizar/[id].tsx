import { tallerApi } from "@/api/tallerApi";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import { startActualizarCliente } from "@/store/slices/cliente/thunks";

interface Props {
  cliente: any;
}

export default function Cliente({ cliente }: Props) {
  const { cliente: datos } = cliente;
  const dispatch: AppDispatch = useDispatch();

  const [datosCliente, handleInputChangeCliente] = useForm({
    nombres: datos.nombres,
    apellidos: datos.apellidos,
    direccion: datos.direccion,
    email: datos.email,
    whatsapp: datos.whatsapp,
    telefono: datos.telefono,
  });

  const handleActualizarUsuario = () => {
    dispatch(startActualizarCliente(datos._id, datosCliente));
  }
  return (
    <div className="container flex flex-col mx-auto items-center justify-center mb-22 text-center font-bold my-20">
      <div className="mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center">
       
          <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
            Actualizar Cliente
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
                  id="nombres"
                  type="text"
                  onChange={handleInputChangeCliente}
                  value={datosCliente.nombres}
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
                  id="apellidos"
                  type="text"
                  onChange={handleInputChangeCliente}
                  value={datosCliente.apellidos}
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
                  onChange={handleInputChangeCliente}
                  value={datosCliente.telefono}
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
                  onChange={handleInputChangeCliente}
                  value={datosCliente.email}
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
                onChange={handleInputChangeCliente}
                value={datosCliente.direccion}
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
                onChange={handleInputChangeCliente}
                value={datosCliente.whatsapp}
              />
            </div>
            <div className="sm:col-span-4 justify-center">
              <button className="bg-cyan-500 rounded text-white py-2 px-3 mt-3" onClick={handleActualizarUsuario}>
                Actualizar Contacto
              </button>
            </div>
            <div className="sm:col-span-4 justify-center">
              <Link href="/clientes">
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await tallerApi.get("/clientes");

  return {
    paths: response.data.clientes.map((id: any) => ({
      params: { id: id._id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const cliente = await tallerApi.get(`/clientes/busqueda/id/${id}`);

  const { data } = cliente;

  return {
    props: {
      cliente: data,
    },
  };
};
