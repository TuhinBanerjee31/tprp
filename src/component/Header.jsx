import React from "react";

const Header = () => {
  return (
    <div className="font-source">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-[35rem] overflow-hidden">
          {/* <!-- Item 1 --> */}
          <div
            className="hidden duration-700 ease-in-out bg-slide1 bg-cover bg-no-repeat"
            data-carousel-item
          >
            <div className="flex flex-col items-center justify-center absolute top-[30%] mx-auto left-0 right-0">
              <h1 className="text-center text-white text-6xl font-semibold tracking-wider">
                Elevate Your Skills with TPRP
              </h1>
              <div className="flex w-full mx-auto justify-center py-4 items-center gap-5">
                <div className="border-t-2 w-[20%]"></div>
                <h5 className="text-center text-white text-2xl">
                  Learn Anywhere, Anytime!
                </h5>
                <div className="border-t-2 w-[20%]"></div>
              </div>
            </div>
            {/* <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
          </div>
          {/* <!-- Item 2 --> */}
          <div
            className="hidden duration-700 ease-in-out bg-slide2"
            data-carousel-item
          >
            <div className="flex flex-col items-center justify-center absolute top-[30%] mx-auto left-0 right-0">
              <h1 className="text-center text-white text-6xl font-semibold tracking-wider">
                Discover Your Passion
              </h1>
              <div className="flex w-full mx-auto justify-center py-4 items-center gap-5">
                <div className="border-t-2 w-[20%]"></div>
                <h5 className="text-center text-white text-2xl">
                  TPRP's Online Courses Await You!
                </h5>
                <div className="border-t-2 w-[20%]"></div>
              </div>
            </div>
            {/* <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
          </div>
          {/* <!-- Item 3 --> */}
          <div
            className="hidden duration-700 ease-in-out bg-slide3"
            data-carousel-item
          >
            <div className="flex flex-col items-center justify-center absolute top-[30%] mx-auto left-0 right-0">
              <h1 className="text-center text-white text-6xl font-semibold tracking-wider">
                Your Gateway to Success
              </h1>
              <div className="flex w-full mx-auto justify-center py-4 items-center gap-5">
                <div className="border-t-2 w-[20%]"></div>
                <h5 className="text-center text-white text-2xl">
                  Begin Your Journey with TPRP
                </h5>
                <div className="border-t-2 w-[20%]"></div>
              </div>
            </div>
            {/* <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
