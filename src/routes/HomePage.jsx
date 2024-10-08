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
          <h2 className="text-center text-2xl md:text-3xl pb-5">
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

      {/* PAGE 4: FAQs */}
      <section className="flex flex-col items-center justify-start snap-start pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-12">
          <h1 className="text-4xl font-bold">FAQs</h1>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is the time commitment needed to be a mentor?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                Mentors are paired with a mentee based on their schedule and are
                required to meet with their mentee at least biweekly for an hour
                over the course of 1 year.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How will a mentee get matched to the right mentor?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                Each mentee and mentor meets with the founder in order to gain a
                thorough understanding of their profiles and where help is
                needed. Each pairing is made based off compatibility and
                interests to ensure the mentee is getting the right support &
                resources from the right person.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What is the internship program like?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                Each intern designs their own experience by deciding what
                project they will work on and what skills they will employ.
                Interns may choose to continue with the team after a successful
                completion of their intern term. All interns work very closely
                with the founder for their projects and have lots of autonomy to
                create and deliver.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How does mentorship benefit young students?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                We encourage students to succeed in school. “A vast majority of
                educators — 95 % — say every student can benefit from having a
                one-on-one mentor, according to a recent survey of 1,418 grade
                4-12 teachers from nonprofit Gradient Learning. Additionally,
                82% said mentoring improves academic outcomes, and 83% said it
                helps students learn skills that support success” - K12Dive
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How does mentorship benefit young professionals?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                We give students the confidence to achieve in their careers.
                “Cornell University’s School of Industrial and Labor Relations
                found that mentoring programs boosted minority representation at
                the management level by 9% to 24% (compared to -2% to 18% with
                other diversity initiatives). The same study found that
                mentoring programs also dramatically improved promotion and
                retention rates for minorities and women—15% to 38% as compared
                to non-mentored employees.” - Mentor Resources
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Will there be in-person mentoring?
              </AccordionTrigger>
              <AccordionContent className="text-pmpurple">
                Currently we operate solely online.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
