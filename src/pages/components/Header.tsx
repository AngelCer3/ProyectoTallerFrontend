import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex items-center justify-center px-6 py-4">
          <Link href='/'>
            <Image
            src="/img/Logo_Moto-modified.png"
            priority
            width={200}
            height={200}
            alt="logo"
            className="d-flex mt-4"
            />
          </Link>
         <h2 className="text-lg md:text-xl xl:text-2xl text-center font-extrabold text-black-900">Taller de Motos Engels</h2>
        </div>
      )
}
