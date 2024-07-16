import PageLayout from "@/components/PageLayout";
import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function BlogAllExpand() {
  const location = useLocation();

  // Scroll to the desired div based on the hash fragment
  React.useEffect(() => {
    const targetElement = document.getElementById(location.hash.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="space-y-8">
          <div className="grid gap-8">
            <article id="post-1" className="grid gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div>Pure Mentorship</div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div>Aug 9, 2023</div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                In Appreciation of Our Student Leaders
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Now as there is a week left before our Summer Student Leaders
                Cohort leave the Pure Mentorship Program, we would like to
                announce our appreciation for their contributions and hard work
                to our organizations goals. We have interviewed Raman Setty,
                Ananya Nayak, Advi Wehzan, Aryahvishwa Babu and Akhilesh
                Devamadhavan for their thoughts regarding the time they have
                spent here.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                The main task of Student Leaders is to organize and perform
                outreach events that will encourage other mentees and mentors to
                join our organizations. For many of our Student Leaders,
                according to the interviews we’ve conducted with them, this was
                the task that has given them the most memorable experience of
                taking responsibility for the organization of an event,
                collaborating with their fellow student leaders and interns,
                meeting and networking with completely new people. Not only has
                this event proven to bring new additions to PM, but also give
                valuable connections to our Student Leaders.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Raman Setty, with his aspirations to do business in the future
                leaning towards marketing and finance, has focused on
                advertisement of projects that will attract more people to Pure
                Mentorship. In his words, “Pure Mentorship is a place where you,
                at a young age, get the chance to expand your communication
                skills and have hands-on experience in business management as
                you get involved in the process of how a non-profit organization
                runs.”
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Ananya Nayak, involved in social media and digital marketing in
                Pure Mentorship constructs videos for our website. In the future
                she looks forward to study both psychology and marketing, a
                combination of fields that is certain to prove formidable.
                Originally, she had joined Pure Mentorship as a mentee before
                taking on the role as one of our Student Leaders. In her words,
                “Public relations and marketing can be super helpful no matter
                what field you’re going into and these are the valuable
                experiences Pure Mentorship has to offer.”
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Advi Wehzan, who has helped Pure Mentorship in operations via
                collaborating with our IT team, and has plans to focus on
                Computer Science in his future. He joined Pure Mentorship to get
                practical experience regarding the real world and has helped
                with Outreach since. He expressed his admiration for how Pure
                Mentorship has managed to progress as a non-profit organization
                in the four weeks he has joined. In his words, “There are a lot
                of things in these world that you hadn’t had the chance to try,
                if you have career aspirations, Pure Mentorship is able to
                uniquely offer that for free.”
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Aryahvishwa Babu, aspiring to gain a Bachelor’s Degree in
                Computer Science in the future, is responsible for the
                modifications to the current website that we have and has shown
                remarkable usage of both technology and communication platforms
                to fulfill his responsibilities. In the future he will be in
                charge of the development and creation of Pure Mentorship’s new
                website. He expressed his excitement at being able to see the
                results of his own efforts in the time he has spent here. In his
                words, “I would recommend Pure Mentorship for how it connects
                you to experienced Mentors that can provide guidance and
                support, and how the process of joining the program is both
                simple and free. The given timeline is 3 months and you’re able
                to either extend or drop off sooner.”
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Akhilesh Devamadhavan, in charge of the expansion of Pure
                Mentorship by helping in organization, operations and the IT
                team has plans that involve engineering and computer science for
                his future, and apply to more positions at Pure Mentorship,
                taking on larger roles such as Management to further help our
                organization. During the time he spent in Pure Mentorship, he’s
                had the chance to learn how people work together in a
                professional sense. In his words, “Without Pure Mentorship, it
                would be hard for for people to grow and become the best
                possible version they want to be.”
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Our mentorship program aims towards ensuring that opportunities
                will be available and free for the underprivileged, by providing
                connections and practical experiences through our Mentors.
              </p>
            </article>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <article id="post-2" className="grid gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div>Pure Mentorship</div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div>April 15, 2023</div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Introducing "Intern Letters" from Pure Mentorship's Current
                Interns!
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                At Pure Mentorship, we believe in the power of sharing
                experiences and inspiring one another. That's why we're thrilled
                to present "Intern Letters" – a collection of short messages
                written by our current interns, sharing their enthusiasm and
                detailing their incredible projects here at Pure Mentorship.
              </p>
              <h1 className="text-gray-500 dark:text-gray-400">
                These letters offer an inside look into the meaningful work our
                interns are engaged in, showcasing their dedication, growth, and
                impact.
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                As we eagerly anticipate the arrival of our new cohort of
                interns this summer, these letters provide invaluable insights
                and inspiration for incoming and future interns. They capture
                the essence of our supportive community, collaborative projects,
                and the transformative journey that awaits each and every one of
                you.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                So, get ready to embark on an unforgettable experience! Our
                current interns are eagerly waiting to share their stories and
                guide you on this incredible adventure.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Stay tuned for the upcoming release of "Intern Letters"! We
                can't wait to witness the torch of passion being passed from one
                intern to another, igniting the sparks of ambition and growth
                within our Pure Mentorship team.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Join us this summer and be a part of something extraordinary.
                The Pure Mentorship internship awaits, ready to shape futures
                and empower young minds.
              </p>
            </article>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <article id="post-3" className="grid gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div>Pure Mentorship</div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div>Dec 23, 2022</div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Creative Booms Ongoing
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                One of our first goals is to decide on our brand, logo, and
                website design. Here is a sneak peek of Vienna using Adobe
                InDesign and other graphic design tools to establish Pure
                Mentorship with engaging colors and a dynamic design.
              </p>
            </article>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <article id="post-4" className="grid gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div>Pure Mentorship</div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
                <div>Jul 17, 2023</div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                Our New Framework
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Pure Mentorship focuses on making sure that we improve and help
                students find the mentor that they need.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Mentorship can look different for everyone–in many cases, it can
                be extremely beneficial for many people. Yet, finding the
                correct mentor can be extremely difficult for students. Pure
                Mentorship wants to ease the gap and connect students to a
                mentor that fits their needs.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                One major change that Pure Mentorship is making in order to make
                mentorship more accessible is their choice in framework or not.{" "}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Instead of having one way to have meetings and goal setting, we
                are leaving it up to the mentee to choose whether or not they
                want to use the current framework.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                The current framework, commonly known as the IGP (Individual
                Growth Plan), is a great way for mentees who want more
                structure. The IGP focuses on creating SMART goals in order to
                encourage growth in the following areas: academic, personal, and
                professional. Both mentors and mentees can use the IGP framework
                and set these SMART goals as a way to structure growth.{" "}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                SMART goals focus on creating attainable goals in a timely
                manner. The different aspects of SMART stand for: Specific,
                Meansurable, Achievable, Relevant, and Time Bound. For mentees
                who don’t want to use the IGP, they are welcome to talk to
                Thenu, our founder, about what they want from their mentors.{" "}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                What type of framework are you interested in? Let us know
                @PureMentorship on Instagram and LinkedIn!
              </p>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
