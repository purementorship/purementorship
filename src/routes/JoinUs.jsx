import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const JoinUs = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <PageLayout>
      <section className="flex items-center justify-center h-screen snap-start">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true}}
          variants={fadeInAnimationVariants}
          className="container px-4"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pmpurple">
                  Start your Journey Today!
                </h1>
                <p className="text-gray-500">
                  Get paired with an mentor who will provide personalized
                  support for your personal, professional, and academic needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:w-full">
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfym5tgZH7j4iTAAVOubmFxLlMSapJl9n6eCosomnXyzUnqfw/viewform"
                  target="_blank"
                  className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md bg-pmpurple px-4 sm:px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-pmpurplelight focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Become a Mentee
                </Link>
                <Link
                  to="/AboutUs"
                  className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md border border-gray-200 bg-white px-4 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src={logo}
              width="200"
              height="350"
              alt="Hero"
              className="mx-auto h-full max-h-[350px] max-w-full rounded-xl object-contain sm:w-full lg:order-last"
            />
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
};
export default JoinUs;
