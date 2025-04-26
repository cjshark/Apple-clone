"use client";
import { FaApple, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Nav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    if (openDrawer) {
      gsap.fromTo(
        drawerRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    } else {
      gsap.to(drawerRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [openDrawer]);

  return (
    <>
      <div className="sticky top-0 h-11 z-80 bg-white w-full flex justify-between items-center shadow-md px-4">
        <div className="lg:flex hidden justify-center w-full">
          <ul className="lg:flex hidden items-center space-x-8 font-semibold">
            <Link href="/">
              <FaApple className="text-xl text-gray-800 cursor-pointer" />
            </Link>
            <Link href="/store" className="text-[13px] text-slate-700">
              Store
            </Link>
            <Link href="/mac" className="text-[13px] text-slate-700">
              Mac
            </Link>
            <Link href="/ipad" className="text-[13px] text-slate-700">
              iPad
            </Link>
            <Link href="/iphone" className="text-[13px] text-slate-700">
              iPhone
            </Link>
            <Link href="/watch" className="text-[13px] text-slate-700">
              Watch
            </Link>
            <Link href="/vision" className="text-[13px] text-slate-700">
              Vision
            </Link>
            <Link href="/airpods" className="text-[13px] text-slate-700">
              AirPods
            </Link>
            <Link href="/tv&home" className="text-[13px] text-slate-700">
              TV & Home
            </Link>
            <Link href="/entertainment" className="text-[13px] text-slate-700">
              Entertainment
            </Link>
            <Link href="/accesories" className="text-[13px] text-slate-700">
              Accessories
            </Link>
            <Link href="/support" className="text-[13px] text-slate-700">
              Support
            </Link>
            <FaSearch className="text-sm text-gray-800 cursor-pointer" />
            <MdOutlineShoppingBag className="text-md text-gray-800 cursor-pointer" />
          </ul>
        </div>

        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/">
              <FaApple className="text-xl text-gray-800 cursor-pointer" />
            </Link>
          </div>

          <div className="flex items-center space-x-6 px-4">
            <FaSearch className="text-lg text-gray-800 cursor-pointer" />
            <MdOutlineShoppingBag className="text-xl text-gray-800 cursor-pointer" />
            <Menu color="#363535" size={25} onClick={handleDrawerToggle} />
          </div>
          <div
            ref={drawerRef}
            className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start p-4 shadow-lg transform -translate-y-full opacity-0"
          >
            <X
              color="#363535"
              size={20}
              onClick={handleDrawerToggle}
              className="absolute top-4 right-4 cursor-pointer"
            />
            <ul className="flex flex-col items-start space-y-4 mt-10 font-bold text-[20px]">
              <Link href="/store" className=" text-slate-700">
                Store
              </Link>
              <Link href="/mac" className=" text-slate-700">
                Mac
              </Link>
              <Link href="/ipad" className=" text-slate-700">
                iPad
              </Link>
              <Link href="/iphone" className=" text-slate-700">
                iPhone
              </Link>
              <Link href="/watch" className=" text-slate-700">
                Watch
              </Link>
              <Link href="/vision" className=" text-slate-700">
                Vision
              </Link>
              <Link href="/airpods" className=" text-slate-700">
                AirPods
              </Link>
              <Link href="/tv&home" className=" text-slate-700">
                TV & Home
              </Link>
              <Link href="/entertainment" className=" text-slate-700">
                Entertainment
              </Link>
              <Link href="/accesories" className=" text-slate-700">
                Accessories
              </Link>
              <Link href="/support" className=" text-slate-700">
                Support
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
