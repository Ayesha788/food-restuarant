import Image from "next/image";
import Header from "./components/header";
import { Span } from "next/dist/trace";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div className="bg-black w-[1920px]">
        <Header></Header>
        <div className="flex">
          <div className=" ml-[300px]">
            <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10 mt-[200px]">
              Its Quick & Amusing!
            </h2>
            <h2 className="text-white text-[60px] leading-[68px] font-bold ">
              <span className="text-[#FF9F0D] ">T</span>he Art of speed <br />
              food Quality
            </h2>
            <p className="text-white text-base font-normal leading-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue{" "}
            </p>
            <button className="bg-[#FF9F0D] h-[60px] w-[190px] mt-[40px] rounded-[30px] ">
              <span className="text-white">See Menu</span>
            </button>
          </div>

          <img
            src="/food.png"
            alt=""
            className=" h-[670px] w-[877.8px] mt-[40px]"
          />
        </div>

        <div className="h-[650px] w-[1920px] bg-black flex">
          <div className=" ml-[300px] w-[562px] h-562px]">
            <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10  ">
              About us
            </h2>
            <h2 className="text-white text-[48px] leading-[56px] font-bold ">
              <span className="text-[#FF9F0D] ">We</span> Create the best <br />
              foody product
            </h2>
            <p className="text-white text-base font-normal leading-6 mt-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.{" "}
            </p>
            <ul className="text-white text-base font-normal leading-10">
              <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
              <li>
                {" "}
                Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <button className="bg-[#FF9F0D] h-[60px] w-[190px] mt-[35px] rounded-[30px] ">
              <span className="text-white">Read More</span>
            </button>
          </div>
          <div>
            <img src="/egg.png" alt="" className="w-[600px] h-[330px]" />
            <div className="flex">
              <img
                src="/left-sandwich.png"
                alt=""
                className="w-[322px] h-[194px]"
              />
              <img
                src="/right-sandwich.png"
                alt=""
                className="w-[322px] h-[194px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[550px] w-[1920px] bg-black">
          <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10  text-center ">
            Food Category
          </h2>
          <h2 className="text-white text-[48px] leading-[56px] font-bold text-center ">
            <span className="text-[#FF9F0D] ">Ch</span>oose Food Iteams
          </h2>
          <div className="h-[329px] w-[1320px] flex gap-5 justify-center items-center ml-[300px]">
            <img src="/burger.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/chat.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/sweet.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/donut.png" alt="" className="h-[329px] w-[306px] " />
          </div>
        </div>
        {/*five foods*/}

        <div className="bg-black ml-[300px] flex ">
          <div className="flex">
            <div>
              <img src="/shawarma.png" alt="" className="h-[362px] w-[356px]" />
            </div>
            <div className="flex">
              <img src="/wings.png" alt="" className="h-[306px] w-[244px]" />
              <img src="/burger2.png" alt="" className="h-[226px] w-[221px]" />
              <div>
                <img src="/chips.png" alt="" className="h-[168px] w-[161px]" />
              </div>
            </div>
          </div>

          <div>
            <div className="ml-[300px]">
              <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10  ">
                Why Choose Us
              </h2>
              <h2 className="text-white text-[48px] leading-[56px] font-bold ">
                <span className="text-[#FF9F0D] ">Ex</span>tra ordinary taste{" "}
                <br />
                And Experienced
              </h2>
              <p className="text-white text-base font-normal leading-6 mt-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[469px] w-[1920px]  flex justify-center items-center mx-[150px]">
          <div className="h-[247px] w-[1319px]  flex-col justify-center items-center  ">
            <img src="/chef.png" alt="" className="h-[120px] w-[120px] " />
            <h2 className="text-white font-bold text-2xl">
              Professional chefs
            </h2>
            <h2 className="text-white font-bold text-2xl">420</h2>
          </div>

          <div className="h-[147px] w-[1319px]  flex-col justify-center items-center   ">
            <img
              src="/burgerandjuice.png"
              alt=""
              className="h-[120px] w-[120px] "
            />
            <h2 className="text-white font-bold text-2xl">Items of food</h2>
            <h2 className="text-white font-bold text-2xl">320</h2>
          </div>

          <div className="h-[247px] w-[1319px]  flex-col justify-center items-center m-10  ">
            <img src="/vector.png" alt="" className="h-[120px] w-[120px] " />
            <h2 className="text-white font-bold text-2xl">
              Years Of Experienced
            </h2>
            <h2 className="text-white font-bold text-2xl">30+</h2>
          </div>

          <div className="h-[247px] w-[1319px]  flex-col justify-center items-center m-10  ">
            <img src="/pizza.png" alt="" className="h-[120px] w-[120px] " />
            <h2 className="text-white font-bold text-2xl">Happy customers</h2>
            <h2 className="text-white font-bold text-2xl">220</h2>
          </div>
        </div>

        {/*chef*/}
        <div className="h-[657px] w-[1764px] mt-40">
          <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10  text-center ">
            Chef
          </h2>
          <h2 className="text-white text-[48px] leading-[56px] font-bold text-center">
            <span className="text-[#FF9F0D] ">Me</span>et our chef
          </h2>

          <div className=" flex gap-5 justify-center items-center ml-40">
            <img src="/card 1.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/card 2.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/card 3.png" alt="" className="h-[329px] w-[306px] " />
            <img src="/card 4.png" alt="" className="h-[329px] w-[306px] " />
          </div>
          <button className="border-[#FF9F0D] mx-[840px] border-[1px] h-[60px] w-[190px] mt-[40px] rounded-[30px]">
            <span className="text-white">See More</span>
          </button>
        </div>

        {/*Banner*/}
        <div className="h-[558px] w-[1918px] bg-[url('/bgimg.png')] bg-cover bg-center bg-opacity-0 ">
          <div className="float-right">
            <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10 mt-[200px]">
              Restuarant Active Process
            </h2>
            <h2 className="text-white text-[60px] leading-[68px] font-bold">
              <span className="text-[#FF9F0D] ">We</span> Document Every Food
              <br />
              Bean Process untile it is saved
            </h2>
            <p className="text-white text-base font-normal leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <button className="border-[#FF9F0D] border-[1px] h-[60px] w-[190px] mt-[40px] rounded-[30px]">
              <span className="text-white">Read More</span>
            </button>
          </div>
        </div>

        {/*blogs*/}
        <div>
          <h2 className="text-[#FF9F0D]  text-[32px]  font-normal leading-10  text-center">
            Blog Post
          </h2>
          <h2 className="text-white text-[48px] leading-[56px] font-bold text-center">
            <span className="text-[#FF9F0D] ">La</span>test News & Blog
          </h2>
          <div className="h-[732px] w-[1320px] ml-[300px] mt-20 flex gap-5">
            <div className="w-[424px] h-[569px]  border-white border-[1px]">
              <img src="/burger.png" alt="" className="w-[423px] h-[349px]" />
              <h3 className="text-[#FF9F0D] text-base font-normal leading-6">
                {" "}
                10 February 2022
              </h3>
              <p className="text-white text-2xl font-normal leading-8 text-bold mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Varius sed
              </p>
              <div className="flex justify-between mt-7">
                <p className="text-white text-base font-normal leading-6">
                  {" "}
                  Learn More
                </p>
                <ul className=" flex mr-5 gap-3">
                  <li>
                    <img src="/ChatDots.png" alt="" />
                  </li>
                  <li>
                    <img src="/ThumbsUp.png" alt="" />
                  </li>
                  <li>
                    <img src="/ShareNetwork.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[424px] h-[569px]  border-white border-[1px]">
              <img src="/bigpizza.png" alt="" className="w-[423px] h-[349px]" />
              <h3 className="text-[#FF9F0D] text-base font-normal leading-6">
                {" "}
                10 February 2022
              </h3>
              <p className="text-white text-2xl font-normal leading-8 text-bold mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Varius sed
              </p>
              <div className="flex justify-between mt-7">
                <p className="text-white text-base font-normal leading-6">
                  {" "}
                  Learn More
                </p>
                <ul className=" flex mr-5 gap-3">
                  <li>
                    <img src="/ChatDots.png" alt="" />
                  </li>
                  <li>
                    <img src="/ThumbsUp.png" alt="" />
                  </li>
                  <li>
                    <img src="/ShareNetwork.png " alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[424px] h-[569px]  border-white border-[1px]">
              <img src="/shawarma.png" alt="" className="w-[423px] h-[349px]" />
              <h3 className="text-[#FF9F0D] text-base font-normal leading-6">
                {" "}
                10 February 2022
              </h3>
              <p className="text-white text-2xl font-normal leading-8 text-bold mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Varius sed
              </p>
              <div className="flex justify-between mt-7">
                <p className="text-white text-base font-normal leading-6">
                  {" "}
                  Learn More
                </p>
                <ul className=" flex mr-5 gap-3">
                  <li>
                    <img src="/ChatDots.png" alt="" />
                  </li>
                  <li>
                    <img src="/ThumbsUp.png" alt="" />
                  </li>
                  <li>
                    <img src="/ShareNetwork.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[143px] w-[1170px] bg-black ml-[300px]">
          <h2 className="text-white text-[48px] leading-[56px] font-bold">
            <span className="text-[#FF9F0D] ">St</span>ill You Need Our Support?
          </h2>
          <p className="text-white text-base font-normal leading-6 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque.
          </p>
        </div>
        <hr className="border-[#FF9F0D] mx-72" />
        <Footer />
      </div>
    </main>
  );
}
