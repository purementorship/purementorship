import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Team = () => {
  const mentors = [
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },

    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
    {
      name: "Bob Jones",
      picture: "",
      school: "Harvard",
      major: "Computer Science",
    },
  ];
  return (
    <PageLayout>
      <section className="bg-pmorange h-1/4 flex justify-center items-center">
        <div className="text-white p-10 w-3/4 space-y-9">
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

          <Button className="font-light bg-white text-pmpurple hover:bg-gray-200">
            Apply Today!
          </Button>
        </div>
      </section>
      <section>
        <div className="c">
          {mentors.map((mentor, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{mentor.picture}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardTitle>{mentor.name}</CardTitle>
                <CardDescription>{mentor.school}</CardDescription>
                <CardDescription>{mentor.major}</CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
