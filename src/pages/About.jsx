import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Footer from "../component/Footer";

const About = () => {

  const [cart, setCart] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="font-source">
      <CommonNavbar cnt={cart.length} />
      <div className="bg-common min-h-[50vh]"></div>
      <div className="bg-[#808080] text-white py-3 text-center">
        <Link to={"/"}>Home</Link> /{" "}
        <span className="font-semibold">About Us</span>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 text-gray-500">
        <p className="text-base">
          “Knowing others is intelligence, knowing yourself is true wisdom”
        </p>

        <p className="pt-4 text-base">
          A personality is not something that is rigid, with set boundaries
          defined during your birth. It is a flexible, malleable material that
          can be shaped as you want. All it needs is a certain amount of energy
          and focus to transform yourself into a better you. All these
          characteristics are not something that everyone receives right at
          their birth but rather it is acquired and built up throughout their
          lifetime. The personality and characteristics of anyone who is
          influential have certain key similarities. All such personality traits
          have to be managed by people to get the best out of their personality
          characteristics.
        </p>

        <p className="pt-4 text-base">
          <span className="font-bold">Thorough Training-</span> The Personality
          Development Training at TPRP inculcates students with self-confidence
          and motivation, speaking skills, voice and accent training, time
          management techniques and body language based expressions. We have a
          thorough Course that provides students with new vigor and looks at
          life’s problems with a different and rather more positive perspective.
          The Personality Development program for students at TPRP surely helps
          them change into very optimistic and extroverted personalities. All
          the training is conducted with the most optimum methodology and every
          student gets a chance to come up, speak in public and perform or
          present their skills to the attendants. The students learn to protect
          themselves in all situations and make a lasting impression on the
          crowds.
        </p>

        <p className="pt-4 text-base">
          <span className="font-bold">Personalized Methodology-</span> TPRP
          believes in providing attention to individual students. With this goal
          in mind, we have the best-personalized Training program for
          Personality Development in Bangalore. We have a small number of
          batches and every trainer is instructed to look after every student by
          having personal one-on-one interviews and routine tests and projects
          to ensure progress. Because we give personalized attention, we are
          better able to understand individual problems and that keeps these
          students behind or holds them down in reality. Once we are able to
          understand individual problems, we try to tackle them with utmost
          precision. This is very important trait of TPRP training for perfect
          personality traits.
        </p>

        <p className="pt-4 text-base">
          <span className="font-bold">Experience-</span> The experience as an
          institute and also of our trainers is hugely impactful, and students
          admire our experience handling and charting the syllabus. These
          factors can surely help mitigate your inner problems and make you
          shine in the world. Such a surge of knowledge and experience will
          definitely make every one of you wise, confident and good enough to
          achieve what you wish.
        </p>
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

      <div className="py-16">
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
      </div>

      <Footer />
    </div>
  );
};

export default About;
