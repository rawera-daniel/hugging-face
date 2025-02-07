import { IoIosCube } from "react-icons/io";
import MLbox from "./MLbox";
import MLMinBox from "./MLMinBox";
import MLhead from "./MLhead";
import MLtext from "./MLtext";
import MLimageBox from "./MLimageBox";
import Image from "next/image";

import activity from "@/public/activity.png";
import modalities from "@/public/modalities.png";
import snippets from "@/public/snippets.png";
import younes from "@/public/younes.png";

export default function MLComponent() {
  return (
    <section className="py-14 mt-8">
      <div className="container">
        <div className="flex flex-col items-center gap-3 mb-28">
          <IoIosCube className="text-gray-400 size-12 mb-2" />
          <div className="text-4xl font-bold">The home of Machine Learning</div>
          <p className="text-xl text-gray-500">
            Create, discover and collaborate on ML better.
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-[90rem] gap-12 mx-auto">
          <MLbox colStart="1" colEnd="3">
            <MLMinBox>
              <MLhead>
                The collaboration platform
                <MLtext>
                  Host and collaborate on unlimited public models, datasets and
                  applications.
                </MLtext>
              </MLhead>
            </MLMinBox>

            <MLimageBox>
              <Image
                src={activity}
                fill
                className="object-contain"
                alt="account display"
              />
            </MLimageBox>
          </MLbox>
          <MLbox>
            <MLMinBox>
              <MLhead>
                Move faster
                <MLtext>With the HF Open source stack.</MLtext>
              </MLhead>
            </MLMinBox>

            <MLimageBox>
              <Image
                src={snippets}
                fill
                className="object-contain"
                alt="account display"
              />
            </MLimageBox>
          </MLbox>
          <MLbox>
            <MLMinBox>
              <MLhead>
                Explore all modalities
                <MLtext>Text, image, video, audio or even 3D.</MLtext>
              </MLhead>
            </MLMinBox>

            <MLimageBox>
              <Image
                src={modalities}
                fill
                className="object-contain"
                alt="account display"
              />
            </MLimageBox>
          </MLbox>
          <MLbox colStart="2" colEnd="-1">
            <MLMinBox>
              <MLhead>
                Build your portfolio
                <MLtext>
                  Share your work with the world and build your ML profile.
                </MLtext>
              </MLhead>
            </MLMinBox>

            <MLimageBox>
              <Image
                src={younes}
                fill
                className="object-contain"
                alt="younes profile"
              />
            </MLimageBox>
          </MLbox>
        </div>
      </div>
    </section>
  );
}
