"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOPen] = useState(false);

  const toggleMenu = () => {
    setMenuOPen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          className={`${menuOpen && "hidden"}`}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className={`inline-block cursor-pointer lg:hidden ${menuOpen && 'hidden'}`}
        onClick={toggleMenu}
      />
      {menuOpen && (
        <div className="h-[100vh] w-[100vw] relative py-10 bg-white z-10">
          <Image
            src="/icons8-close.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden absolute top-0 right-0"
            onClick={toggleMenu}
          />
          <ul className="h-full flex flex-col justify-between py-10">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
