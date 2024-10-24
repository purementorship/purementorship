import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageLayout from "@/components/PageLayout";
import { Search } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Handshake } from "lucide-react";

const Program = () => {
  return (
    <PageLayout className="bg-gray-100">
      <h1 className="text-center py-6 px-12 lg:text-3xl font-bold text-pmpurple">
        We are currently revamping our program model to ensure we create better
        and more rewarding mentorship matches!
      </h1>
      <VerticalTimeline>
        <div id="timeline-element-and-icon" className="flex items-end">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<Search />}
            iconStyle={{
              background: "#C197B0",
              color: "#fff",
            }}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-pmpurple">
              The Journey Begins: The Discovery Meeting
            </h3>
            <p>
              Welcome to Pure Mentorship! Your first step is to fill out our
              onboarding form. We'll then invite you to a Discovery Meeting to
              introduce you to the program and work on your Individual Growth
              Plan (IGP). This plan will help us understand your goals and
              aspirations, ensuring we tailor your experience to fit your needs.
            </p>
          </VerticalTimelineElement>
        </div>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={<UserCheck />}
          iconStyle={{
            background: "#C197B0",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-pmpurple">
            Getting Matched
          </h3>
          <p>
            We carefully review your IGP to match you with the right mentor.
            Once we've found a good fit, you'll be notified and can check their
            profile on our "Mentors" page. Your input is important, and we
            address all concerns about your mentorship process.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={<Handshake />}
          iconStyle={{
            background: "#C197B0",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-pmpurple">
            First M&M Meeting
          </h3>
          <p>
            In your first meeting with your mentor, you'll get to know each
            other and discuss your IGP. This helps your mentor understand your
            goals and how to support you. Your mentor and all of us at Pure
            Mentorship are here to support you every step of the way!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </PageLayout>
  );
};

export default Program;
