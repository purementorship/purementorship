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
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={<Search />}
          iconStyle={{
            background: "#C197B0",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title text-3xl font-bold text-pmpurple">
            The Journey Begins: The Discovery Meeting
          </h3>
          <p>
            Welcome to the mentorship program! We are excited to embark on this
            growth journey with you. To get started, simply fill out the
            onboarding form, and we'll invite you to a special "Discovery
            Meeting." During this meeting, we'll introduce you to the program
            and work together to develop your Individual Growth Plan (IGP). Your
            IGP is an essential tool that helps us understand your aspirations
            and "SMART" goals. It's a collaborative process, allowing us to
            tailor the mentorship experience to your unique needs. By sharing
            your dreams and passions, we can make sure you get the most out of
            this mentoring adventure.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          icon={<UserCheck />}
          iconStyle={{
            background: "#C197B0",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title text-3xl font-bold text-pmpurple">
            Finding the Perfect Match: Exploring Potential Mentors
          </h3>
          <p>
            At Pure Mentorship, we take great care in finding the right mentor
            for you. We'll carefully consider all the details in your IGP to
            make the perfect match. Once we've found your ideal mentor, we'll
            inform you, and you can also explore their profile on our website's
            "Mentors" page. We value your input throughout the matching process,
            and your feelings matter to us. If you have any questions or
            concerns, we're here to listen and support you.
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
          <h3 className="vertical-timeline-element-title text-3xl font-bold text-pmpurple">
            Building the Connection: The First M&M Meeting
          </h3>
          <p>
            Now comes the exciting part - your first M&M (Meet & Match) meeting!
            This meeting is an opportunity for you and your mentor to get to
            know each other. Feel free to be yourself and express your thoughts
            and ambitions. We believe in the power of authentic connections.
            During this meeting, your IGP will serve as a guide for the
            discussion. Your mentor will gain valuable insights into your goals
            and aspirations, helping them provide the best support and guidance.
            Together, you'll explore ways to achieve your objectives. Remember,
            the decision to move forward with your mentor is entirely up to you.
            We want you to feel 100% comfortable with your mentor choice. If you
            feel a strong connection, you can signify this by both signing off
            on the "Time Commitment" section of your IGP. Throughout this
            mentorship journey, we're here to cheer you on and provide guidance
            whenever you need it. We believe in your potential and are committed
            to helping you grow and flourish. Let's make this mentorship
            experience a transformative and empowering one together!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </PageLayout>
  );
};

export default Program;
