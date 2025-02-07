import { TfiArrowCircleRight } from "react-icons/tfi";

import { IoIosCube } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { PiDatabaseThin } from "react-icons/pi";
import TrendBox from "./_components/TrendBox";
import TrendDownload from "./_components/TrendDownload";
import TrendHead from "./_components/TrendHead";
import TrendLike from "./_components/TrendLike";
import TrendLink from "./_components/TrendLink";
import TrendStatBox from "./_components/TrendStatBox";
import TrendTitle from "./_components/TrendTitle";

import models from "@/public/models.png";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDownTray } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import SpacesBox from "./_components/SpacesBox";
import SpaceHead from "./_components/SpaceHead";
import SpaceLike from "./_components/SpaceLike";
import SpaceMessage from "./_components/SpaceMessage";
import SpaceTitle from "./_components/SpaceTitle";
import TrendWeek from "./_components/TrendWeek";

export default function Home() {
  return (
    <div>
      <section className="py-14 text-stone-50">
        <div className="pf-16 flex  bg-slate-950 max-w-[104rem] mx-auto rounded-2xl">
          <div className="text-slate-900 mb-4 bg-white absolute translate-x-8 translate-y-6 rounded-2xl px-2  py-1">
            <Link
              href="/login"
              className="grid grid-cols-[auto_1fr_auto] gap-4 "
            >
              <div className="rounded-full bg-yellow-200 px-2 pt-[2px] text-center  text-sm font-medium text-yellow-900">
                New
              </div>
              <div className="underline underline-offset-4 decoration-lime-300 hover:decoration-lime-600">
                Welcome to Inference Provider on the Hub 🔥
              </div>
              <div className="py-1">
                <TfiArrowCircleRight className="text-gray-500" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-8 pl-32 pb-52  justify-end ">
            <Image
              src="/hugging.png"
              height="70"
              width="70"
              alt="Hugging face logo"
            />
            <h1 className="text-6xl font-bold">
              The AI community <br /> building the future.
            </h1>
            <p className="text-lg text-slate-400">
              The platform where the machine learning community <br />
              collaborates on models, datasets, and application
            </p>
          </div>
          <div className="relative  aspect-square grow">
            <Image
              src={models}
              fill
              className="object-fill -translate-y-6"
              alt="Hugging face logo"
            />
          </div>
        </div>
      </section>
      <TrendWeek />
    </div>
  );
}
