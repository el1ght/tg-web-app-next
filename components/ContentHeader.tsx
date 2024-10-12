'use client'

import {useRouter} from "next/navigation";

interface ContentHeaderProps {
    children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
    children
}) => {
    const router = useRouter();

    return (
        <div className={"h-fit bg-gradient-to-b from-[#424242]/[.5] p-6"}>

        </div>
    );
};

export default ContentHeader;