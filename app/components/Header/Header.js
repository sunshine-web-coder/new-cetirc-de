'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { FaTimesCircle } from 'react-icons/fa';
import HeaderLogo from '@/app/assets/images/logo.png';
import { IconContext } from 'react-icons';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const currentPage = usePathname();
  // console.log(currentPage);

  const handleClick = e => {
    setIsActive(true);
  };

  const handleClose = e => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isActive ? 'left-0' : '-left-[100vw]'
        } fixed top-0 h-full w-[100vw] bg-black z-[9999999999999] opacity-50 transition-all duration-500`}
        onClick={handleClose}
      ></div>
      <header
        className={`py-[30px] top-0 w-full z-[999999] fixed transition-all duration-300 ${
          isSticky ? 'bg-white shadow-lg !py-[20px]' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image width={148} src={HeaderLogo} alt="Header-Logo" />
          </Link>
          <ul className="ml-auto lg:flex xl:space-x-[25px] lg:space-x-[20px] text-[16px] text-black hidden header-menu">
            <li>
              <Link href="/loslegen" className="menu-link">
                Loslegen
              </Link>
            </li>
            <li>
              <Link href="/Uber" className="menu-link">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/karte" className="menu-link">
                In der Nähe
              </Link>
            </li>
          </ul>
          <ul className="ml-auto space-x-[30px] lg:flex items-center">
            <li className="hidden lg:block">
              <Link className="bordered-btn" href="https://cetircstorage.s3.eu-north-1.amazonaws.com/Cetirc+-+Card+Dropdown+Removed.apk">
                App herunterladen
              </Link>
            </li>
          </ul>
          <div
            className="text-[30px] menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white"
            onClick={handleClick}
          >
            <IconContext.Provider value={{ style: { fill: '#212121' } }}>
              <HiMiniBars3BottomRight />
            </IconContext.Provider>
          </div>
        </div>
      </header>

      <div
        className={`${
          isActive ? 'active' : 'closed'
        } offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-[99999999999] bg-white top-0 lg:hidden left-[-250px] transition-all`}
      >
        <FaTimesCircle
          className="absolute right-[15px] top-[34px] z-10 text-[24px]"
          onClick={handleClose}
        ></FaTimesCircle>
        <div className="logo mb-[30px]">
          <Link href="/" onClick={handleClose}>
            <Image width={140} src={HeaderLogo} alt="" />
          </Link>
        </div>
        <ul className="space-y-[15px] text-[16px] mb-[20px] header-menu">
          <li>
            <Link href="/loslegen" className="menu-link !pl-0" onClick={handleClose}>
              Loslegen
            </Link>
          </li>
          <li>
            <Link href="/Uber" className="menu-link !pl-0" onClick={handleClose}>
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/karte" className="menu-link !pl-0" onClick={handleClose}>
              In der Nähe
            </Link>
          </li>
        </ul>
        <ul className="mt-5">
          <li>
            <Link href="https://cetircstorage.s3.eu-north-1.amazonaws.com/Cetirc+-+Card+Dropdown+Removed.apk" className="bordered-btn !py-[12px] !px-[25px] !text-[16px]">
              App herunterladen
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}