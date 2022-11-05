import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" footer_background flex flex-col flex-wrap max-w-screen">
      <section className="flex p-3 justify-between border footer_top_bottom">
        <div className="font-semibold text-lg">
          <span>Get connected with us on social networks</span>
        </div>
        <div>
          <LinkedInIcon />
        </div>
      </section>
      <section className="">
        <div className="flex flex-col md:flex-row md:justify-around p-4">
          <div className="text-justify max-w-sm">
              <div className="flex gap-3">
                <div>
                  <Image src={"/logo.png"} alt="logo" width={40} height={40} />
                </div>
                <h6 className="font-bold uppercase text-xl text-slate-700 mb-4 ">
                  {" "}
                  CetalDeve Solutions
                </h6>
              </div>
              <div>
                Cetal Deve Solutions is a consulting firm committed to provide
                experienced, excellent and highly skilled professionals to help
                with client business requirements.{" "}
              </div>
          </div>

          <div className="flex-col pt-2">
            <div>
            <h6 className="font-bold text-xl uppercase">ABOUT US</h6>
            </div>
            <div className="flex justify-between md:flex-col">
            <a className="pb-2" href="#">Home</a>
            <a className="pb-2" href="./Careers">Careers</a>
            <a className="pb-2" href="./Blog">Blog</a>
            <a className="pb-2" href="./Contact">Contact</a>
            </div>
            
          </div>

          <div className="">
            <h6 className="font-bold text-xl uppercase md:mb-4">Contact</h6>
            <p className="pb-1 md:pb-2">
              <i>
                <LocationOnIcon />
              </i>{" "}
              New York, NY 10012, US
            </p>
            <p className="pb-1 md:pb-2">
              <i>
                <InfoIcon />
              </i>{" "}
              info@example.com
            </p>
            <p className="pb-1 md:pb-2">
              <i>
                <LocalPhoneIcon />
              </i>{" "}
              + 01 234 567 88
            </p>
          </div>
        </div>
      </section>

      <div className="text-center p-4 border footer_top_bottom ">
        © {new Date().getFullYear()} Copyright:
        <Link href="/">
        <a className="font-semibold underline">
          CetalDeveSolutions
        </a>
        </Link>
      </div>
    </footer>
  );
}
