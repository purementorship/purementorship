import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import aadityPicture from "@/assets/mentors/aadity.png";
import anishaPicture from "@/assets/mentors/anisha.png";
import estherPicture from "@/assets/mentors/esther.png";
import harunaPicture from "@/assets/mentors/haruna.png";
import josephPicture from "@/assets/mentors/joseph.png";
import leoPicture from "@/assets/mentors/leo.png";
import marcosPicture from "@/assets/mentors/marcos.png";
import michaelPicture from "@/assets/mentors/michael.png";
import riddhiPicture from "@/assets/mentors/riddhi.png";
import rominaPicture from "@/assets/mentors/romina.png";
import thenuPicture from "@/assets/mentors/thenu.png";

const Team = () => {
  const mentors = [
    {
      name: "Aadity J.",
      picture: aadityPicture,
      school: "University of Maryland",
      domain: "Data Analytics, Information Systems, Aerospace",
    },
    {
      name: "Anisha K.",
      picture: anishaPicture,
      school: "Duke University",
      domain: "Engineering Management, Marketing",
    },
    {
      name: "Esther C.",
      picture: estherPicture,
      school: "Calflin University",
      domain: "Software Engineering, AI/Machine Learning",
    },
    {
      name: "Haruna O.",
      picture: harunaPicture,
      school: "Software Engineer",
      domain: "Software Engineering, AI/Machine Learning",
    },
    {
      name: "Joseph B.",
      picture: josephPicture,
      school: "San Jose State University",
      domain: "Data Analytics, Information Systems, Aerospace",
    },
    {
      name: "Leo S.",
      picture: leoPicture,
      school: "Virginia Tech",
      domain: "Data Analytics, Information Systems, Aerospace",
    },
    {
      name: "Marcos V.",
      picture: marcosPicture,
      school: "San Jose State University",
      domain: "Data Analytics, Information Systems, Aerospace",
    },
    {
      name: "Michael S.",
      picture: michaelPicture,
      school: "San Jose State University",
      domain: "Software Engineering, AI/Machine Learning",
    },
    {
      name: "Riddhi K.",
      picture: riddhiPicture,
      school: "University of Nevada",
      domain: "Engineering Management, Marketing",
    },
    {
      name: "Romina T.",
      picture: rominaPicture,
      school: "Carnegie Mellon University",
      domain: "Data Analytics, Information Systems, Aerospace",
    },
    {
      name: "Thenu S.",
      picture: thenuPicture,
      school: "San Jose State University",
      domain: "Engineering Management, Marketing",
    },
  ];

  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <PageLayout className="flex flex-col">
      <section className="bg-pmorange flex justify-center items-center py-20">
        <div className="flex flex-col text-white p-6 md:p-10 w-full md:w-3/4 gap-6 md:gap-3">
          <h1 className="text-4xl font-bold">Mentors</h1>
          <p className="font-light">
            Meet our mentors! Mentors play a crucial role in helping individuals
            achieve their personal and professional goals. That's why we are
            proud to introduce our hand-picked group of mentors, who have been
            chosen for their grit, compassion, achievements, and—most
            importantly—their intention to give back.
          </p>
          <p>
            We have organized our mentors alphabetically below. We encourage you
            to click on each mentor's LinkedIn profile to learn more about their
            backgrounds and qualifications. We will help guide you through the
            process of selecting the mentor that best suits your personality and
            interests. With our mentors' guidance, you can achieve your goals
            and reach your full potential in the tech industry.
          </p>
          <p>
            Interested in becoming a mentor at Pure Mentorship? Click the button
            below to be redirected to the latest version of our application:
          </p>
          <Button className="font-light bg-white text-pmpurple hover:bg-gray-200 w-40">
            Apply Today!
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6 md:p-10 w-full md:w-3/4">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i}
            >
              <Card className="hover:shadow-lg">
                <CardHeader>
                  <div className="w-full h-full overflow-hidden rounded-t-lg">
                    <img
                      src={mentor.picture}
                      className="w-full h-full object-cover object-bottom"
                      alt={`${mentor.name}'s picture`}
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg font-semibold">
                    {mentor.name}
                  </CardTitle>
                  <CardDescription>
                    <p className="text-sm text-gray-600">{mentor.school}</p>
                    <p className="text-sm text-gray-600">{mentor.domain}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
