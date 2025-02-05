import { Source_Serif_4 } from "next/font/google";

const sourceSerif4 = Source_Serif_4({
  display: "swap",
  subsets: ["latin"],
});

import Header from "./_components/Header";
import "@/app/_styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.className} min-h-screen bg-white text-black`}
      >
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
