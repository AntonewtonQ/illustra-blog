import { ArrowRight, ShipWheelIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-[870px] mx-auto p-4 lg:py-24 flex-col items-start justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-[34px] lg:text-[68px] font-thin leading-[30px] lg:leading-[59px] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="flex gap-2">
          <p>Estamos todos juntos e não estamos </p>
          <ShipWheelIcon className="bg-black text-white rounded-md skew-x-12  hover:-skew-x-12 transition " />
          <p>assim mesmo</p>
        </div>
        <div className="flex gap-4">
          <Button className="transition ease-in-out rounded-3xl delay-150 hover:-translate-y-1 duration-300">
            <Link className="w-full flex gap-2 items-center" href="/login">
              Get in touch <ArrowRight />
            </Link>
          </Button>
          <Button className="bg-white text-black rounded-3xl border-[1px] hover:bg-zinc-100 border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
            <Link href="/">View all blogs</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700]">Filters</p>
          <div className="flex gap-4 overflow-x-auto w-full hide-scrollbar">
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #tecnology
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #science
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #art
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #music
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #enterperneuship
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #ia
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #network
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #tecnology
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #science
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #art
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #music
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #enterperneuship
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #ia
              </Link>
            </Button>
            <Button className="rounded-3xl delay-75 bg-white text-gray-700 hover:bg-gray-100 duration-75">
              <Link className="w-full flex gap-2 items-center" href="/">
                #network
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
