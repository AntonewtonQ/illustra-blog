import React from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "@/constants";

const BlogList = () => {
  return (
    <div className="max-w-[870px] mx-auto p-4 lg:py-8 flex-col items-start justify-center border-t-2 border-b-2 border-black rounded-3xl">
      {blog_data.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          category={blog.category}
          description={blog.description}
          author={blog.author}
          date={blog.date}
          id={blog.id}
          image={blog.image}
          author_img={blog.author_img}
        />
      ))}
    </div>
  );
};

export default BlogList;
