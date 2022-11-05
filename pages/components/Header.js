import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className=" bg-purple-900 bg-opacity-60 flex md:flex-row flex-col items-center md:gap-20 text-white font-semibold max-w-screen-fit overflow-auto justify-between">
        <div className="md:ml-20 m-3 border-2 rounded-3xl bg-stone-300 hover:bg-yellow-500">
          <Link href="/">
            <a>
              <Image src={"/logo.png"} alt="logo" width={60} height={60} />
            </a>
          </Link>
        </div>

        <nav>
          <ul className="flex relative md:border-none border p-3 space-x-12 md:space-x-20 md:gap-10 md:mr-60">
            <li>
              <Link href="/">
                <a className="hover:slate_background_yellow">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/Careers">
                <a className="hover:slate_background_yellow">Careers</a>
              </Link>
            </li>
            <li>
              <Link href="/Blog">
                <a className="hover:slate_background_yellow">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <a className="hover:slate_background_yellow">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
