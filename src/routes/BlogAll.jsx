import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/PageLayout";
import BlogAllExpand from "@/routes/BlogAllExpand";
import { motion } from "framer-motion";
import blogStudents from "@/assets/BlogStudents.webp";
import internLetters from "@/assets/internLetters.webp";
import creativeBooms from "@/assets/creativeBooms.webp";
import newFramework from "@/assets/lady-at-desk.webp";

export default function BlogAll() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = useMemo(() => {
    return [
      {
        id: 1,
        title: "In Appreciation of Our Student Leaders",
        category: "Featured",
        date: "Aug 9, 2023",
        description:
          "Now as there is a week left before our Summer Student Leaders Cohort leave the Pure Mentorship Program...",
        image: blogStudents,
        link: "/BlogAllExpand#post-1",
      },
      {
        id: 2,
        title:
          "Introducing Intern Letters from Pure Mentorship's Current Interns!",
        category: "Popular",
        date: "June 4, 2023",
        description:
          "At Pure Mentorship, we believe in the power of sharing experiences and inspiring one another.",
        image: internLetters,
        link: "/BlogAllExpand#post-2",
      },
      {
        id: 3,
        title: "Creative Booms Ongoing",
        category: "Popular",
        date: "Dec 23, 2022",
        description:
          "At Pure Mentorship, we believe in the power of sharing experiences and inspiring one another.",
        image: creativeBooms,
        link: "/BlogAllExpand#post-3",
      },
      {
        id: 4,
        title: "Our New Framework",
        category: "Popular",
        date: "July 17, 2023",
        description:
          "Pure Mentorship focuses on making sure that we improve and help students find the mentor that they need.",
        image: newFramework,
        link: "/BlogAllExpand#post-4",
      },
    ].filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <>
      <PageLayout>
        <section className="w-full py-12 md:py-16 lg:py-20 bg-pm">
          <div className="container px-6 md:px-8 lg:px-10 flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Browse all blog posts
                <span className="block h-1 w-20 bg-red-500 mt-2" />
              </h2>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search blog posts..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 md:px-0">
            {filteredPosts.map((post) => (
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeInAnimationVariants}
              >
                <div
                  key={post.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out md:mx-5"
                >
                  <Link
                    to={post.link}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-950 p-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </PageLayout>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
