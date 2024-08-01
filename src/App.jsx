import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [acc, setAcc] = useState('');
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [city, setCity] = useState("");
  const [relation, setRelation] = useState("");
  const [date, setDate] = useState("");

  const [name1, setName1] = useState("Abhay Rana");
  const [acc1, setAcc1] = useState(12334445563);
  const [bank1, setBank1] = useState("State Bank Of India");
  const [branch1, setBranch1] = useState("Almora");
  const [ifsc1, setIfsc1] = useState("SBIN0001234");
  const [city1, setCity1] = useState("Almora");
  const [relation1, setRelation1] = useState("Self");
  const [date1, setDate1] = useState(new Date(2023, 9, 13));

  const formatDate = (date) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
  };

  const handleSave = async () => {
    if (name) {
      setName1(name);
      setName("");
    }
    if(acc) {
      setAcc1(acc);
      setAcc("");
    }
    if (bank) {
      setBank1(bank);
      setBank("");
    }
    if (branch) {
      setBranch1(branch);
      setBranch('');
    }
    if (ifsc) {
      setIfsc1(ifsc);
      setIfsc('');
    }
    if (city) {
      setCity1(city);
      setCity('');
    }
    if (relation) {
      setRelation1(relation);
      setRelation(relation);
    }
    if (date) {
      setDate1(date);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="p-2 md:hidden sticky top-0 w-full bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/images/menu.png" alt="Menu" className="w-5" />
      </div>
      <div className="flex">
        <SideBar isOpen={isOpen} />
        <div className="flex flex-col w-full">
          <div className="lg:w-[87%] h-fit p-5 ml-5">
            <h1 className="font-semibold text-2xl md:text-3xl mt-5">
              Update Bank Details
            </h1>
            <p className="mt-2 text-xs sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, labore tenetur? Vel velit dicta, tempora repudiandae
              doloribus eaque assumenda. Eaque unde minus obcaecati dolor
              ducimus? Cumque tempore delectus.
            </p>
            <div className="form flex flex-col gap-5 mt-8 border-2 border-gray-300 lg:p-10 sm:p-5 py-5">
              <div className="w-full name flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 ml-3 sm:ml-0 w-full">
                  ACCOUNT HOLDER NAME
                </p>
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  value={name}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="acc flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  ACCOUNT NUMBER
                </p>
                <input
                  type="number"
                  placeholder="Account no."
                  value={acc}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setAcc(e.target.value);
                  }}
                />
              </div>
              <div className="ifsc flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 text-left w-full ml-3 sm:ml-0">
                  IFSC CODE
                </p>
                <input
                  type="text"
                  placeholder="IFSC code"
                  value={ifsc}
                  className="p-3 rounded-md w-full sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => setIfsc(e.target.value)}
                />
              </div>

              <div className="bank flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BANK NAME
                </p>
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={bank}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setBank(e.target.value);
                  }}
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BANK CITY
                </p>
                <input
                  type="text"
                  placeholder="Bank City"
                  value={city}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BRANCH NAME
                </p>
                <input
                  type="text"
                  placeholder="Branch Name"
                  value={branch}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  RELATION WITH ACCOUNT HOLDER
                </p>
                <input
                  type="text"
                  placeholder="Relation with Account Holder"
                  value={relation}
                  className="p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  onChange={(e) => {
                    setRelation(e.target.value);
                  }}
                />
              </div>
              <div className="content flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  CONSENT
                </p>
                <div className="p-3 flex rounded-md w-[100%] sm:w-[50%] mt-3 gap-4 sm:mt-0 border-2 border-gray-200">
                  <input
                    type="checkbox"
                    className="sm:w-8 mb-5"
                    onClick={() => setDate(new Date())}
                  />
                  <p className="text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo amet assumenda voluptatem?
                  </p>
                </div>
              </div>
              <div
                className="btn px-5 sm:px-8 sm:py-3 py-2 bg-green-700/80 text-white text-center w-fit ml-auto mr-8 rounded-md cursor-pointer"
                onClick={handleSave}
              >
                Save
              </div>
            </div>
          </div>

          {/* Visible Screen */}

          <div className="lg:w-[87%] h-fit p-5 ml-5">
            <h1 className="font-semibold text-2xl md:text-3xl mt-5">
              Bank Details
            </h1>
            <p className="mt-2 text-xs sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, labore tenetur? Vel velit dicta, tempora repudiandae
              doloribus eaque assumenda. Eaque unde minus obcaecati dolor
              ducimus? Cumque tempore delectus.
            </p>
            <div className="form flex flex-col gap-5 mt-8 border-2 border-gray-300 lg:p-10 sm:p-5 py-5">
              <div className="w-full name flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 ml-3 sm:ml-0 w-full">
                  ACCOUNT HOLDER NAME
                </p>
                <input
                  type="text"
                  value={name1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>

              <div className="acc flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  ACCOUNT NUMBER
                </p>
                <input
                  type="number"
                  value={acc1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>
              <div className="ifsc flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 text-left w-full ml-3 sm:ml-0">
                  IFSC CODE
                </p>
                <input
                  type="text"
                  value={ifsc1}
                  className="bg-green-50 p-3 rounded-md w-full sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>

              <div className="bank flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BANK NAME
                </p>
                <input
                  type="text"
                  value={bank1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BANK CITY
                </p>
                <input
                  type="text"
                  value={city1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  BRANCH NAME
                </p>
                <input
                  type="text"
                  value={branch1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>
              <div className="branch flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  RELATION WITH ACCOUNT HOLDER
                </p>
                <input
                  type="text"
                  value={relation1}
                  className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 sm:mt-0 border-2 border-gray-200 font-bold sm:text-md text-sm"
                  readOnly
                />
              </div>
              <div className="content flex sm:flex-row flex-col sm:justify-between items-center px-4 sm:text-md text-sm">
                <p className="font-bold text-gray-700 w-full ml-3 sm:ml-0">
                  CONSENT
                </p>
                <div className="bg-green-50 p-3 rounded-md w-[100%] sm:w-[50%] mt-3 gap-4 sm:mt-0 border-2 border-gray-200">
                  <p className="text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo amet assumenda voluptatem?
                  </p>
                  <p className="font-bold text-[14px] mt-2">
                    FILLED ON {formatDate(date1)}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
