// import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col md:flex lg:flex md:flex-row lg:flex-row mx-auto lg:mx-none md:mx-none justify-center items-center md:justify-center lg:justify-center md:items-center lg:items-center">
          <div className="flex md:flex lg:flex flex-col gap-1 justify-center lg:justify-center md:justify-center items-center md:items-center lg:items-center md:w-[70%] lg:w-[50%] min-h-screen lg:relative md:relative md:z-20 lg:z-20 sm:w-[70%] ">
             <form className="lg:relative md:relative sm:relative lg:z-50  md:z-50 md:left-5 lg:left-5 sm:w-full bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-3 container md:mx-auto lg:mx-auto md:my-auto lg:my-auto mx-auto my-auto">
            <h1 className="font-black  text-3xl text-yellow-600 font-[Giest]">
              Create your account
            </h1>

            <label
              htmlFor="email"
              className="text-gray-700 font-bold font-[Giest] "
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-amber-200"
            />
            <label
              htmlFor="email"
              className="text-gray-700 font-bold font-[Giest] "
            >
              Email Address
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-amber-200"
            />

            <label
              htmlFor="password"
              className="text-gray-700 font-bold font-[Giest] "
            >
              Password
            </label>
            <input
              type="text"
              placeholder="*****"
              className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-amber-200"
            />

            <label
              htmlFor="password"
              className="text-gray-700 font-bold font-[Giest] "
            >
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="*****"
              className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-amber-200"
            />

            <button className="rounded-lg bg-yellow-300 px-3 py-2 hover:bg-yellow-500 transition smooth transform-border text-black font-bold font-[Geist] mt-4">
              Create Account
            </button>

            <p className="text-center font-[Geist]">
              Already have an Account{" "}
              <Link
                to="/Login"
                className="text-sm text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>

              <Link
            to="/"
            className="text-center text-sm text-red-500 lg:hidden"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to home
          </Link>
          </form>
             
          
        </div>
         

        {/* Left Side */}
        <div className="hidden md:hidden w-[50%] bg-yellow-500 h-screen relative z-10 justify-center items-center flex-col lg:flex ">
          <div className=" p-8 flex flex-col gap-3">
            <h1 className="font-black mx-35 text-3xl font-[Giest] text-slate-900">
              Create your account
            </h1>
            <p className="font-bold text-2xl mx-35 font-[Lobster] text-gray-50">
              Join{" "}
              <span className="font-black  text-yellow-700">Han's Blog </span>
              and become part of a community where ideas, stories, and knowledge
              are shared. Create an account to start exploring and sharing your
              own content.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-lg bg-slate-900 px-3 py-2 hover:bg-slate-900 transition smooth transform-border text-white font-bold font-[Geist] justify-end flex gap-2 items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
