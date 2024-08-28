import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="w-full  bg-slate-50 py-8 px-10">
        <div className=''>
          <div className="flex flex-col items-center gap-5">
            <div>
              <Image
                className="w-full h-full"
                src="/images/rsr_logo-1.png"
                alt="logo"
                width={200}
                height={70}
              />
            </div>
            <p className="text-black">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <ul className="flex justify-start gap-6 ">
              <Link href={"#"}>
                <li>
                  {" "}
                  <Image
                    src="/images/svg/facebook.svg"
                    height={24}
                    width={24}
                    alt="facebook"
                  />
                </li>
              </Link>
              <Link href={"#"}>
                <li>
                  <Image
                    src="/images/svg/instagram.svg"
                    height={24}
                    width={24}
                    alt="instagram"
                  />
                </li>
              </Link>
              <Link href={"#"}>
                <li>
                  {" "}
                  <Image
                    src="/images/svg/youtube.svg"
                    height={24}
                    width={24}
                    alt="youtube"
                  />
                </li>
              </Link>
              <Link href={"#"}>
                <li>
                  {" "}
                  <Image
                    src="/images/svg/x.svg"
                    height={24}
                    width={24}
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

        <div className="my-10 flex flex-col items-center text-black">
          <span>© 2024 <Link href={'https://vimkes.com/'} target="unblank"> Vimkes Technologies</Link>, Inc. All rights reserved.</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
