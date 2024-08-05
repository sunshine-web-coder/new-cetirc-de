"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/app/assets/images/logo.svg";
import Footershape from "@/app/assets/images/footer-shape.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    
  return (
    <>
        <footer className='overflow-hidden'>
            <div className="container">
                <div className="grid lg:grid-cols-[5fr_7fr] xl:gap-x-[100px] gap-x-[30px] md:pt-[110px] pt-[60px] pb-[45px]">
                    <div className='lg:mb-[0] mb-[40px]'>
                        <Link className='mb-[10px] border-t w-full border-[#8D8D8D] inline-block' href='/'>
                            {/* <Image width={148} src={FooterLogo} alt='Header-Logo' /> */}
                        </Link>
                        <h4 className='font-medium sm:text-[24px] text-[16px] leading-[1.4] lg:mb-[40px] mb-[20px] max-w-[500px] lg:max-w-[auto]'>Beginnen Sie Ihre Reise mit sicherer Authentifizierung</h4>
                        <div className="flex items-center gap-[20px]">
                            {/* <Link href="/loslegen" className="primary-btn hidden !py-[10px] !px-[35px] !rounded-[8px]">Loslegen</Link> */}
                            <Link href="/Cetric.apk" className="bordered-btn !py-[10px] !px-[35px] !rounded-[8px]">App herunterladen</Link>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-[100px] gap-[30px]'>
                        <div>
                            <h4 className='sm:text-[24px] text-[18px] font-medium sm:mb-[25px] mb-[15px]'>Produkt</h4>
                            <ul className='grid gap-[15px] lg:mb-[0] mb-[30px] sm:text-[20px] text-[14px]'>
                                <li><Link href='/loslegen/#alice-1'>Alice 1</Link></li>
                                <li><Link href='/loslegen/#alice-2'>Alice 2</Link></li>
                                <li><Link href='/loslegen'>Loslegen</Link></li>
                            </ul>
                            <ul className='flex lg:hidden md:gap-[23px] gap-[15px]'>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://x.com/cetirc_?s=21' target='_blank'><FaTwitter /></Link></li>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/' target='_blank'><FaLinkedin /></Link></li>
                                <li><Link className='md:h-[43px] h-[30px] md:w-[43px] w-[30px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://www.instagram.com/cetirc?igsh=d2Z0ejl4Z2ZvajNx&utm_source=qr' target='_blank'><RiInstagramFill /></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='sm:text-[24px] relative z- text-[18px] font-medium sm:mb-[25px] mb-[15px]'>Cetirc</h4>
                            <ul className='grid gap-[15px] sm:text-[20px] text-[14px]'>
                                <li><Link href='/Uber'>Über uns</Link></li>
                                <li><Link href='/rechtlich/Nutzungsbedingungen'>Nutzungsbed<br />ingungen</Link></li>
                                <li><Link href='/rechtlich/Datenschutzerklarung'>Datenschutzerklärung</Link></li>
                                <li><Link href='/#Kontaktieren-Sie-uns'>Kontaktieren Sie uns</Link></li>
                                <li><Link href='mailto:support@cetirc.com'>Hilfe bekommen</Link></li>
                            </ul>
                        </div>
                        <div className='relative z-10 lg:block hidden'>
                            <Image className='absolute max-w-none -z-10 left-1/2 -top-[80px] translate-x-[-40%] hidden lg:block' src={Footershape} alt='Fußform' />
                            <h4 className='sm:text-[20px] whitespace-nowrap text-[18px] font-medium sm:mb-[25px] mb-[15px] text-center'>Folgen Sie uns</h4>
                            <ul className='flex md:gap-[23px] gap-[15px]'>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://x.com/cetirc_?s=21' target='_blank'><FaTwitter /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='/' target='_blank'><FaLinkedin /></Link></li>
                                <li><Link className='h-[43px] w-[43px] border border-[#B3B3B3] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:border-black' href='https://www.instagram.com/cetirc?igsh=d2Z0ejl4Z2ZvajNx&utm_source=qr' target='_blank'><RiInstagramFill /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#8D8D8D] pt-[25px] pb-[60px]">
                    <p className='text-[#363636] text-center'>© 2024 Cetirc. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    </>
  )
}