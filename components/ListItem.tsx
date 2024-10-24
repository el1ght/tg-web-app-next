'use client'

import {useRouter} from "next/navigation";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    href: string;
}

const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(({
    className,
    name,
    href,
}, ref) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

    return (
        <button onClick={onClick} className={className}>
            <div className={"relative group flex items-center h-full bg-cover bg-center overflow-hidden hover:saturate-150 transition"}>
                <div className={'relative h-full w-full bg-black/[.3]'}>
                    <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>{name}</p>
                    <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                </div>
            </div>



        </button>
    );
});

export default ListItem;