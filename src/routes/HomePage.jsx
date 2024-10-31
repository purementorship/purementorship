import { Link } from "react-router-dom";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import aboutUsHome from "@/assets/AboutUsHome.png";
import homepageTest from "@/assets/homepage-test.png";
import Lockhead from "@/assets/lockhead";
import Aws from "@/assets/aws";
import Paloalto from "@/assets/paloalto";
import Nasa from "@/assets/nasa";
import Nvidia from "@/assets/nvidia";
import Microsoft from "@/assets/microsoft";
import Exonmobil from "@/assets/exonmobil";
import Amazon from "@/assets/amazon";
import Rmi from "@/assets/rmi";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/PageLayout";

export default function HomePage() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <PageLayout className="flex flex-col h-screen snap-y snap-mandatory">
      {/* PAGE 1: WELCOME */}
      <section className="flex items-center justify-center h-screen snap-start">
        <div className="flex flex-col items-center justify-center xl:items-start h-screen text-white md:shrink-0 w-full">
          <img
            className="h-full w-full object-cover xl:hidden"
            src={aboutUsHome}
            alt="About Us"
          />
          <img
            className="hidden xl:block xl:h-full xl:w-full xl:object-cover"
            src={homepageTest}
            alt="Homepage Test"
          />
          <div className="flex flex-col absolute xl:w-[40%]">
            <div className="px-8 py-4 w-full bg-pmpurple bg-opacity-50 xl:bg-gradient-to-r xl:from-pmpurple xl:from-60% lg:to-transparent">
              <h1 className="text-3xl md:text-5xl text-center font-semibold xl:text-left">
                Reach the highest
              </h1>
              <h1 className="text-3xl md:text-5xl text-center font-semibold xl:text-left">
                version of yourself
              </h1>
              <p className="font-light pt-6 text-center xl:text-left">
                Pure Mentorship connects you with mentors for free!
              </p>
              <div className="flex pt-4 justify-center xl:justify-start">
                <Link to="/AboutUs">
                  <Button
                    onClick={handleClick}
                    variant="link"
                    className="text-lg bg-white text-pmpurple hover:bg-gray-400"
                  >
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2: LOGO GARDEN */}
      <section className="flex items-center justify-center bg-gray-100 snap-start">
        <div className="container w-full flex flex-col items-center lg:m-16">
          <h2 className="text-center text-2xl md:text-3xl pb-5 pt-5 md:pt-0">
            Our mentors have worked with:
          </h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            className="flex flex-wrap justify-between items-center gap-2 pb-4 md:justify-center md:gap-12 lg:gap-20"
          >
            <div className="flex justify-center items-center">
              <Aws />
            </div>
            <div className="flex justify-center items-center">
              <Amazon />
            </div>
            <div className="flex justify-center items-center">
              <Nasa />
            </div>
            <div className="flex justify-center items-center">
              <Rmi />
            </div>
            <div className="flex justify-center items-center">
              <Paloalto />
            </div>
            <div className="flex justify-center items-center">
              <Nvidia />
            </div>
            <div className="flex justify-center items-center">
              <Microsoft />
            </div>
            <div className="flex justify-center items-center">
              <Exonmobil />
            </div>
            <div className="flex justify-center items-center">
              <Lockhead />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAGE 3: SUCCESS STORIES / QUOTES */}
      <section className="flex items-center justify-center min-h-screen bg-pmpurple snap-start">
        <div className="container w-full px-4 md:px-6">
          <div className="relative h-[1000px] w-full overflow-hidden">
            <Carousel className="absolute inset-0 flex h-full w-full items-center justify-center">
              <CarouselContent>
                <CarouselItem className="flex justify-center">
                  <div className="flex h-full max-w-5xl flex-col items-center text-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white px-2">
                      "[Mentorship] is really important because giving out your
                      experience and knowledge of how you're able to tap into
                      the industry is a pure sense of giving back to the
                      community!"
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      -Arish B., Mentor
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div className="flex h-full max-w-5xl flex-col items-center text-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white px-2">
                      "Mentorship can influence a mentee's life for the better
                      in a professional, academic, or personal aspect. Having a
                      mentor that you look up to is motivating and influential
                      to a mentee so they can reach their full potential."
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      -Aadity J., Mentor
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div className="flex h-full max-w-5xl flex-col items-center text-center justify-center space-y-2 p-6">
                    <h2 className="text-3xl font-bold text-white px-2">
                      "Mentors have played a significant role in helping me
                      advance through each step of my professional journey –
                      right since I was an aspiring chemical engineer, to now
                      being a changemaker in sustainability. I joined Pure
                      Mentorship to give back to the community and pay it
                      forward as a mentor."
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      -Anisha K., Mentor
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
    </PageLayout>
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
