// import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col mt-6 ">
      <div className="flex flex-col gap-4 ">
        <img className="w-32 ml-5" src="/logo.svg"></img>
        <img className="w-full  " src="/hero-mobile.jpg"></img>
      </div>
      <div className="text-[#d8acac] p-6 flex flex-col items-center text-center">
        <div className="flex flex-col gap-4 h-[50vh] justify-around">
          <p className="text-5xl font-josefinSans uppercase">
            We&apos;re <br />
            <span className="text-[#413a3a] ">
              Coming
              <br /> Soon
            </span>
          </p>
          <p className="text-[#d8acac] ">
            Hello Fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <div className="border flex  rounded-full px-6 py-6 border-[#d8acac] relative">
            <p className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Email Addresess
            </p>
            <p className="absolute top-0 right-0">
              <img
                className=" bg-gradient-to-r from-[#f8bfbf]  to-[#ee8c8c] shadow-xl rounded-full px-7 py-4 shadow-pink-200"
                src="/icon-arrow.svg"
                alt="arrow icon"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
