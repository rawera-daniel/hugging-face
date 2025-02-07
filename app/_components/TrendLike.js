import { CiHeart } from "react-icons/ci";

export default function TrendLike({ children }) {
  return (
    <span className="flex items-center gap-[2px]">
      <CiHeart className="translate-y-[2px]" />
      {children}
    </span>
  );
}
