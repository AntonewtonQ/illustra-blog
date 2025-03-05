import BlogItem from "@/components/PostItem";
import BlogList from "@/components/PostList";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <BlogList />
    </>
  );
}
