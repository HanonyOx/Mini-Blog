import { useState } from "react";
import { Link } from "react-router-dom";

// import React from 'react'

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt:
      "Learn the basics of React and understand how to build your first component.",
    content:
      "React is a JavaScript library used for building modern user interfaces. One of the main ideas behind React is breaking an application into small, reusable components. Instead of creating one large file containing everything, developers can create separate components for buttons, navigation bars, cards, forms, and entire pages. React also uses a virtual DOM to efficiently update parts of the interface when data changes. As a beginner, it is important to understand components, JSX, props, state, events, and how React renders information. Once these concepts become familiar, you can start building larger applications and eventually work with tools such as React Router, APIs, and state management libraries.",
    author: "Hanony",
    category: "React",
    image: "https://picsum.photos/id/1/800/500",
    date: "2026-08-01",
  },

  {
    id: 2,
    title: "Understanding TypeScript",
    excerpt:
      "A beginner-friendly introduction to TypeScript and why developers use it.",
    content:
      "TypeScript is a programming language built on top of JavaScript that adds static typing. JavaScript allows variables to contain different types of values, which can sometimes lead to unexpected errors. TypeScript helps developers identify many of these problems while writing code rather than waiting until the application runs. For example, when creating an object, you can describe the properties that object should contain and the type of each property. TypeScript becomes especially useful as applications grow because it makes code easier to understand, maintain, and refactor. When working with React, TypeScript can also be used to define the shape of props, state, API responses, and other data.",
    author: "David Johnson",
    category: "TypeScript",
    image: "https://picsum.photos/id/2/800/500",
    date: "2026-08-03",
  },

  {
    id: 3,
    title: "Why Developers Use Git",
    excerpt:
      "Discover how Git helps developers manage, track, and collaborate on code.",
    content:
      "Git is a distributed version control system that allows developers to keep track of changes made to their projects. Instead of manually creating multiple copies of a project whenever something changes, developers can use Git to create commits that represent different stages of their work. Git also allows developers to create branches where they can work on new features without affecting the main version of the project. This becomes extremely useful when working with other developers because multiple people can work on different features and later combine their work. Understanding commands such as git add, git commit, git push, git pull, and git branch is an important skill for anyone learning software development.",
    author: "Sarah Williams",
    category: "Development",
    image: "https://picsum.photos/id/3/800/500",
    date: "2026-08-05",
  },

  {
    id: 4,
    title: "CSS Flexbox Made Simple",
    excerpt:
      "Understand the fundamentals of Flexbox and how it helps create responsive layouts.",
    content:
      "Flexbox is a CSS layout system designed to make it easier to arrange elements inside a container. It is particularly useful when you need to position elements horizontally or vertically. Important Flexbox properties include display flex, justify-content, align-items, flex-direction, gap, flex-wrap, and flex. For example, justify-content controls how items are distributed along the main axis, while align-items controls their alignment along the cross axis. Flexbox is commonly used for navigation bars, cards, buttons, forms, and many other interface layouts. Once you understand the main axis and cross axis, Flexbox becomes much easier to work with.",
    author: "Michael Brown",
    category: "CSS",
    image: "https://picsum.photos/id/4/800/500",
    date: "2026-08-07",
  },

  {
    id: 5,
    title: "Building Responsive Websites",
    excerpt:
      "Learn how to make websites adapt to phones, tablets, laptops, and desktops.",
    content:
      "Responsive web design is the process of creating websites that work properly across different screen sizes and devices. A website that looks good on a desktop may become difficult to use on a mobile phone if it is not designed responsively. Developers use techniques such as flexible layouts, CSS media queries, responsive units, Flexbox, and CSS Grid to create adaptable interfaces. Mobile-first design is another useful approach where the developer starts by designing for smaller screens and then adds styles for larger devices. Testing your website at different screen widths is important because responsive design is not only about making elements smaller; it is about making the entire user experience work well on every device.",
    author: "Emily Davis",
    category: "Web Design",
    image: "https://picsum.photos/id/5/800/500",
    date: "2026-08-09",
  },

  {
    id: 6,
    title: "JavaScript Array Methods",
    excerpt:
      "Explore useful JavaScript methods every frontend developer should know.",
    content:
      "Arrays are used constantly in JavaScript applications, especially when working with data from APIs. JavaScript provides several useful methods for manipulating arrays. The map method can be used to transform every item in an array, while filter can be used to create a new array containing only items that meet a condition. The find method is useful when you need to retrieve a single item that matches a condition. The reduce method can be used to combine array values into a single result, while forEach can be used to perform an action for every item. Understanding these methods is especially important when working with React because developers frequently use map to render lists of data.",
    author: "Daniel Smith",
    category: "JavaScript",
    image: "https://picsum.photos/id/6/800/500",
    date: "2026-08-10",
  },

  {
    id: 7,
    title: "Understanding React State",
    excerpt:
      "Learn how state allows React components to remember and update information.",
    content:
      "State is one of the most important concepts in React. It allows a component to store information that can change while the application is running. For example, a counter can use state to remember its current number, while a form can use state to store the values entered by a user. When state changes, React re-renders the component so that the interface reflects the new information. The useState hook is commonly used to create state inside functional components. Understanding when and why state should be used will help you build interactive applications such as forms, dashboards, shopping carts, and authentication interfaces.",
    author: "Jessica Wilson",
    category: "React",
    image: "https://picsum.photos/id/7/800/500",
    date: "2026-08-11",
  },

  {
    id: 8,
    title: "Introduction to APIs",
    excerpt:
      "Understand how frontend applications communicate with backend services.",
    content:
      "An API, or Application Programming Interface, provides a way for different software systems to communicate with each other. In frontend development, applications often communicate with backend servers through APIs to retrieve or send information. For example, a blog application could request a list of articles from an API and display those articles on the screen. APIs commonly use HTTP methods such as GET, POST, PUT, PATCH, and DELETE. Data is frequently returned in JSON format, which JavaScript applications can easily work with. Learning how to fetch API data is an important step toward building real-world applications because most production applications rely on backend services rather than hardcoded data.",
    author: "Chris Anderson",
    category: "Web Development",
    image: "https://picsum.photos/id/8/800/500",
    date: "2026-08-12",
  },

  {
    id: 9,
    title: "How React Components Work",
    excerpt:
      "Understand reusable components and why they are important in React.",
    content:
      "Components are the building blocks of React applications. A component is usually responsible for a specific part of the user interface and can be reused in different parts of an application. For example, a BlogCard component could be used to display every blog on a website. Instead of writing the same HTML structure repeatedly, developers can create one component and provide different information through props. Components can also contain their own state and event handlers. Breaking an application into smaller components makes the code easier to understand, maintain, test, and reuse. Learning how to identify good component boundaries is an important skill for React developers.",
    author: "Olivia Martin",
    category: "React",
    image: "https://picsum.photos/id/9/800/500",
    date: "2026-08-13",
  },

  {
    id: 10,
    title: "Frontend Developer Roadmap",
    excerpt:
      "A simple overview of the skills you can learn to become a frontend developer.",
    content:
      "Becoming a frontend developer requires more than learning a single programming language or framework. A strong foundation should begin with HTML for structuring web pages, CSS for styling and layouts, and JavaScript for adding functionality. After learning these fundamentals, developers can learn tools such as Git and GitHub for version control. A framework or library such as React can then be used to build more complex interfaces. Other important skills include responsive design, working with APIs, accessibility, debugging, and understanding browser developer tools. The most important thing is not to rush through the roadmap. Building projects and solving problems regularly will help turn theoretical knowledge into practical skills.",
    author: "Alex Thompson",
    category: "Career",
    image: "https://picsum.photos/id/10/800/500",
    date: "2026-08-14",
  },

  {
    id: 11,
    title: "Learning Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can speed up your frontend development.",
    content:
      "Tailwind CSS is a utility-first CSS framework that provides small utility classes for styling elements directly in your markup. Instead of creating a separate CSS class for every component, developers can combine utilities for properties such as padding, margin, colors, typography, width, height, display, and responsive behavior. Tailwind also provides responsive prefixes that make it easier to create layouts for different screen sizes. Although Tailwind can make development faster, it is still important to understand CSS fundamentals because Tailwind is ultimately built around the same CSS concepts. Understanding Flexbox, Grid, spacing, positioning, and responsive design will make Tailwind much easier to learn.",
    author: "Brian Taylor",
    category: "CSS",
    image: "https://picsum.photos/id/11/800/500",
    date: "2026-08-15",
  },

  {
    id: 12,
    title: "Making Better User Interfaces",
    excerpt:
      "Learn simple principles for creating clean, accessible, and usable interfaces.",
    content:
      "A good user interface should make it easy for people to understand what they can do and how they can do it. Consistency is important because users should not have to learn a completely different interaction pattern on every page. Good interfaces also use clear typography, appropriate spacing, readable colors, recognizable buttons, and logical layouts. Accessibility should also be considered so that people with different abilities can use the application. Responsive design is another important part of UI development because users may access the same website from phones, tablets, or desktop computers. The goal of good UI design is not simply to make an application look attractive but to make it easy and enjoyable to use.",
    author: "Sophia Clark",
    category: "UI/UX",
    image: "https://picsum.photos/id/12/800/500",
    date: "2026-08-16",
  },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPage = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const currentBlogs = blogs.slice(startIndex, endIndex);
  return (
    <>
      <div className="">
        <h1 className="text-center text-yellow-500 text-3xl font-[Geist]">
          Latest News
          <br />
          <span className="text-2xl text-black font-[Geist]">from</span>{" "}
          <span className="text-slate-700 font-bold font-[Geist]">
            HAN's BLOG
          </span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 grid grid-cols-1 gap-1 w-11/12 container mx-auto mt-3">
        {currentBlogs.map((b) => {
          return (
            <div key={b.id}>
              <div className="flex flex-col mr-3 rounded-2xl hover:bg-slate-900 hover:text-white items-center bg-gray-200 lg:w-85 h-100 mb-3">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-[70%] rounded-2xl"
                />
                <h1 className="text-2xl text-start font-semibold">{b.title}</h1>

                <h2 className="ml-3 text-sm text-gray-400 text-start mr-2">
                  {b.excerpt}
                </h2>

                <div className="mt-auto flex justify-between w-full p-3">
                    <h1 className="font-[Giest] font-bold">{b.author}</h1>
                  
                    <Link to={`/blogdetail/${b.id}`} className="rounded-lg bg-yellow-300 px-2 py-2 hover:bg-yellow-500 transition text-sm font-[Geist] text-black">
                    Read more...
                    </Link>
                  
                </div>
              </div>
            </div>
          );
        })}

        <div className="col-span-full flex justify-center gap-2 mt-5 mb-5">
          {Array.from({ length: totalPage }).map((_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === pageNumber
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
