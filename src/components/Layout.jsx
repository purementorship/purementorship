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

export default function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-auto snap-y snap-mandatory">
      <section className="flex items-center justify-center h-screen snap-start">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center lg:items-start h-screen text-white md:shrink-0">
                <img
                  className="h-full w-full object-cover"
                  src="./src/assets/homepage.jpg"
                />
                <div className="flex flex-col border border-red-700 absolute px-14 lg:w-2/5">
                  <h1 className="text-5xl text-center lg:text-left">
                    Reach the highest
                  </h1>
                  <h1 className="text-5xl text-center lg:text-left">
                    version of yourself
                  </h1>
                  <h1 className="text-5xl text-center lg:text-left">
                    with the right support.
                  </h1>
                  <div className="p-5 bg-gradient-to-r from-pmpurple from-60% to-transparent">
                    <p className="font-light">
                      At Pure Mentorship, we connect you with experienced
                      mentors in tech and entrepreneurship for personalized
                      support - free of charge!
                    </p>
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

      <section className="flex items-center justify-center h-screen bg-gray-100 snap-start">
        <div className="container max-w-5xl px-4 md:px-6">
          <p>Section 2</p>
        </div>
      </section>

      <section className="flex items-center justify-center h-screen bg-white snap-start">
        <div className="container max-w-5xl px-4 md:px-6">
          <p>Section 3</p>
        </div>
      </section>

      <section className="flex items-center justify-center h-screen bg-gray-100 snap-start">
        <div className="container max-w-5xl px-4 md:px-6">
          <p>Section 4</p>
        </div>
      </section>
    </div>
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

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CircleXIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
