import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function HistoryCarousel() {
  return (
    <div className="bg-gradient-to-r from-white to-[#ff0000]/25 dark:from-gray-950 dark:to-[#ff0000]/25 p-10">
      <Carousel className="flex h-full w-full items-center justify-center">
        <CarouselContent>
          <CarouselItem className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-10">
            <div className="text-4xl font-bold text-pmpurple tracking-tight text-center md:w-1/4 md:pl-32">
              September 2022
            </div>
            <div className="flex flex-col items-center md:w-3/4">
              <div className="bg-blue-500 w-64 h-64 mb-2 flex items-center justify-center text-white font-bold">
                IMAGE
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thenu drafted ideas on why mentorship is important, and how she
                will bring service to others. Soonafter, the vision and mission
                for Pure Mentorship was established.
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-10">
            <div className="text-4xl font-bold text-pmpurple tracking-tight text-center md:w-1/4 md:pl-32">
              November 2022
            </div>
            <div className="flex flex-col items-center md:w-3/4">
              <div className="bg-green-500 w-64 h-64 mb-2 flex items-center justify-center text-white font-bold">
                IMAGE
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thenu drafted ideas on why mentorship is important, and how she
                will bring service to others. Soonafter, the vision and mission
                for Pure Mentorship was established.
              </div>
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
