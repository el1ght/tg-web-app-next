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
        <div className={"h-fit bg-gradient-to-b from-[#424242]/[.5] p-6"}>
            <div className="mb-4 flex items-center">
                <button onClick={() => router.back()} className={"rounded-full bg-[#424242] flex items-center justify-center hover:opacity-75 transition"}>
                    <RxCaretLeft className={"text-white"} size={35} />
                </button>
            </div>
            {children}
        </div>
    );
};

export default ContentHeader;