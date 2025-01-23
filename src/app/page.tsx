// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col p-5 gap-4">
        <img className="w-32" src="/logo.svg"></img>
        <img className="w-full  " src="/hero-mobile.jpg"></img>
      </div>
      <div className="text-[#d8acac] p-6 flex flex-col h-1/2 justify-around items-center text-center">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-josefinSans uppercase ">
            We&apos;re <br />
            <span className="text-[#413a3a]">
              Coming
              <br /> Soon
            </span>
          </p>
          <p className="text-[#d8acac] ">
            Hello Fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <p className="border rounded-full px-4 py-3 border-[#d8acac] ">
            email addresess
          </p>
        </div>
      </div>
    </div>
  );
}
