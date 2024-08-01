import React, { useState } from "react";

const SideBar = ({ isOpen }) => {
  const [sel, setSel] = useState("bank");

  return (
    <div
      className={`fixed md:static left-0 bg-white md:w-[30vw] w-[70vw] sm:w-[50vw] h-[100vh] p-3 ${
        isOpen ? "block" : "hidden"
      } md:block transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-3">
        <div
          onClick={() => setSel("dashboard")}
          className={`${
            sel === "dashboard" && "bg-blue-200 font-semibold"
          } p-2 flex gap-3`}
        >
          <img src="/images/dashboard.png" alt="#" className="w-5 h-5 mt-1" />
          <p className="text-sm">My DashBoard</p>
          <img src="/images/right.png" alt="#" className="w-5 h-5 ml-auto" />
        </div>
        <div
          onClick={() => setSel("link")}
          className={`${
            sel === "link" && "bg-blue-200 font-semibold"
          } p-2 flex gap-3`}
        >
          <img src="/images/link.png" alt="#" className="w-5 h-5 mt-1" />
          <p className="text-sm">TOTM Links</p>
          <img src="/images/right.png" alt="#" className="w-5 h-5 ml-auto" />
        </div>
        <div
          onClick={() => setSel("summary")}
          className={`${
            sel === "summary" && "bg-blue-200 font-semibold"
          } p-2 flex gap-3`}
        >
          <img src="/images/summary.png" alt="#" className="w-5 h-5 mt-1" />
          <p className="text-sm">Daily Summary</p>
          <img src="/images/right.png" alt="#" className="w-5 h-5 ml-auto" />
        </div>
        <div
          onClick={() => setSel("bank")}
          className={`${
            sel === "bank" && "bg-blue-200 font-semibold"
          } p-2 flex gap-3`}
        >
          <img src="/images/bank.png" alt="#" className="w-5 h-5 mt-1" />
          <p className="text-sm">Bank Details</p>
          <img src="/images/right.png" alt="#" className="w-5 h-5 ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
