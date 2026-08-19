import { useParams } from "react-router-dom";
import { blogs } from "./Home";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EditBlog = () => {
  const { id } = useParams();

  const selectedBlog = blogs.find(
    (blog) => blog.id.toString() === id
  );

  return (
    <>
      <div className="flex">
        {/* Form Side */}
        <div className="flex flex-col gap-3 justify-center items-center w-[50%] min-h-screen relative z-20">
          <form className="relative z-50 left-5 w-full bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-3 container mx-auto my-auto">
            <h1 className="font-black text-3xl text-yellow-600 font-[Geist]">
              Edit Blog
            </h1>

            <label
              htmlFor="title"
              className="text-gray-700 font-bold font-[Geist]"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              defaultValue={selectedBlog?.title}
              placeholder="Enter your title"
              className="bg-gray-100 rounded-lg px-2 py-2 focus:outline-amber-200"
            />

            <label
              htmlFor="content"
              className="text-gray-700 font-bold font-[Geist]"
            >
              Content
            </label>

            <textarea
              id="content"
              defaultValue={selectedBlog?.content}
              placeholder="Write your story"
              className="bg-gray-100 rounded-lg px-2 py-2 h-50 focus:outline-amber-200"
            />

            <button
              type="submit"
              className="rounded-lg bg-yellow-300 px-3 py-2 hover:bg-yellow-500 transition text-black font-bold font-[Geist] mt-4"
            >
              Update Blog
            </button>
          </form>
        </div>

        {/* Yellow Side */}
        <div className="w-[50%] bg-yellow-500 h-screen relative z-10 justify-center items-center flex flex-col">
          <div className="p-8 flex flex-col gap-3">
            <h1 className="font-black mx-35 text-3xl text-slate-900 font-[Geist]">
              Edit Your Story
            </h1>

            <p className="font-bold text-2xl mx-35 font-[Lobster] text-gray-50">
              <i className="text-yellow-900">
                Want to make some changes?
              </i>{" "}
              Update your blog and keep your story fresh, useful, and
              engaging for your readers.
            </p>
          </div>

          <Link
            to={`/Blogdetail/${id}`}
            className="rounded-lg bg-slate-900 px-3 py-2 hover:bg-slate-700 transition smooth text-white font-bold font-[Geist] flex gap-2 items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditBlog;