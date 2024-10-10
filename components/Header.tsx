"use client"

import Image from "next/image";
import logo from "@/public/logo.svg";
import {IoPerson, IoSearch} from "react-icons/io5";
import Link from "next/link";

const Header = () => {

    return (
        <div className="flex p-2 w-full bg-[#424242]/[.55] backdrop-blur-md rounded-3xl justify-between items-center flex-none shadow">
            <Link href={'/me'} className={'flex w-14 h-14 rounded-full bg-[#FFF8F2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md'}>
                <IoPerson className={"text-black"} size={20} />
            </Link>
            <div>
                <Image src={logo} alt={"Logo"} width={30} height={30} />
            </div>
            <Link href={'/search'} className={'flex w-14 h-14 rounded-full bg-[#FFF8F2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md'}>
                <IoSearch className={"text-black"} size={20} />
            </Link>
        </div>
    );
};

export default Header;