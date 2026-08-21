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
        className="w-full md:h-100 lg:h-150 h-56 relative"
      />
      <div className="flex flex-col bg-gray-50 relative z-10 mx-auto md:-mt-46 lg:-mt-46 -mt-30 md:w-[70%] lg:w-[70%] w-[80%] px-2 py-4  gap-3 mb-10">
        <h1 className="text-start font-black font-[Caveat] md:text-2xl lg:text-2xl text-[15px]">
          <span className="font-[Lobster] font-light md:text-sm lg:text-sm text-[12px]">Written By: </span>
          {selectedBlogs?.author}
        </h1>
        <h1 className="text-center font-black text-slate-700 md:text-3xl lg:text-3xl text-[18px] font-[Geist]">
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
        <h3 className="font-bold font-[Caveat] text-center lg:text-2xl md:text-[22px] text-[14px]">
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
