"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { blog_data, BlogProps, formatDate } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
type Params = {
  id: number;
};

const page = ({ params }: { params: Promise<Params> }) => {
  const [data, setData] = useState<BlogProps | null>(null);
  const unwrappedParams = use(params);

  const fecthBlogData = () => {
    const blog = blog_data.find((blog) => blog.id == unwrappedParams.id);

    if (blog) {
      setData(blog);
    }
  };

  useEffect(() => {
    fecthBlogData();
  }, []);
  return (
    <div>
      {data ? (
        <div className="max-w-[870px] mx-auto p-4 lg:py-24 flex-col items-start justify-center  space-y-4">
          <div className="flex gap-4">
            <Button className="transition ease-in-out rounded-3xl delay-150 hover:-translate-y-1 duration-300">
              <Link className="w-full flex gap-2 items-center" href="/login">
                Login <ArrowRight />
              </Link>
            </Button>
            <Button className="bg-white text-black rounded-3xl border-[1px] hover:bg-zinc-100 border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              <Link href="/">View all blogs</Link>
            </Button>
          </div>
          <div className="w-full flex flex-col items-start gap-4">
            <Image
              src={data.image}
              alt=""
              width={600}
              height={600}
              className="rounded-3xl"
            />
            <p className="text-[15px] font-light">{`#${data.category}`}</p>
          </div>

          <h1 className="text-3xl font-extrabold">{data.title}</h1>
          <div className="flex justify-start items-center space-x-4">
            <div className="flex items-center justify-center gap-2">
              <Image src={data.author_img} alt="" width={38} height={38} />
              <p>{data.author}</p>
            </div>
            <span className="text-zinc-500 text-lg">-</span>
            <p className="text-zinc-500 text-sm lg:text-base">
              {formatDate(data.date)}
            </p>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen space-y-3 justify-center items-center">
          <Skeleton className="h-[520px] w-[1000px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[1000px]" />
            <Skeleton className="h-4 w-[900px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
