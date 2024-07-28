"use client"

import React, { useRef } from 'react'
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/app/assets/images/logo.svg";
import Footershape from "@/app/assets/images/footer-shape.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    
  return (
    <>
        <footer className='overflow-hidden'>
            <div className="container">
                <div className="grid lg:grid-cols-[5fr_7fr] xl:gap-x-[100px] gap-x-[30px] md:pt-[110px] pt-[60px] pb-[45px]">
                    <div className='lg:mb-[0] mb-[40px]'>
                        <Link className='mb-[10px] border-t w-full border-[#8D8D8D] inline-block' href='/'>
                            {/* <Image width={148} src={FooterLogo} alt='Header logo' /> */}
                        </Link>
                        <h4 className='font-medium sm:text-[24px] text-[16px] leading-[1.4] lg:mb-[40px] mb-[20px] max-w-[500px] lg:max-w-[auto]'>Start Your Journey with Secure Authentication</h4>
                        <div className="flex items-center gap-[20px]">
                            {/* <Link href="/getstarted" className="primary-btn hidden !py-[10px] !px-[35px] !rounded-[8px]">Get started</Link> */}
                            <Link href="/" className="bordered-btn !py-[10px] !px-[35px] !rounded-[8px]">Download app</Link>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-[100px] gap-[30px]'>
                        <div>
                            <h4 className='sm:text-[24px] text-[18px] font-medium sm:mb-[25px] mb-[15px]'>Product</h4>
                            <ul className='grid gap-[15px] lg:mb-[0] mb-[30px] sm:text-[20px] text-[14px]'>
                                <li><Link href='/getstarted/#alice-1'>Alice 1</Link></li>
                                <li><Link href='/getstarted/#alice-2'>Alice 2</Link></li>
                                <li><Link href='/getstarted'>Get started</Link></li>
                            </ul>
                            <ul className='flex md:gap-[23px] gap-[15px] lg:hidden'>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://x.com/cetirc_?s=21' target='_blank'><FaFacebook /></Link></li>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/' target='_blank'><FaLinkedin /></Link></li>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://www.instagram.com/cetirc?igsh=d2Z0ejl4Z2ZvajNx&utm_source=qr' target='_blank'><RiInstagramFill /></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='sm:text-[24px] text-[18px] font-medium sm:mb-[25px] mb-[15px]'>Cetirc</h4>
                            <ul className='grid gap-[15px] sm:text-[20px] text-[14px]'>
                                <li><Link href='/about'>About</Link></li>
                                <li><Link href='/legal/terms-of-use'>Terms of Use</Link></li>
                                <li><Link href='/legal/data-privacy-disclosure'>Data Privacy 
                                Disclosure</Link></li>
                                <li><Link href='/#contact-us'>Contact Us</Link></li>
                                <li><Link href='mailto:support@cetirc.com'>Get Help</Link></li>
                            </ul>
                        </div>
                        <div className='relative z-10 lg:block hidden'>
                            <Image className='absolute max-w-none -z-10 left-1/2 -top-[80px] translate-x-[-40%] hidden lg:block' src={Footershape} alt='Footer Shape' />
                            <h4 className='sm:text-[24px] text-[18px] font-medium sm:mb-[25px] mb-[15px] text-center'>Follow us</h4>
                            <ul className='flex md:gap-[23px] gap-[15px]'>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><FaTwitter /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><FaLinkedin /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/'><RiInstagramFill /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#8D8D8D] pt-[25px] pb-[60px]">
                    <p className='text-[#363636] text-center'>© 2024 Cetirc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
