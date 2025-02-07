import Link from "next/link";

export default function TrendLink({ href, children }) {
  return (
    <Link
      href={href}
      class="self-center underline decoration-gray-300 underline-offset-8 transition-all hover:decoration-gray-800 hover:underline-offset-[6px]"
    >
      {children}
    </Link>
  );
}
