import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Slider = () => {
  const swiperRef = useRef();
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={0}
        className=" lg:max-w-[400px]"
      >
        <SwiperSlide className="">
          <div className="w-full flex justify-center items-center max-lg:px-10">
            <div className="flex justify-center max-sm:items-center items-start gap-6 bg-white rounded-xl lg:w-[370px] p-6 max-sm:flex-col">
              <div className=" overflow-hidden flex items-center">
                <img
                  src="/assets/client/clientImage.jpg"
                  alt="client"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600 italic text-center">
                  Amazing experience! The gadget arrived quickly and works
                  perfectly. Customer service was super helpful, too. Will
                  definitely shop here again!@@
                </p>
                <div className="text-yellow-500 flex space-x-0.5 my-4 max-sm:justify-center">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h3 className="text-slate-800 font-semibold mt-2 uppercase max-sm:text-center">
                  — Jessica M.
                </h3>
                <p className=" mt-2 max-sm:text-center">Washington</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-start gap-6 bg-white rounded-xl w-[370px] h-[300px] p-6">
            <div className=" overflow-hidden flex items-center">
              <img
                src="/assets/client/clientImage.jpg"
                alt="client"
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 italic text-center">
                Amazing experience! The gadget arrived quickly and works
                perfectly. Customer service was super helpful, too. Will
                definitely shop here again!
              </p>
              <div className="text-yellow-500 flex space-x-0.5 my-4">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h3 className="text-slate-800 font-semibold mt-2 uppercase">
                — Jessica M.
              </h3>
              <p className=" mt-2">Washington</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-start gap-6 bg-white rounded-xl w-[370px] h-[300px] p-6">
            <div className=" overflow-hidden flex items-center">
              <img
                src="/assets/client/clientImage.jpg"
                alt="client"
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 italic text-center">
                Amazing experience! The gadget arrived quickly and works
                perfectly. Customer service was super helpful, too. Will
                definitely shop here again!
              </p>
              <div className="text-yellow-500 flex space-x-0.5 my-4">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h3 className="text-slate-800 font-semibold mt-2 uppercase">
                — Jessica M.
              </h3>
              <p className=" mt-2">Washington</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-start gap-6 bg-white rounded-xl w-[370px] h-[300px] p-6">
            <div className=" overflow-hidden flex items-center">
              <img
                src="/assets/client/clientImage.jpg"
                alt="client"
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 italic text-center">
                Amazing experience! The gadget arrived quickly and works
                perfectly. Customer service was super helpful, too. Will
                definitely shop here again!
              </p>
              <div className="text-yellow-500 flex space-x-0.5 my-4">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h3 className="text-slate-800 font-semibold mt-2 uppercase">
                — Jessica M.
              </h3>
              <p className=" mt-2">Washington</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="h-12 w-12 rounded-full flex items-center justify-center bg-white text-slate-600 text-lg font-semibold"
            onClick={handlePrev}
          >
            <GoArrowLeft />
          </button>
          <button
            className="h-12 w-12 rounded-full text-center bg-white text-slate-600 text-lg flex justify-center items-center font-semibold"
            onClick={handleNext}
          >
            <GoArrowRight />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
