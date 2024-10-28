import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function HistoryCarousel() {
  return (
    <div className="bg-gradient-to-r from-white to-[#ff0000]/25 dark:from-gray-950 dark:to-[#ff0000]/25 p-4 md:p-16">
      <h1 className="text-4xl font-bold text-pmpurple tracking-tight md:text-4xl lg:text-5xl text-center">
        Brief History of Pure Mentorship
      </h1>
      <Carousel className="flex h-full w-full items-center justify-center pt-4">
        <CarouselContent>
          <CarouselItem className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4  pb-8">
            <div className="lg:w-1/2 p-20">
              <div className="text-lg text-gray-600 font-bold text-center ">
                September 2022
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 lg:pr-8 text-center">
                Thenu drafted ideas on why mentorship is important, and how she
                will bring service to others. Soon after, the vision and mission
                for Pure Mentorship was established.
              </div>
            </div>
            <div className="flex flex-col items-center lg:w-1/3">
              <div className="bg-green-500 w-64 h-64 mb-2 flex items-center justify-center text-white font-bold">
                IMAGE
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4  pb-8">
            <div className="text-3xl font-bold text-pmpurple tracking-tight text-center lg:w-1/3">
              September 2022
            </div>
            <div className="flex flex-col items-center lg:w-1/3">
              <div className="bg-green-500 w-64 h-64 mb-2 flex items-center justify-center text-white font-bold">
                IMAGE
              </div>
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-300 lg:w-1/3 lg:pr-8 text-center">
              Thenu drafted ideas on why mentorship is important, and how she
              will bring service to others. Soon after, the vision and mission
              for Pure Mentorship was established.
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
