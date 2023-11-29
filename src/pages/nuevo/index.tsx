"use client";

import { useForm } from "@/hooks/useForm";
import { startObtenerClientes } from "@/store/slices/cliente/thunks";
import { startObtenerMotos } from "@/store/slices/moto/thunks";
import { startCrearServicio, startCrearServicioCliente, startCrearServicioClienteMoto } from "@/store/slices/servicio/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const [fromState, setFormState] = useState(true);
  const [fromState2, setFormState2] = useState(true);
  const [activeForm, setActiveForm] = useState<number | null>(null);
  const [motoId, setMotoId] = useState("")
  const [clienteId, setClienteId] = useState("")

  const handleFormState = () => {
    setFormState(!fromState);
  };
  const handleFormState2 = () => {
    setFormState2(!fromState2);
  };

  const handleFormToggle = (formNumber: number) => {
    if (activeForm === formNumber) {
      setActiveForm(null);
    } else {
      setActiveForm(formNumber);
    }
  };
  const [formCliente, handleInputChangeCliente] = useForm({
    nombres: "",
    apellidos: "",
    direccion: "",
    email: "",
    whatsapp: "",
    telefono: "",
  });
  const [formMoto, handleInputChangeMoto] = useForm({
    marca: "",
    modelo: "",
    cilindrada: "",
    placa: "",
    color: "",
    tipo: "",
  });
 
  const router = useRouter();
  const [formServicio, handleInputChangeServicio] = useForm({
    fecha: "",
    concepto: "",
    presupuesto: "",
    anticipo: "",
    kilometraje: "",
    combustible: "",
    observaciones: "",
    proximo: "",
  });

  const dispatch: AppDispatch = useDispatch();

  const handleCrearServicio = () => {
    if(fromState  && fromState2){
      dispatch(startCrearServicioClienteMoto({...formServicio, moto: motoId}))
     
    }else if(fromState){
      dispatch(startCrearServicioCliente({...formMoto, ...formServicio, cliente: clienteId}))
      
    }else{
      dispatch(startCrearServicio({ ...formCliente, ...formMoto, ...formServicio }));
      
    }
  };
  const { clientes } = useSelector((state: RootState) => state.cliente);
  const {motos} = useSelector((state: RootState)=>state.moto);
  const {servicioId} = useSelector((state: RootState)=>state.servicio);

  useEffect(() => {
    dispatch(startObtenerClientes());
    dispatch(startObtenerMotos());

  }, []);

  useEffect(() => {
    if(servicioId){
      router.push(`servicios/${servicioId}`)
    }
  }, [servicioId])
  console.log(servicioId)
  return (
    <div className="container flex flex-col items-center justify-center mb-22 text-center font-bold my-20">
      <div className="flex flex-col gap-3 text-center py-6 px-4">
        <h1 className="text-center font-semibold text-4x1 text-red-600">
          Agregar Cliente
        </h1>
        <button
          className="bg-gray-500 hover.bg-gray-500 text-white font-bold py-2 px-4 border-b-4"
          onClick={() => handleFormToggle(1)}
        >
          Cliente
        </button>
        {activeForm === 1 && (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <button
              onClick={handleFormState}
              className="bg-cyan-500 rounded text-white py-2 px-3 "
              id="btn"
            >
              Cambiar Formulario
            </button>
            {fromState ? (
              <div>
                <div className="mb-4">
                  <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                    <div className="sm:col-span-4 justify-center">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                        htmlFor=""
                      >
                        {" "}
                        Buscar por id{" "}
                      </label>
                      <input
                        onChange={(e)=>setClienteId(e.target.value)}
                        list="list-cliente"
                      />

                      <datalist id="list-cliente">
                        {
                          clientes.map(cliente => <option key={cliente._id} value={cliente._id}>{cliente.nombres} {cliente.apellidos}</option>)
                        }
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Agregar datos del Cliente */
              <div>
                <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
                  Crear cliente
                </h3>
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
                        value={formCliente.nombres}
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
                        value={formCliente.apellidos}
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
                        value={formCliente.telefono}
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
                        value={formCliente.email}
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
                      value={formCliente.direccion}
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
                      value={formCliente.whatsapp}
                    />
                  </div>
                </div>
              </div>
            )}
            ;
          </div>
        )}
      </div>
      {/* PArte de motos */}
      <div className="flex flex-col gap-3 text-center py-6 px-4">
        <h1 className="text-center font-semibold text-4x1 text-red-600">
          Agregar Moto
        </h1>
        <button
          className="bg-gray-500 hover.bg-gray-500 text-white font-bold py-2 px-4 border-b-4"
          onClick={() => handleFormToggle(2)}
        >
          Moto
        </button>
        {activeForm === 2 && (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-3">
            <button
              onClick={handleFormState2}
              className="bg-cyan-500 rounded text-white py-2 px-3 "
              id="btn"
            >
              Cambiar Formulario
            </button>
            {fromState2 && fromState ? (
              <div>
                <div className="mb-4">
                  <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                    <div className="sm:col-span-4 justify-center">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"
                        htmlFor=""
                      >
                        {" "}
                        Buscar moto{" "}
                      </label>
                      <input
                      onChange={(e) => setMotoId(e.target.value)}
                        list="list-moto"
                      />

                      <datalist id="list-moto">
                        {
                          motos.map(moto => <option key={moto._id} value={moto._id}>{moto.marca} {moto.modelo} {moto.color}</option>)
                        }
                      </datalist>
                    </div>
                  </div>
                
                </div>
              </div>
            ) : (
              <div>
                <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
                  Crear Moto
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
                        value={formMoto.marca}
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
                        value={formMoto.modelo}
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
                        onChange={handleInputChangeMoto}
                        value={formMoto.cilindrada}
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
                        onChange={handleInputChangeMoto}
                        value={formMoto.placa}
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
                      onChange={handleInputChangeMoto}
                      value={formMoto.color}
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
                      onChange={handleInputChangeMoto}
                      value={formMoto.tipo}
                    />
                  </div>
                </div>
              </div>
            )}
            ;
          </div>
        )}
      </div>{" "}
      {/* Parte de servicio */}
      <div className="flex flex-col gap-3 text-center py-6 px-4">
        <h1 className="text-center font-semibold text-4x1 text-red-600">
          Agregar Servicio
        </h1>
        <button
          className="bg-gray-500 hover.bg-gray-500 text-white font-bold py-2 px-4 border-b-4"
          onClick={() => handleFormToggle(3)}
        >
          Servicio
        </button>
        {activeForm === 3 && (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-3">
            <div>
              <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
                Crear Servicio
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
                      value={formServicio.fecha}
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
                      value={formServicio.anticipo}
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
                      value={formServicio.kilometraje}
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
                      onChange={handleInputChangeServicio}
                      value={formServicio.combustible}
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
                    onChange={handleInputChangeServicio}
                    value={formServicio.concepto}
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
                    onChange={handleInputChangeServicio}
                    value={formServicio.presupuesto}
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
                    onChange={handleInputChangeServicio}
                    value={formServicio.observaciones}
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
                  onChange={handleInputChangeServicio}
                  value={formServicio.proximo}
                />
              </div>

              <button
                className="bg-rose-500 rounded text-white py-2 px-3 mt-3"
                onClick={handleCrearServicio}
              >
                Guardar Datos
              </button>
            </div>
            ;
          </div>
        )}
      </div>
    </div>
  );
}
