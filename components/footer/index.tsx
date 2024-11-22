import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-slate-50 py-8 px-6 sm:px-10">
        <div className="">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <div>
              <Image
                className="w-40 h-auto sm:w-52 sm:h-16"
                src="/images/rsr_logo-1.png"
                alt="logo"
                width={200}
                height={70}
              />
            </div>
            <p className="text-center text-sm sm:text-base">
            Create your CV effortlessly in seconds with <Link href="/" className="text-green-700">
      rsrglobalresumebuilder.com
    </Link>
            </p>
            <Link href={'/terms-condition'}  className="text-green-700 lg:text-base text-sm">Terms and conditions</Link>
            <Link href={'/privacy-policy'}  className="text-green-700 lg:text-base text-sm">Privacy Policy</Link>
            <ul className="flex justify-center gap-4 sm:gap-6">
              <Link href={"https://www.facebook.com/people/RSR-Global-Training-Academy/61558372236248/"} target="unblank">
                <li>
                  <Image
                    src="/images/icon/facebook.svg"
                    height={34}
                    width={34}
                    alt="facebook"
                  />
                </li>
              </Link>
              <Link href={"https://www.instagram.com/rsrglobaltrainingacademy/"} target="unblank">
                <li>
                  <Image
                    src="/images/icon/instagram.svg"
                    height={34}
                    width={34}
                    alt="instagram"
                  />
                </li>
              </Link>
              <Link href={"https://youtube.com/@RSRGlobalTrainingAcademy?si=mtPtNkR39nu2bm4r"} target="unblank">
                <li>
                  <Image
                    src="/images/icon/youtube.svg"
                    height={34}
                    width={34}
                    alt="youtube"
                  />
                </li>
              </Link>
              <Link href={"https://www.linkedin.com/company/rsrtrainingacademy"} target="unblank">
                <li>
                  <Image
                    src="/images/icon/linkedin.svg"
                    height={34}
                    width={34}
                    alt="x"
                  />
                </li>
              </Link>
            </ul>
          </div>

          {/* <div className="flex flex-col items-start gap-5">
            <h6 className="font-bold">Solutions</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h6 className="font-bold">Support</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h6 className="font-bold">Company</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h6 className="font-bold">Legal</h6>
            <ul className="flex flex-col items-start gap-3">
              <li>Claim</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div> */}
        </div>

        <div className="my-10 lg:text-base text-sm flex flex-col text-center items-center">
          <span>
            © {new Date().getFullYear()}{" "}
            <Link href={"https://vimkes.com/"} className="text-green-700" target="unblank">
              {" "}
              Vimkes Technologies
            </Link>
            , Inc. All rights reserved.
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
