// import React from 'react'
import { useParams } from "react-router-dom";
import { blogs } from "./Home";
import { Link } from "react-router-dom";

const Blogdetail = () => {
  const { id } = useParams();
  const selectedBlogs = blogs.find((blog) => {
    return blog.id.toString() === id;
  });
  return (
    <div className="w-11/12 container mx-auto mt-3 flex flex-col mb-5">
      <img
        src={selectedBlogs?.image}
        alt={selectedBlogs?.title}
        className="w-full h-150 relative"
      />
      <div className="flex flex-col bg-gray-50 relative z-10 mx-auto -mt-46 w-[70%] px-2 py-4  gap-3 mb-10">
        <h1 className="text-start font-black font-[Caveat] text-2xl">
          <span className="font-[Lobster] text-sm">Written By: </span>
          {selectedBlogs?.author}
        </h1>
        <h1 className="text-center font-black text-slate-700 text-3xl font-[Geist]">
          {selectedBlogs?.title}
        </h1>
        <div className="flex justify-center gap-6 ">
          <p className="text-sm text-gray-500 font-[Lobster]">
            {selectedBlogs?.date}
          </p>
          <p className="text-sm text-gray-500 font-[Lobster]">
            {selectedBlogs?.category}
          </p>
        </div>
        <h3 className="font-bold font-[Caveat] text-center text-2xl">
          {selectedBlogs?.excerpt}
        </h3>
        <p className="text-start mx-6 text-slate-700">
          {selectedBlogs?.content}
        </p>
        <p className="text-start mx-6 text-slate-700">
          {selectedBlogs?.content}
        </p>
        <img
          src={selectedBlogs?.image}
          alt={selectedBlogs?.title}
          className="w-[95%] mx-auto my-3 rounded-md"
        />
        <p className="text-start mx-6 text-slate-700">
          {selectedBlogs?.content}
        </p>
        <Link
          to={`/EditBlog/${selectedBlogs?.id}`}
          className="rounded-lg bg-yellow-300 px-2 py-2 hover:bg-yellow-500 transition text-sm font-[Geist] text-black mx-auto w-30 mt-2 text-center"
        >
          Edit Blog
        </Link>
      </div>
    </div>
  );
};

export default Blogdetail;
