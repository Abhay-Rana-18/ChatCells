import React, { useState } from "react";

const Navbar = () => {
  const [sel, setSel] = useState("home");
  return (
    <>
      <div className="hidden md:flex justify-between p-3 font-semibold">
        <div className="logo">Logo</div>
        <div className="flex justify-between gap-20">
          <p
            className={`${
              sel === "home" && "border-b-4 border-green-600"
            } pb-2`}
            onClick={() => {
              setSel("home");
            }}
          >
            Home
          </p>
          <p
            className={`${
              sel === "services" && "border-b-4 border-green-600"
            } pb-2`}
            onClick={() => {
              setSel("services");
            }}
          >
            Services
          </p>
          <p
            className={`${
              sel === "blog" && "border-b-4 border-green-600"
            } pb-2`}
            onClick={() => {
              setSel("blog");
            }}
          >
            Blog
          </p>
          <p
            className={`${
              sel === "offers" && "border-b-4 border-green-600"
            } pb-2`}
            onClick={() => {
              setSel("offers");
            }}
          >
            Offers
          </p>
          <p
            className={`${
              sel === "about" && "border-b-4 border-green-600"
            } pb-2`}
            onClick={() => {
              setSel("about");
            }}
          >
            About Us
          </p>
        </div>
        <div className="icons flex justify-between gap-5">
          <img src="/images/search.png" alt="" className="w-5 h-5" />
          <img src="/images/noti.png" alt="" className="w-5 h-5" />
          <img src="/images/user.png" alt="" className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
