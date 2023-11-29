import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
    </div>
  )
}
