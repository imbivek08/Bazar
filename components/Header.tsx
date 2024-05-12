"use client";
import { selectCount } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

const items = [
  "All",
  "Fresh",
  "Prime",
  "Amazon miniTV",
  "Coupons",
  "Gift Cards",
  "Browsing History",
  "Books",
  "AmazonBasics",
  "Today's Deals",
  "Customer Service",
];

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const cart = useSelector(selectCount);
  const searchhandler = () => {
    router.push(`/search/${query}`);
  };
  return (
    <>
      <div className="bg-[#131921] text-white h-15 py-2">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="pl-5 items-center w-[10%]">
            <Image
              src={"/amazon-logo-2.webp"}
              height={140}
              width={140}
              alt=""
              onClick={() => router.push("/")}
              className="cursor-pointer"
            />
          </div>
          <div className="w-[60%] flex items-center">
            <input
              className="w-full h-9 rounded-lg focus:outline-none text-black"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search in Bazaar"
            />
            <div className="flex items-center justify-center h-9 w-11 bg-[#F3A847] relative right-5 rounded-r-lg cursor-pointer">
              <IoSearch onClick={searchhandler} />
            </div>
          </div>
          <div className="flex gap-5 items-center w-[20%]">
            <div>
              <h1 className="text-xs">Hello Bivek</h1>
              <h1 className="font-medium text-sm">Accounts&lists</h1>
            </div>
            <div>
              <p className="font-medium text-sm"> Returns</p>
              <h1 className="font-medium text-sm">Orders</h1>
            </div>
            <div className="pb-4">
              <p className="relative top-2 left-2.5">{cart.length}</p>
              <div className="flex">
                <BsCartPlus
                  className="cursor-pointer"
                  size={35}
                  onClick={() => router.push("/cart")}
                />
                <h1 className="font-medium text-sm mt-2">Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232F3E] mt-0 flex justify-between h-8 ">
        <div className="text-white flex gap-4  items-center pl-5">
          {items.map((item, idx) => {
            return (
              <Link href={`/${item}`} key={idx}>
                {item}
              </Link>
            );
          })}
        </div>
        <div className="text-[#F3A847] pt-1 pr-5 items-center">
          <h1>Logout</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
