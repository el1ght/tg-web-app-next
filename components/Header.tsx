"use client"

import Image from "next/image";
import logo from "@/public/logo.svg";
import {IoPerson, IoSearch} from "react-icons/io5";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    children
}) => {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col gap-1 p-1 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255)_0%,rgba(204,204,204)_100%)]">
            <div className="flex p-1 bg-[#424242]/[.55] backdrop-blur-md rounded-[40px] justify-between items-center flex-none shadow">
                <Link href={'/me'} className={`flex w-14 h-14 rounded-full bg-[#FFF8F2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/me' && 'bg-white'}`}>
                    <IoPerson className={"text-black"} size={20} />
                </Link>
                <Link href={'/'}>
                    <Image src={logo} alt={"Logo"} width={30} height={30} />
                </Link>
                <Link href={'/search'} className={`flex w-14 h-14 rounded-full bg-[#FFF8F2]/[.4] justify-center items-center transition hover:bg-[#fff]/[100] shadow-md ${pathname === '/search' && 'bg-white'}`}>
                    <IoSearch className={"text-black"} size={20} />
                </Link>
            </div>
            <main className="h-full rounded-[40px] flex-1 overflow-y-auto bg-[#eee] shadow-md p-6">
                {children}
            </main>
        </div>

        // <div className="flex h-full flex-col gap-1">
        //     <div className="flex p-2 items-center justify-between bg-[#424242] rounded-2xl flex-none">
        //         <Link href="/me" className="w-14 h-14 bg-black rounded-full"></Link>
        //         <div className="w-14 h-14 bg-black"></div>
        //         <Link href="/search" className="w-14 h-14 bg-black rounded-full"></Link>
        //     </div>
        //     <main className="h-full flex-1 overflow-y-auto bg-[#eee] shadow-md p-6 border-2 border-indigo-500">
        //         {children}
        //     </main>
        // </div>
    );
};

export default Header;