"use client"

import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

interface HomeProps {
    children: React.ReactNode;
    className?: string;
}

const HomeContent: React.FC<HomeProps> = ({
    children,
    className
}) => {
    const router = useRouter();

    return (
        <div className={twMerge(`
            h-fit 
            p-4
        `,
            className
        )}
        >
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => router.back()} className={"rounded-full bg-[#626262]/[.5] flex items-center justify-center hover:opacity-75 transition"}>
                        <RxCaretLeft className={"text-white"} size={35} />
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default HomeContent;