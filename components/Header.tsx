"use client"

import Image from "next/image";
import logo from "@/public/logo.svg";

const Header = () => {
    return (
        <div className="flex p-2 w-full bg-[#424242]/[.55] backdrop-blur-md rounded-3xl justify-between items-center flex-none shadow">
            <div className={'button-default'}>

            </div>
            <div>
                <Image src={logo} alt={"Logo"} width={30} height={30} />
            </div>
            <div className={"button-default"}>

            </div>
        </div>
    );
};

export default Header;