"use client";

import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import {useState} from "react";

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="flexBetween items-center justify-between max-container padding-container relative z-30 py-3">
            <Link href="https://fjfi.cvut.cz/cz/" target="_blank">
                <Image src="/fjfi.svg" alt="logo" width={200} height={120} className="h-14 w-auto"/>
            </Link>

            <ul className="hidden lg:flex items-center justify-center flex-1 gap-16">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter
                    cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={toggleMenu}
            />

            {isMenuOpen && (
                <div className="absolute top-full right-0 bg-gray-800 p-4 rounded-lg shadow-lg lg:hidden">
                    <ul className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className="regular-16 text-white
                    cursor-pointer pb-1.5 transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
