import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    active?: boolean;
    href: string;
}

const SidebarButton: React.FC<SidebarItemProps> = ({
    icon: Icon,
    active,
    href
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                items-center
                justify-center
                h-16 
                w-16 
                rounded-full 
                bg-[#FFF8F2]/[.4] 
                transition
                shadow-xl
                text-black
                hover:bg-white
            `,
                active && "bg-white"
            )}
        >
            <Icon size={20} />
        </Link>
    );
};

export default SidebarButton;