// import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col gap-3 justify-center items-center w-[50%] min-h-screen relative z-20">
          <form className="relative z-50 left-5 w-full bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-3 container mx-auto my-auto">
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
          </form>
        </div>

        {/* Left Side */}
        <div className="w-[50%] bg-yellow-500 h-screen relative z-10 justify-center items-center flex flex-col">
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
