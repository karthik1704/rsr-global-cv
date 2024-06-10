import React from 'react'
import Link from 'next/link';
import { Logo } from '@/public/images';
import { Facebook,Instagram,Youtube,X } from 'lucide-react';

 const Footer = () => {
  return (
    <>
    <section className='w-full  bg-slate-50 py-8 px-10'>
      <div className='flex justify-between items-start border-b-2 border-gray-200 py-5' >
        <div className='flex flex-col items-start gap-5'>
          <div>
            <img src={`${Logo}`} alt="logo" />
          </div>
          <p>Making the world a better place through constructing elegant hierarchies.</p>
          <ul className='flex justify-start gap-10 '>
            <li> <Facebook /></li>
            <li><Instagram /></li>
            <li> <Youtube /></li>
            <li> <X /></li>
          </ul>
        </div>

        <div className='flex flex-col items-start gap-5'>
          <h6 className='font-bold'>Solutions</h6>
          <ul className='flex flex-col items-start gap-3'>
           <li>Marketing</li>
           <li>Analytics</li>
           <li>Commerce</li>
           <li>Insights</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
        <h6 className='font-bold'>Support</h6>
          <ul className='flex flex-col items-start gap-3'>
           <li>Pricing</li>
           <li>Documentation</li>
           <li>Guides</li>
           <li>API Status</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
        <h6 className='font-bold'>Company</h6>
          <ul className='flex flex-col items-start gap-3'>
           <li>About</li>
           <li>Blog</li>
           <li>Jobs</li>
           <li>Press</li>
           <li>Partners</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
        <h6 className='font-bold'>Legal</h6>
          <ul className='flex flex-col items-start gap-3'>
           <li>Claim</li>
           <li>Privacy</li>
           <li>Terms</li>
          </ul>
        </div>

      </div>

      <div className='my-10'>
        <span>© 2024 Your Company, Inc. All rights reserved.</span>
      </div>
        
    </section>
    </>
  )
}

export default Footer;
