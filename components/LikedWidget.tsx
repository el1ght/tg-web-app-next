'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";
import {forwardRef} from "react";

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    href: string;
}

const LikedWidget = forwardRef<HTMLButtonElement, ListItemProps>(({
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
            <div className={"relative group flex items-center h-full bg-cover bg-center overflow-hidden hover:saturate-150 transition bg-[url('../public/images/favBg-2.jpg')]"}>
                <div className={'relative h-full w-full bg-black/[.25] '}>
                    <p className={'truncate text-white text-left m-4 mb-0 text-lg'}>{name}</p>
                    <p className={'truncate text-white text-left ml-4 text-[0.7rem] max-w-[150px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                    <p className={'text-white text-right text-3xl absolute right-2 bottom-0.5'}>33</p>
                </div>
                <div className={'mx-5 transition rounded-full bg-black/[.4] flex items-center justify-center right-5 group-hover:scale-110'}>
                    <Image src={'/images/play.svg'} alt={'play'} width={60} height={60} />
                </div>
            </div>

        </button>
    );
});

export default LikedWidget;