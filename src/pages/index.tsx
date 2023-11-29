import Link from "next/link";

export default function Home() {
  

  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
     
      <>
      <Link href="/nuevo"><button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">Nuevo Servicio</button></Link>
      <Link href="/clientes"><button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">Clientes</button></Link>
      <Link href="/motos"><button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">Motos</button></Link>
      <Link href="/servicios"><button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">Servicios</button></Link>
      <Link href="/proxServicios"><button className="bg-rose-500 rounded text-white py-2 px-3 mt-3">Proximos Servicios</button></Link>
      </>
    </div>
  )
}