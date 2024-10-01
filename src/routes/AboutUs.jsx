import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import homepage from "@/assets/homepage.jpg";
import happyStudent from "@/assets/happy-student.jpg";
import founderHeadshot from "@/assets/FounderHeadshot.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
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

  const fadeInAnimationVariants2 = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <PageLayout className="flex flex-col h-screen snap-y snap-mandatory">
      {/* PAGE 1: WELCOME */}
      <section className="flex items-center justify-center h-screen snap-start">
        <div className="flex flex-col items-center justify-center lg:items-start h-screen text-white md:shrink-0 w-full">
          <img className="h-full w-full object-cover" src={homepage} />
          <div className="flex flex-col absolute lg:w-2/5 gap-3">
            <div className="w-full h-0.5">
              <div className="w-full h-1.5 hidden md:block bg-gradient-to-r from-transparent from-0.1% via-pmpurple via-5% to-transparent"></div>
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
                At Pure Mentorship, we connect you with experienced mentors for
                personalized support - free of charge!
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/JoinUs">
                <Button
                  onClick={handleClick}
                  className="bg-white text-pmpurple lg:mx-14 lg:mr-0 hover:bg-gray-400"
                >
                  Join Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ARE WE */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants}
            className="grid justify-items-center lg:flex lg:flex-row pb-20 w-full
          justify-center items-center gap-20"
          >
            <img
              alt="Image"
              className="mx-auto aspect-square w-full max-w-max overflow-hidden rounded-xl object-cover"
              height={550}
              src={happyStudent}
              width={550}
            />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants2}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                WHO ARE WE?
              </h2>
              <h3 className="text-2xl font-bold tracking-tighter">
                Pure Mentorship is a platform created by students, for students.
              </h3>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Pure Mentorship is a free-of-charge program that connects
                mentees with successful and well-rounded mentors. Through 1-on-1
                meetings and SMART goal-setting, mentors support their students
                in their academic, professional, and social lives and identify
                ares for improvement.
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our mentors are college students, graduate students, and recent
                grads who have gone through the same struggles and are perfectly
                able to relate to mentees. We are passionate about helping
                students reach their fullest potential and strive to provide
                them with the support, guidance, and resources they need to
                succeed academically and professionally.
              </p>
              <div className="flex gap-2">
                <Link to="/JoinUs">
                  <Button onClick={handleClick}>Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET THE FOUNDER  */}
      <div className="flex w-full min-h-[100dvh] items-center justify-center bg-gradient-to-r from-white to-[#ff0000]/25 dark:from-gray-950 dark:to-[#ff0000]/25">
        <div className="container mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 md:flex-row md:gap-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants2}
            className="flex flex-col items-start pb-9 md:pb-0 text-md md:text-lg w-full max-w-max gap-4"
          >
            <h1 className="text-4xl font-bold text-pmpurple tracking-tight md:text-5xl lg:text-6xl">
              Meet the founder
            </h1>
            <h3>Diane Senthil</h3>
            <p className="max-w-md text-gray-500 dark:text-gray-400">
              "Hello! My name is Diane and I am a nationally-recognized leader
              and the founder of Pure Mentorship! I strongly believe in the
              potential of each individual and know that support from a mentor
              at a young age can propel them toward a lifetime of success.”
            </p>
            <div className="flex gap-2">
              <a
                target="_blank"
                href="https://dianeportfolio01.wixsite.com/portfolio"
                className="border border-zinc-300 px-3 py-2 rounded-xl bg-zinc-300"
              >
                ABOUT DIANE➡
              </a>
            </div>
          </motion.div>
          <motion.img
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants}
            alt="Hero Image"
            className="aspect-square flex-auto w-11/12 max-w-max overflow-hidden rounded-xl object-cover"
            height={550}
            src={founderHeadshot}
            width={550}
          />
        </div>
      </div>
      {/* <footer className="bg-gray-100 py-2 px-4 dark:bg-gray-800">
        <div className="container mx-auto flex justify-end">
          <div className="flex gap-2">
            <Link to="/">
              <Button onClick={handleClick}>Home</Button>
            </Link>
            <Button variant="link" to="/">
              Our Team
            </Button>
          </div>
        </div>
      </footer> */}
    </PageLayout>
  );
}
