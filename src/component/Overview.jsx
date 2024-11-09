import React from "react";
import {
  InformationCircleIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Overview = () => {
  return (
    <div className="font-source py-10">
      <h4 className="uppercase text-center text-lg">
        a world full of possibilities
      </h4>
      <h2 className="text-center text-2xl">Allowing You To Expand Quickly.</h2>

      <div className="flex lg:flex-row flex-col max-w-screen-xl mx-auto gap-8 my-20">
        <div className="max-w-screen-sm border-r-4 mx-auto px-3">
          <InformationCircleIcon class="h-12 w-12 text-[#0D2865]" />

          <h3 className="uppercase text-[#41D8D1] font-semibold text-xl pt-5">
            why choose us
          </h3>

          <p className="">
            Learn from seasoned professionals who specialize in personality
            development. Choose from online courses, workshops, and personalized
            coaching. Explore a wide range of topics, from self-confidence to
            effective communication. Get started with our foundational courses
            at no cost.
          </p>
        </div>

        <div className="max-w-screen-sm border-r-4 mx-auto px-3">
          <GlobeAltIcon class="h-12 w-12 text-[#0D2865]" />

          <h3 className="uppercase text-[#41D8D1] font-semibold text-xl pt-5">
            what we do
          </h3>

          <p className="">
            Our mission is to provide comprehensive personality development
            courses that empower you to thrive personally and
            professionally.Whether you’re a student, a working professional, or
            someone seeking personal growth, TPRP is your partner in
            transformation. Join us on this journey of self-discovery and
            empowerment!
          </p>
        </div>

        <div className="max-w-screen-sm mx-auto px-3">
          <UserGroupIcon class="h-12 w-12 text-[#0D2865]" />

          <h3 className="uppercase text-[#41D8D1] font-semibold text-xl pt-5">
            explore yourself
          </h3>

          <p className="">
            Through guided introspection, mindfulness practices, and interactive
            workshops, you’ll gain valuable insights into your strengths,
            values, and areas for improvement. Discover the unique tapestry of
            your personality and embark on a transformative journey toward
            self-awareness and fulfillment.
          </p>
        </div>
      </div>

      <div className="bg-[#808080] py-16">
        <h5 className="text-center text-white text-lg uppercase">
          Empower Your Journey
        </h5>
        <h3 className="text-center text-xl">
          Where Limitless Learning Fuels Your Success!
        </h3>

        <div className="pt-16 flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-10 px-4">
          <div className="max-w-screen-sm">
            <h2 className="text-white font-semibold text-2xl">
              Unlock Your Potential: Embark on a Transformative Journey with
              Seasoned Educators
            </h2>
            <h4 className="text-white text-base pt-3">
              Under the mentorship of seasoned educators, embark on a
              transformative journey towards personal growth and development.
              Their wealth of experience will guide you to surpass your limits
              and reach unprecedented heights in your quest for
              self-improvement.
            </h4>
          </div>

          <div className="max-w-screen-sm">
            <h2 className="text-white font-semibold text-2xl">
              Unlock Your Achievements: Attain Globally Recognized Credentials
            </h2>
            <h4 className="text-white text-base pt-3">
              Open doors to endless opportunities by attaining globally
              recognized credentials. Our platform offers a pathway for you to
              unlock your achievements and showcase your expertise on a global
              scale.
            </h4>
          </div>
        </div>

        <div className="pt-12 flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-10 px-4">
          <div className="max-w-screen-sm">
            <h2 className="text-white font-semibold text-2xl">
              Expand Your Mind: Dive into Our Personality Development Book
              Library
            </h2>
            <h4 className="text-white text-base pt-3">
              Dive into our extensive personality development book library and
              embark on a journey of self-discovery and growth. With a diverse
              collection of resources at your fingertips, you'll find
              inspiration, guidance, and practical insights to enhance every
              aspect of your life.
            </h4>
          </div>

          <div className="max-w-screen-sm">
            <h2 className="text-white font-semibold text-2xl">
              Unleash Your Potential: Access Unlimited Growth through Virtual
              Learning
            </h2>
            <h4 className="text-white text-base pt-3">
              Explore a wealth of knowledge from anywhere with our comprehensive
              virtual learning opportunities, seamlessly connecting you to a
              world-class education experience.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
