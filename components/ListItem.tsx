'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";

interface ListItemProps {
    name: string;
    href: string;
    classname: string;
}

const ListItem: React.FC<ListItemProps> = ({
    name,
    href,
    classname
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

    return (
        <button onClick={onClick} className={classname}>
            <div className={"relative group flex items-center h-full bg-cover bg-center overflow-hidden hover:saturate-150 transition bg-[url('../public/images/favBg.jpg')]"}>
                <div className={'h-full w-full bg-black/[.4] flex items-center justify-center rounded-3xl backdrop-blur'}>
                    <p className={'truncate text-white font-medium'}>{name}</p>
                </div>
                <div className={'mx-10 transition rounded-full bg-black/[.4] flex items-center justify-center right-5 opacity-0 group-hover:opacity-100 hover:scale-110'}>
                    <Image src={'/images/play.svg'} alt={'play'} width={60} height={60} />
                </div>
            </div>

        </button>
    );
};

export default ListItem;