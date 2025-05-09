import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-x-10 justify-center m-10 mb-0 ">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <Link className="hover:text-cyan-500 text-amber-600 " href={"#"}>
            Home
          </Link>

          <Link className="hover:text-cyan-500 text-amber-600 " href={"#"}>
            About
          </Link>

          <Link className="hover:text-cyan-500 text-amber-600 " href={"#"}>
            Delivery
          </Link>

          <Link className="hover:text-cyan-500 text-amber-600 " href={"#"}>
            Contact
          </Link>
        </nav>
        <br />

        <div className="flex justify-center space-x-5 transition-transform duration-500 transform hover:scale-105">
          <div className="py-5 text-center justify-center items-center flex md:flex-row gap-7">
            <div>
              <Link href={"https://www.facebook.com/shorts/cp4bHAPGbvE"}>
                {" "}
                <button className="flex mx-auto mt-2 text-white bg-blue-600 hover:bg-blue-500 rounded-3xl border-5 py-2 px-2 text-sm justify-center items-center">
                  Facebook
                </button>{" "}
              </Link>
            </div>
            <div>
              <Link href={"https://www.twitter.com/shorts/cp4bHAPGbvE"}>
                {" "}
                <button className="flex mx-auto mt-2 text-white bg-sky-500 hover:bg-blue-700 rounded-3xl border-5 py-2 px-2 text-sm justify-center items-center">
                  Twitter
                </button>{" "}
              </Link>
            </div>
            <div>
              <Link href={"https://www.instagram.com/shorts/cp4bHAPGbvE"}>
                <button className="flex mx-auto mt-2 text-white bg-gradient-to-r from-red to bg-orange-400 hover:bg-orange-500 rounded-3xl border-5 py-2 px-2 text-sm justify-center items-center">
                  Instagram
                </button>{" "}
              </Link>
            </div>
            <div>
              <Link href={"https://www.linkedin.com/shorts/cp4bHAPGbvE"}>
                {" "}
                <button className="flex mx-auto mt-2 text-white bg-blue-400 hover:bg-sky-500 rounded-3xl border-5 py-2 px-2 text-sm justify-center items-center">
                  LinkedIn
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto gap-2">
            {/* Social Media Icons */}
          </span>
        </div>

        <p className="text-center hover:text-cyan-500 text-amber-600 font-medium mb-8 justify-center">
          2024 NOOR ANUM . ALL RIGHTS RESERVED
        </p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
};

Footer.displayName = "Footer";

export default Footer;
