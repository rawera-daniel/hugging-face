import Link from "next/link";

import { IoIosCube } from "react-icons/io";
import { PiDatabaseThin } from "react-icons/pi";
import { MdGridView } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BiSolidBookAlt } from "react-icons/bi";
import { TbCircleLetterEFilled } from "react-icons/tb";
import { RxDropdownMenu } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className="text-base font-normal">
      <ul className="flex space-x-4 items-center">
        <li className="hover:text-indigo-700 transition-colors duration-500">
          <Link href="/models" className="flex items-center  gap-2">
            <IoIosCube className="text-gray-400" />
            Models
          </Link>
        </li>
        <li className="hover:text-red-700 transition-colors duration-500">
          <Link href="/datasets" className="flex items-center  gap-2">
            <PiDatabaseThin className="text-gray-400" />
            Datasets
          </Link>
        </li>
        <li className="hover:text-blue-700 transition-colors duration-500">
          <Link href="/spaces" className="flex items-center  gap-2">
            <MdGridView className="text-gray-400" />
            Spaces
          </Link>
        </li>
        <li className="hover:text-blue-700 transition-colors duration-500">
          <Link href="/posts" className="flex items-center  gap-2">
            <BiSolidMessageRounded className="text-yellow-400" />
            Posts
          </Link>
        </li>
        <li className="hover:text-yellow-700 transition-colors duration-500">
          <Link href="/docs" className="flex items-center  gap-2">
            <BiSolidBookAlt className="text-gray-400" />
            Dcos
          </Link>
        </li>
        <li className="hover:text-green-700 transition-colors duration-500">
          <Link href="/enterprise" className="flex items-center  gap-2">
            <TbCircleLetterEFilled className="text-gray-400" />
            Enterprise
          </Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="hover:text-green-700 transition-colors duration-500">
          <button>
            <RxDropdownMenu className="text-gray-400 size-6 translate-y-1" />
          </button>
        </li>
        <li>
          <hr />
        </li>
        <li className="hover:text-gray-300 transition-colors duration-500">
          <Link href="/login">Login</Link>
        </li>
        <li className="hover:text-gray-300 transition-colors duration-500">
          <Link
            href="/signup"
            className="whitespace-nowrap rounded-full border border-transparent bg-gray-900 px-3 py-1 leading-none text-white hover:border-black hover:bg-white hover:text-black"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
