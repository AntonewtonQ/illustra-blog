import React from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "@/constants";

const BlogList = () => {
  return (
    <div className="max-w-[870px] mx-auto p-4 lg:py-8 flex-col items-start justify-center border-2 border-red-400">
      {blog_data.map((blog) => (
        <BlogItem
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
