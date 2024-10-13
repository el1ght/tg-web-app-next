'use client'

import {useRouter} from "next/navigation";
import {RxCaretLeft} from "react-icons/rx";

interface ContentHeaderProps {
    children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
    children
}) => {
    const router = useRouter();

    return (
        <div className={"h-full p-6"}>
            <div className="mb-4 flex items-center">
                <button onClick={() => router.back()} className={"rounded-full bg-[#FFF8F2]/[.4] flex items-center justify-center hover:opacity-75 transition"}>
                    <RxCaretLeft className={"text-black"} size={35} />
                </button>
            </div>

                {children}


        </div>
    );
};

export default ContentHeader;