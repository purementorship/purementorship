import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import september2022 from "@/assets/history/september2022.png";
import november2022 from "@/assets/history/november2022.png";
import december2022 from "@/assets/history/december2022.png";
import january2023 from "@/assets/history/january2023.png";
import june2023 from "@/assets/history/june2023.png";
import august2023 from "@/assets/history/august2023.png";
import january2024 from "@/assets/history/january2024.png";

const carouselItems = [
  {
    date: "September 2022",
    description:
      "Thenu drafted ideas on why mentorship is important, and how she will bring service to others. Soon after, the vision and mission for Pure Mentorship was established.",
    image: september2022,
  },
  {
    date: "November 2022",
    description:
      "The first two interns were brought on to support operations and basic web development.",
    image: november2022,
  },
  {
    date: "December 2022",
    description: `We created the official logo for Pure Mentorship. "The path to greatness is not found alone, but set ablaze together."`,
    image: december2022,
  },
  {
    date: "January 2023",
    description:
      "Our first cohort of 14 amazing mentors was established. Each of our mentors were hand-picked because of their work success, academic progress, commitment to excellence, and a real passion for supporting a mentee.",
    image: january2023,
  },
  {
    date: "June 2023",
    description:
      "Our team expanded with a UI/UX designer, a blog writer, and nine interns who achieved much. We also had eight student leaders, volunteer members from high school to suport outreach. Read our intern letters and blog posts on our previous blog.",
    image: june2023,
  },
  {
    date: "August 2023",
    description:
      "The interns were able to accomplish many things. They created the new official mentee and mentor handbook, the first newsletter, managed Pure Mentorship's social media platforms, and started work on redoing our old website.",
    image: august2023,
  },
  {
    date: "January 2024",
    description:
      "The interns were able to accomplish many things. They created the new official mentee and mentor handbook, the first newsletter, managed Pure Mentorship's social media platforms, and started work on redoing our old website.",
    image: january2024,
  },
  {
    date: "August 2024",
    description:
      "With hopes of having a larger impact and more reach, Thenu decided to take a step back and put the program on hiatus. Currently she is working with a new executive advisor to refine Pure Mentorship's overall strategy. This partnership will bring out a new program model soon!",
    image: "/path/to/image2.jpg",
  },
];

export default function HistoryCarousel() {
  return (
    <div className="bg-gradient-to-r from-white to-[#ff0000]/25 dark:from-gray-950 dark:to-[#ff0000]/25 p-8 md:py-8 lg:px-12">
      <h1 className="text-4xl font-bold text-pmpurple tracking-tight md:text-4xl lg:text-5xl text-center pb">
        Brief History of Pure Mentorship
      </h1>
      <Carousel className="flex h-full w-full items-center justify-center -mt-4">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center pb-2 lg:pb-0 lg:flex-row lg:space-x-40"
            >
              <div className="flex flex-col items-center lg:w-1/2 lg:p-12">
                <div className="text-xl text-gray-600 font-bold text-center">
                  {item.date}
                </div>
                <div className="m-4 lg:my-0 flex items-center justify-center text-white font-bold lg:hidden">
                  <img
                    src={item.image}
                    alt="carousel image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {item.description}
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2">
                <img
                  src={item.image}
                  alt="carousel image"
                  className="w-full h-full object-cover pr-20"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-all hover:bg-white dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-800">
          <ChevronLeftIcon className="h-5 w-5" />
        </CarouselPrevious>
        <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-all hover:bg-white dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-800">
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
