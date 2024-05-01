"use client";
import React from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import WifiOffRoundedIcon from "@mui/icons-material/WifiOffRounded";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#dcf5f1] p-5 flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <WifiOffRoundedIcon className="text-green+ " />
          <h1 className="font-bold text-[30px] py-5">No Internet Connection</h1>
          <p>
            you are offline please reconnect ,you can watch your downloaded
            courses by clicking on the button below
          </p>

          <div>
            <Link
              href="/watchOffline"
              className="flex flex-row justify-center items-center mx-1  w-[100%]  h-[40px]  bg-orange-400 rounded-lg order-5  text-white py-1 px-1"
            >
              see downloded course
            </Link>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <img
            src="/images/Frame 1000007258.png"
            className=" w-[400px] h-[300px] lg:h-[450px] lg:w-[400px] p-2 "
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
