import Image from "next/image";
import React from "react";
import TrendTitle from "./TrendTitle";
import { IoIosCube } from "react-icons/io";
import TrendBox from "./TrendBox";
import Link from "next/link";
import TrendHead from "./TrendHead";
import TrendStatBox from "./TrendStatBox";
import TrendDownload from "./TrendDownload";
import TrendLike from "./TrendLike";
import TrendLink from "./TrendLink";
import { MdGridView } from "react-icons/md";
import SpacesBox from "./SpacesBox";
import SpaceHead from "./SpaceHead";
import SpaceTitle from "./SpaceTitle";
import SpaceLike from "./SpaceLike";
import SpaceMessage from "./SpaceMessage";
import { PiDatabaseThin } from "react-icons/pi";

export default function TrendWeek() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="mb-10 flex items-center justify-center gap-2 text-xl font-bold">
          <div>Trending on</div>
          <Image
            src="/hugging.png"
            height="35"
            width="35"
            alt="Hugging face logo"
          />
          <div>this week</div>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          {/* Models section */}
          <div className="flex flex-col">
            <TrendTitle>
              <IoIosCube className="text-gray-400 size-5" />
              Models
            </TrendTitle>
            <div className="flex flex-col gap-2 mb-3 rounded-xl  shadow-[0_24px_48px_0_rgba(0,0,0,0.05)] p-3">
              <TrendBox>
                <Link href="/deepseek-ai/DeepSeek-R1">
                  <TrendHead>deepseek-ai/DeepSeek-R1</TrendHead>
                  <TrendStatBox>
                    <span> updated 5 days ago .</span>
                    <TrendDownload> 1.23M</TrendDownload>
                    <TrendLike>7.14K</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/deepseek-ai/Janus-pro-7B">
                  <TrendHead>deepseek-ai/Janus-pro-7B</TrendHead>
                  <TrendStatBox>
                    <span> updated 5 days ago .</span>
                    <TrendDownload>194K</TrendDownload>
                    <TrendLike>2.64K</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/mistralai/Mistral-Small-24B-Instruct-2501">
                  <TrendHead>
                    mistralai/Mistral-Small-24B-Instruct-2501
                  </TrendHead>
                  <TrendStatBox>
                    <span> updated 4 days ago .</span>
                    <TrendDownload>24K</TrendDownload>
                    <TrendLike>618</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/deepseek-ai/DeepSeek-V3">
                  <TrendHead>deepseek-ai/DeepSeek-V3</TrendHead>
                  <TrendStatBox>
                    <span> updated 13 days ago .</span>
                    <TrendDownload>1.50M</TrendDownload>
                    <TrendLike>3.19K</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/hexgrad/Kokor-82M">
                  <TrendHead>hexgrad/Kokor-82M</TrendHead>
                  <TrendStatBox>
                    <span> updated 4 days ago .</span>
                    <TrendDownload>172K</TrendDownload>
                    <TrendLike>2.82K</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
            </div>

            <TrendLink href="/models"> Browse 1M+ models</TrendLink>
          </div>

          {/* Spaces section */}
          <div className="flex flex-col">
            <TrendTitle>
              <MdGridView className="text-gray-400 size-5" />
              Spaces
            </TrendTitle>
            <div className="flex flex-col gap-2 mb-3 rounded-xl  shadow-[0_24px_48px_0_rgba(0,0,0,0.05)] p-3">
              <SpacesBox from="from-indigo-700">
                <Link href="/Chat with Janus-Pro-7B">
                  <SpaceHead>
                    <SpaceTitle>Chat with Janus-Pro-7B 🌍</SpaceTitle>
                    <SpaceLike> 1.44K</SpaceLike>
                  </SpaceHead>
                  <SpaceMessage>
                    A unified multimodal understanding and generation model
                  </SpaceMessage>
                </Link>
              </SpacesBox>
              <SpacesBox from="from-indigo-700">
                <Link href="/Hunyuan3D-2.0">
                  <SpaceHead>
                    <SpaceTitle>Hunyuan3D-2.0 🌍</SpaceTitle>
                    <SpaceLike>1.29K</SpaceLike>
                  </SpaceHead>
                  <SpaceMessage>
                    Text-to3D and Image-to-3D Generation
                  </SpaceMessage>
                </Link>
              </SpacesBox>
              <SpacesBox from="from-yellow-600">
                <Link href="/Chat with Janus-Pro-7B">
                  <SpaceHead>
                    <SpaceTitle>IC Light V2 📈</SpaceTitle>
                    <SpaceLike>2.64K</SpaceLike>
                  </SpaceHead>
                  <SpaceMessage>
                    Executes code from an environment variable.
                  </SpaceMessage>
                </Link>
              </SpacesBox>
              <SpacesBox from="from-yellow-600">
                <Link href="/Qwen2.5 Max Demo">
                  <SpaceHead>
                    <SpaceTitle>Qwen2.5 Max Demo 🐢</SpaceTitle>
                    <SpaceLike>431</SpaceLike>
                  </SpaceHead>
                  <SpaceMessage>
                    Send messages for chatbot responses
                  </SpaceMessage>
                </Link>
              </SpacesBox>
              <SpacesBox from="from-indigo-600" to="to-pink-600">
                <Link href="/Kokoro TTS">
                  <SpaceHead>
                    <SpaceTitle>Kokoro TTS 💓</SpaceTitle>
                    <SpaceLike>1.9K</SpaceLike>
                  </SpaceHead>
                  <SpaceMessage>Upgraded to v1.0!</SpaceMessage>
                </Link>
              </SpacesBox>
            </div>

            <TrendLink href="/spaces"> Browse 400K application</TrendLink>
          </div>

          {/* Datasets section */}
          <div className="flex flex-col">
            <TrendTitle>
              <PiDatabaseThin className="text-gray-400 size-5" />
              Datasets
            </TrendTitle>
            <div className="flex flex-col gap-2 mb-3 rounded-xl  shadow-[0_24px_48px_0_rgba(0,0,0,0.05)] p-3">
              <TrendBox>
                <Link href="/cognitivecomputations/dolphin-r1">
                  <TrendHead>cognitivecomputations/dolphin-r1</TrendHead>
                  <TrendStatBox>
                    <span> updated 7 days ago .</span>
                    <TrendDownload> 1.74K</TrendDownload>
                    <TrendLike>180</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/open-thoughts/OpenThoughts-114k">
                  <TrendHead>open-thoughts/OpenThoughts-114k</TrendHead>
                  <TrendStatBox>
                    <span> updated 1 days ago .</span>
                    <TrendDownload>24K</TrendDownload>
                    <TrendLike>291</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/fka/awesome-chatgpt-prompts">
                  <TrendHead>fka/awesome-chatgpt-prompts</TrendHead>
                  <TrendStatBox>
                    <span> updated Jun 6 .</span>
                    <TrendDownload>9.83K</TrendDownload>
                    <TrendLike>7.34</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/ServiceNow-AI/R1-Distill-SFT">
                  <TrendHead>ServiceNow-AI/R1-Distill-SFT</TrendHead>
                  <TrendStatBox>
                    <span> updated 8 days ago .</span>
                    <TrendDownload>1.73K</TrendDownload>
                    <TrendLike>162</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
              <TrendBox>
                <Link href="/bespokelabs/Bespoke-Stratos-17k">
                  <TrendHead>bespokelabs/Bespoke-Stratos-17k</TrendHead>
                  <TrendStatBox>
                    <span> updated 6 days ago .</span>
                    <TrendDownload>34.4K</TrendDownload>
                    <TrendLike>215</TrendLike>
                  </TrendStatBox>
                </Link>
              </TrendBox>
            </div>

            <TrendLink href="/models"> Browse 250K datasets</TrendLink>
          </div>
        </div>
      </div>
    </section>
  );
}
