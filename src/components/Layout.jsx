import { Link } from "react-router-dom";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Lockhead from "@/assets/lockhead";
import Aws from "@/assets/aws";
import Paloalto from "@/assets/paloalto";
import Nasa from "@/assets/nasa";
import Nvidia from "@/assets/nvidia";
import Microsoft from "@/assets/microsoft";
import Exonmobil from "@/assets/exonmobil";
import Amazon from "@/assets/amazon";
import Rmi from "@/assets/rmi";
import LeftBush from "@/assets/leftbush";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-auto snap-y snap-mandatory">
      {/* PAGE 1: WELCOME */}
      <section className="flex items-center justify-center h-screen snap-start">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center lg:items-start h-screen text-white md:shrink-0">
                <img
                  className="h-full w-full object-cover"
                  src="./src/assets/homepage.jpg"
                />
                <div className="flex flex-col absolute lg:w-2/5 gap-3">
                  <div className="w-full h-0.5">
                    <div className="w-full h-1.5 bg-gradient-to-r from-transparent from-0.1% via-pmpurple via-5% to-transparent"></div>
                  </div>
                  <h1 className="text-5xl text-center lg:text-left mx-14">
                    Reach the highest
                  </h1>
                  <h1 className="text-5xl text-center lg:text-left mx-14">
                    version of yourself
                  </h1>
                  <h1 className="text-5xl text-center lg:text-left mx-14">
                    with the right support.
                  </h1>

                  <div className="p-5 w-full bg-gradient-to-r from-pmpurple from-60% to-transparent">
                    <p className="font-light mx-10 text-center lg:text-left">
                      At Pure Mentorship, we connect you with experienced
                      mentors in tech and entrepreneurship for personalized
                      support - free of charge!
                    </p>
                  </div>

                  <div className="flex flex-col items-center lg:items-start">
                    <Button className="bg-white text-pmpurple lg:mx-14 lg:mr-0 hover:bg-gray-400">
                      Join Today
                    </Button>
                    <div className="flex pt-1 items-center">
                      <Button
                        variant="link"
                        className="text-pmpurplelight font-bold mr-0 lg:mx-14 lg:mr-1 px-1"
                      >
                        LEARN MORE
                      </Button>
                      <ArrowRight className="text-pmpurplelight" />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center h-screen text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Explore Our Features
                </h1>
                <p className="text-xl mb-8">Unlock the power of our app</p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-[#6366F1] font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-white text-white font-medium transition-colors hover:bg-white hover:text-[#6366F1] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 rounded-full bg-gray-900/50 p-2">
            <ChevronLeftIcon className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 rounded-full bg-gray-900/50 p-2">
            <ChevronRightIcon className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </CarouselNext>
        </Carousel>
      </section>

      {/* PAGE 2: LOGO GARDEN */}
      <section className="flex items-center justify-center bg-gray-100 snap-start lg:h-screen">
        <div className="container w-full px-4 md:px-6 flex flex-col items-center gap-5 m-10 lg:m-96">
          <h2 className="text-center text-3xl pb-10 lg:pb-24">
            Our mentors have worked with:
          </h2>
          <div className="grid justify-items-center lg:flex lg:flex-row pb-20 w-full justify-center items-center gap-20">
            <Aws />
            <Lockhead />
            <Paloalto />
            <Nasa />
            <Nvidia />
          </div>
          <div className="grid justify-items-center lg:flex lg:flex-row justify-center w-full items-center gap-20">
            <Microsoft />
            <Exonmobil />
            <Amazon />
            <Rmi />
          </div>
        </div>
      </section>

      {/* PAGE 3: SUCCESS STORIES / QUOTES */}
      <section className="flex items-center justify-center h-screen bg-pmpurple snap-start">
        <div className="container w-full px-4 md:px-6">
          <div className="relative h-[1000px] w-full overflow-hidden">
            <Carousel className="absolute inset-0 flex h-full w-full items-center justify-center">
              <CarouselContent>
                <CarouselItem className="flex justify-center">
                  <div className="flex h-full max-w-5xl flex-col items-center text-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white">
                      "[Mentorship] is really important because giving out your
                      experience and knowledge of how you're able to tap into
                      the industry is a pure sense of giving back to the
                      community!"Unleash Your Creativity
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      -Arish B., Mentor
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex h-full w-full flex-col items-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white">Quote #2</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Bottom text.
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex h-full w-full flex-col items-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white">Quote #3</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Bottom text.
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-all hover:bg-white dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-800">
                <ChevronLeftIcon className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-all hover:bg-white dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-800">
                <ChevronRightIcon className="h-5 w-5" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </section>

      {/* PAGE 4: FOOTER */}
      <section className="flex items-center justify-center h-screen bg-gray-100 snap-start">
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link className="flex items-center space-x-2" href="#">
                <img
                  alt="Logo"
                  className="text-gray-900 dark:text-gray-50"
                  height={24}
                  src="./src/assets/logo.svg"
                  style={{
                    aspectRatio: "24/24",
                    objectFit: "cover",
                  }}
                  width={24}
                />
                <span className="text-lg font-bold text-pmpurple">
                  Pure Mentorship
                </span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:pl-20 lg:pr-20">
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Home
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Services
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="https://www.linkedin.com/company/pure-mentorship/mycompany/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/purementorship/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 lg:pl-10">
                © 2024 Pure Mentorship. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
