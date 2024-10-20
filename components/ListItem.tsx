'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";
import {forwardRef} from "react";

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    href: string;
}

const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(({
    className,
    name,
    href,
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

    return (
        <button onClick={onClick} className={className}>
            <div className={"relative group flex items-center h-full bg-cover bg-center overflow-hidden hover:saturate-150 transition bg-[url('../public/images/favBg.jpg')]"}>
                <div className={'h-full w-full bg-black/[.4] flex items-center justify-center rounded-3xl backdrop-blur'}>
                    <p className={'truncate text-white'}>{name}</p>
                </div>
                <div className={'mx-5 transition rounded-full bg-black/[.4] flex items-center justify-center right-5 group-hover:scale-110'}>
                    <Image src={'/images/play.svg'} alt={'play'} width={60} height={60} />
                </div>
            </div>

        </button>
    );
});

export default ListItem;