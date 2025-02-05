import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" height="25" width="25" alt="Hugging face logo" />
      <span className="text-lg font-bold">Hugging Face</span>
    </Link>
  );
}
