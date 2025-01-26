// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen md:flex-row-reverse">
      <div className="flex flex-col gap-4">
        {/* mobile size */}
        <img className="w-32 ml-5 pt-5  md:hidden" src="/logo.svg"></img>
        <img
          className="w-full  object-cover md:hidden"
          src="/hero-mobile.jpg"
        ></img>

        {/* desktop size */}

        <img
          className="w-full h-screen bg-green-900 object-cover hidden md:block"
          src="/hero-desktop.jpg"
        ></img>
      </div>
      <div className="text-[#d8acac] p-6 flex flex-col items-center text-center md:items-start md:justify-start md:text-start ">
        <div className="flex flex-col h-[50vh] justify-around">
          <img
            className="w-32 ml-5 pt-5 hidden md:block md:ml-10"
            src="/logo.svg"
          ></img>
          <div className="text-5xl font-josefinSans uppercase md:text-6xl  md:p-10 tracking-widest">
            <p className="font-thin">
              We&apos;re <br />
            </p>
            <span className="text-[#413a3a] ">
              Coming
              <br /> Soon
            </span>
          </div>
          <div className="text-[#d8acac] md:ml-10">
            <p className="md:hidden block">
              Hello Fellow shoppers! We&apos;re currently building <br />
              our new fashion store. Add your email below to <br />
              stay up-to-date with announcements and our <br />
              launch deals.
            </p>
            <p className="hidden md:block">
              Hello Fellow shoppers! We&apos;re currently building our new{" "}
              <br />
              fashion store. Add your email below to stay up-to-date with <br />
              announcements and our launch deals.
            </p>
          </div>

          <div className="border flex rounded-full px-6 py-6 md:ml-10  border-[#d8acac] relative text-[#d8acac] md:mt-10">
            <form
              // onSubmit={handleSubmit}
              className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
            >
              <input
                className="text-center focus:outline-none placeholder:text-[#d8acac] "
                type="email"
                placeholder="Email Addresses"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </form>
            <button type="submit" className="absolute top-0 right-0">
              <img
                className=" bg-gradient-to-r from-[#f8bfbf]  to-[#ee8c8c] shadow-xl rounded-full px-7 py-4 shadow-pink-200"
                src="/icon-arrow.svg"
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
