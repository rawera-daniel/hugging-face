import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";

export default function TrendDownload({ children }) {
  return (
    <span className="flex items-center gap-[2px]">
      <HiArrowDownTray />
      {children}.
    </span>
  );
}
