import React from "react";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* banner image */}
          <div>
            <img src={banner} alt="" className="lg:h-[386px]" />
          </div>
          {/* banner content */}
          <div className="md:w-3/5">
            <h2 className="">Develop your skills without diligence</h2>
            <p>
              A good example of a paragraph contains a topic sentence, details
              and a conclusion. There are many different kinds of animals that
              live in China.
            </p>
            <div>
              <button>Get Started</button>
              <button>Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
