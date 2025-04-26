import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="max-h-full max-w-full ">
        <div className="bg-gray-100 h-[80vh] w-full flex flex-col space-y-3 items-center overflow-hidden">
          <h1 className="font-bold text-5xl text-black mt-10">iPhone</h1>
          <h3 className="text-2xl text-slate-800 font-semibold">
            Meet the iPhone 16 Pro
          </h3>
          <div className="flex space-x-3">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary">Shop iPhone</Button>
          </div>
          <h4 className="mt-4 font-semibold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </h4>
          <img src="./images/iPhone-16-Pro.png" alt="iPhone 16 Pro" />
        </div>
        <div className=" mt-4 bg-gray-100 h-[80vh] w-full flex flex-col space-y-2 items-center overflow-hidden">
          <div className="flex justsify-center items-center mt-10">
            <FaApple className="text-6xl text-gray-800" />
            <h1 className="font-bold text-5xl text-black">Watch</h1>
          </div>
          <h3 className="font-semibold text-2xl text-slate-700">SERIES 10</h3>
          <h2 className="text-3xl text-slate-800">Thinstant classic.</h2>
          <div className="flex space-x-3">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary">Buy</Button>
          </div>
          <img src="./images/Apple-Watch-Series.png" alt="" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 place-items-center mb-4 px-4">
          <div className="h-[80vh] w-[105vh] bg-gradient-to-t from-gray-200 to-blue-200 ">
            <div className=" flex flex-col items-center w-full h-full my-10">
              <div className="flex justify-center items-center ">
                <FaApple className="text-6xl text-gray-800" />
                <h1 className="text-4xl text-black font-bold">Macbook Air</h1>
              </div>
              <h4 className="text-xl text-slate-700 font-semibold mt-2">
                Sky Blue Color
              </h4>
              <h4 className="text-xl text-slate-700 font-semibold mt-2">
                Sky High Performance with M4
              </h4>
              <div className="flex space-x-4 mt-4">
                <Button variant="primary">Learn more</Button>
                <Button variant="secondary">Buy</Button>
              </div>
              <h4 className="mt-4 font-semibold text-md bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Built for Apple Intelligence.
              </h4>
              <img className="h-70 mt-6" src="/images/Mcbook-pro.png" alt="" />
            </div>
          </div>
          <div className="h-[80vh] w-[105vh] bg-gray-200">
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div className="flex justify-center items-center mt-10">
                <FaApple className="text-6xl text-gray-800" />
                <h1 className="text-4xl text-black font-bold">Mac Does</h1>
                <h1 className="text-4xl text-black font-bold bg-green-300 rounded-xl p-2 ml-2">
                  That
                </h1>
              </div>
              <h4 className="text-2xl text-slate-700">
                See how easy it is to switch to Mac
              </h4>
              <div className="mt-4">
                <Button variant="primary">Learn more</Button>
              </div>
              <img src="./images/Mac-does-that.png" alt="Apple" />
            </div>
          </div>
          <div className="h-[80vh] w-[105vh] bg-gradient-to-b from-gray-100 to-blue-300 mt-4 mb-4">
            <div className="flex flex-col justify-center items-center my-10">
              <div className="flex justify-center items-center  space-x-2">
                <FaApple className="text-6xl text-gray-800" />
                <h1 className="text-5xl font-bold text-black">iPad</h1>
                <h1 className="text-5xl font-bold text-blue-500">Air</h1>
              </div>
              <h3 className="text-slate-500 text-2xl mt-3">
                Now SuperCharge by the M3 Chip
              </h3>
              <div className="flex space-x-2 mt-5">
                <Button variant="primary">Learn more</Button>
                <Button variant="secondary">Buy</Button>
              </div>
              <img src="./images/ipad-m3.png" alt="iPad" />
              <h4 className="mt-3 font-semibold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Built for Apple Intelligence.
              </h4>
            </div>
          </div>
          <div className=" h-[80vh] w-[105vh] bg-black overflow-hidden">
            <div className="flex flex-col justify-center items-center space-y-2 my-8">
              <div className="flex justify-center items-center">
                <img className="size-15" src="/images/logo.png" alt="" />
                <h1 className="text-white text-4xl font-bold">AirPods Pro 2</h1>
              </div>
              <h3 className="text-slate-400 text-xl">
                Now with a hearing aid feature
              </h3>
              <div className="flex space-x-3 mt-2">
                <Button variant="primary">Learn More</Button>
                <Button variant="secondary">Buy</Button>
              </div>
              <img src="./images/airpods.png" alt="" />
            </div>
          </div>
          <div className=" h-[80vh] w-[105vh] bg-gray-200 overflow-hidden">
            <div className="flex flex-col justify-center items-center my-10">
              <div className="flex justify-center items-center font-bold mb-4">
                <FaApple className="text-6xl text-gray-800" />
                <h1 className="text-5xl text-black ">Trade In</h1>
              </div>
              <h4 className="text-xl font-semibold text-slate-800">
                Get $170 - $630 in credit when you
              </h4>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                trade in iPhone 12 or higher
              </h4>
              <Button variant="primary">Get your Estimate</Button>
              <img className="mt-4 " src="/images/trade.png" alt="" />
            </div>
          </div>
          <div className="h-[80vh] w-[105vh] bg-gradient-to-b from-yellow-200 via-pink-200 to-purple-200 overflow-hidden">
            <div className="flex flex-col justify-center items-center my-10">
              <div className="flex justify-center items-center font-bold mb-4">
                <FaApple className="text-5xl text-gray-800" />
                <h1 className="text-5xl text-black ">Card</h1>
              </div>
              <h4 className="text-xl font-semibold text-slate-800 ">
                Get up to 3% Daily Cash with Apple Card
              </h4>
              <h4 className="text-xl font-semibold text-slate-800 mb-6">
                with every purchase.
              </h4>
              <div className="flex space-x-2 ">
                <Button variant="primary">Learn More</Button>
                <Button variant="secondary">Apply Now</Button>
              </div>
              <img
                className="size-80 mt-5"
                src="/images/apple-card.png"
                alt="Apple Card"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Home;
