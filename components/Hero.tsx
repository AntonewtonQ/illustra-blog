"use client";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  {
    src: "/images/image1.png",
    text: "Explorando Ideias, Compartilhando Pensamentos",
  },
  { src: "/images/image2.png", text: "Reflexões, Inspirações e Aprendizados" },
  { src: "/images/image3.png", text: "Um Espaço para Criatividade e Inovação" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca de slide a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[870px] mx-auto p-4 lg:py-24 flex flex-col items-center justify-center">
      <Carousel className="w-full max-w-[800px] mt-6">
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map(({ src, text }, index) => (
            <CarouselItem key={index} className="relative flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-semibold rounded-2xl">
                {text}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
        />
        <CarouselNext
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        />
      </Carousel>

      <div className="flex gap-4 mt-6">
        <Button className="transition ease-in-out rounded-3xl delay-150 hover:-translate-y-1 duration-300">
          <Link
            className="w-full flex gap-2 items-center"
            href="https://antonewton.vercel.app/"
            target="_blank"
          >
            Get in touch <ArrowRight />
          </Link>
        </Button>
        <Button className="bg-white text-black rounded-3xl border-[1px] hover:bg-zinc-100 border-zinc-400 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <Link href="/">View all posts</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
