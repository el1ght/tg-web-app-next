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
                <div className={'relative h-full w-full bg-black/[.3] rounded-3xl flex flex-col items-center justify-center'}>
                    <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>YOU</p>
                    <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>MAY</p>
                    <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>LIKE</p>
                </div>
            </div>



        </button>
    );
});

export default ListItem;