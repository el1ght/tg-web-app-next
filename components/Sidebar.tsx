"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import {FaHeart} from "react-icons/fa6";
import {PiPlaylistBold} from "react-icons/pi";
import {IoPersonAdd} from "react-icons/io5";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: FaHeart,
            label: 'Liked',
            active: pathname === '/search',
            href: '/liked'
        },
        {
            icon: PiPlaylistBold,
            label: 'Playlists',
            active: pathname === '/playlists',
            href: '/playlists'
        },
        {
            icon: IoPersonAdd,
            label: 'Friends',
            active: pathname === '/friends',
            href: '/friends'
        }
    ], [pathname])

    return (
        <div>
            <div className="absolute right-0 bottom-0 p-2 bg-[#424242]/[.55] backdrop-blur-md rounded-full shadow">
                <div className="flex flex-col gap-y-2">
                    {routes.map((item) => (
                        <SidebarButton
                            key={item.label}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;