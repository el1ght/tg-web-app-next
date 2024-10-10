"use client"

import {usePathname} from "next/navigation";

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {
    const pathname = usePathname();

    return (
        <div className={"h-[100vh] relative shadow-md w-full bg-white overflow-y-auto rounded-3xl"}>
            {children}
            <p>Pathname: {pathname}</p>
        </div>
    );
};

export default Content;